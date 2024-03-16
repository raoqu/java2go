import { LangPartType } from "./javastate"

export class LangPart {
    public value: any
    public name?: string
    public type: LangPartType = LangPartType.none
}

export class LangComment {
    public lines: string[] = []//注释内容，可能包含空行
    public multiple: boolean = false// 多行注释是指类似 /* */ 的注释
}

export class LangPackage {
    public name: string = ""
}

export class LangClass {

}

export class LangResult {
    public parts: LangPart[] = []
}


function ParseJava(source: string): LangResult {
    const lines = (source||"").split("\n")
    const result = new LangResult()
    return result
}