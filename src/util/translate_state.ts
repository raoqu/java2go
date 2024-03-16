/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReadText, SaveText, Txt2Docx, Translate } from '@/api/apis'
import TimeSerials, { SerialItem } from '@/util/time_serials'
import { splitPath } from '@/util/path'

export enum TranslateStatus {
    None,
    Sentence,
    File
}

export default class TranslateState {
    public static MAX_TRANSLATE_TOKEN = 2048;
    public static MAX_TRANSLATE_SENTENCE = 3;

    status: TranslateStatus = TranslateStatus.None
    textPath: string = ''
    reorgPath: string = ''
    chinesePath: string = ''
    offset: number = 0
    content: string | null = null
    serials: TimeSerials | null = null
    reorg: TimeSerials | null = null
    chinese: TimeSerials | null = null
    logCallback: any = null
    startCallback: any = null
    completeCallback: any = null
    progressCallback: any = null
    failCallback: any = null
    sentenceCount: number = TranslateState.MAX_TRANSLATE_SENTENCE

    constructor() {
    }

    public reset(): void {
        this.status = TranslateStatus.None
        this.offset = 0
    }

    public config(sentenceCount: number): void {
        this.sentenceCount = sentenceCount
    }

    public beginTranslateFile(textPath: string, logCallback: any, startCallback: any, progressCallback: any, completeCallback: any, failCallback: any): void {
        this.logCallback = logCallback
        this.startCallback = startCallback
        this.completeCallback = completeCallback
        this.progressCallback = progressCallback
        this.failCallback = failCallback
        this.textPath = textPath
        const path = splitPath(textPath)
        this.reorgPath = path.clone().setFileName(path.filename + '_reorg').compose()
        this.chinesePath = path.clone().setFileName(path.filename + '_chinese').compose()
        this.offset = 0

        ReadText(textPath).then((text: string) => {
            this.log('read complete')
            this.serials = new TimeSerials().parse(text)
            this.reorg = this.serials.clone()

            SaveText(this.reorg.toString(), this.reorgPath || '').then((_value:string)=>{
                const docxPath = splitPath(this.reorgPath).setExtension('.docx').compose()
                // this.log(docxPath)
                Txt2Docx(this.reorgPath, docxPath)
            })

            setTimeout(startCallback, 0)

            this.chinese = this.reorg.clone()
            this.goOn()
        }).catch(() => {
        })
    }

    public goOn() {
        if (!this.chinese) {
            this.fail(0, "")
            return
        }

        const arr: string[] = this.prepare()
        if (arr.length < 1) {
            this.complete()
        }

        const input = arr.join('\n')
        Translate(input).then((output: string) => {
            if (output) {
                const nextIndex = this.offset + arr.length
                const nProgress = this.chinese ? Math.min(nextIndex * 100 / this.chinese.serials.length, 100) : 0
                const result = output.split('\n')
                this.chinese && this.updateSerials(this.chinese.serials, this.offset, result)
                this.offset += result.length
                this.progress(nProgress, input, output)
            } else {
                const nProgress = this.chinese ? Math.min(this.offset * 100 / this.chinese.serials.length, 100) : 0
                this.fail(nProgress, input)
            }
        })
    }

    public prepare(): string[] {
        if (!this.chinese) {
            return []
        }

        const arr: string[] = []
        let len = 0;
        const serials = this.chinese.serials
        for (let i = this.offset; i < serials.length; i++) {
            const content = serials[i].content || ''
            if (i != this.offset && (i - this.offset >= this.sentenceCount || len + content.length >= TranslateState.MAX_TRANSLATE_TOKEN)) {
                break;
            }
            arr.push(content)
            len += content.length
        }

        return arr
    }

    public translateSentence(sentence: string, callback: any): void {
        this.status = TranslateStatus.Sentence
        this.content = sentence
        callback && callback()
    }

    public translateNone(): void {
        this.status = TranslateStatus.None
    }

    public updateSerials(serials: SerialItem[], begin: number, result: string[]): void {
        for (let i = begin, n = 0; i < serials.length && n < result.length; i++, n++) {
            const content = result[n]
            this.log('> ' + serials[i].content)
            this.log('  ' + content)
            serials[i].content = content
        }
    }

    public log(str: string): void { this.logCallback && this.logCallback(str) }

    public progress(nProgress: number, input: string, output: string): void {
        this.progressCallback && this.progressCallback(nProgress, input, output)
    }

    public complete(): void {
        this.completeCallback && this.completeCallback()
    }

    public fail(nProgress: number, input: string) {
        this.failCallback && this.failCallback(nProgress, input)
    }
}
