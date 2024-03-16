/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react'
import { Card } from 'antd'
import { Button, Form, Input, Space, Flex, Progress } from 'antd'
import { SelectFile, SaveText, Translate } from '@/api/apis'
import LogComponent, { LogComponentRef } from '@/component/logs'
import TranslateState, { TranslateStatus } from '../util/translate_state'

interface TranslateProps {
    sentenceCount: number
}

const TextTranslate: React.FC<TranslateProps> = ({ sentenceCount }) => {
    const logsRef = useRef<LogComponentRef>(null)
    const translateState = useRef<TranslateState>(new TranslateState())

    const [initValues] = useState({ text: 'This is an apple.' })

    const [status, setStatus] = useState<TranslateStatus>(TranslateStatus.None)
    const [textPath, setTextPath] = useState('')
    const [chinesePath, setChinesePath] = useState('')

    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [progress, setProgress] = useState<number>(-1)

    const onTranslateText = (values: any) => {
        setStatus(TranslateStatus.Sentence)
        translateState.current.translateSentence(values.text, () => {
            setInput(values.text)
            setOutput('')
        })

        Translate(values.text).then((text: string) => {
            setOutput(text)
        }).finally(() => {
            setStatus(TranslateStatus.None)
        });
    }

    const log = (line: string) => {
        logsRef.current && logsRef.current.addLog(line)
    }

    const onFileTranslateComplete = () => {
        if (translateState.current?.chinese && translateState.current.chinesePath) {
            SaveText(translateState.current.chinese.toString(), translateState.current.chinesePath)

            setTextPath('')
            setChinesePath(translateState.current.chinesePath)
            setStatus(TranslateStatus.None)

            translateState.current.reset()
        }
    }

    const onSelectFile = () => {
        SelectFile('Text (*.txt)').then((filePath: string) => {
            if (!filePath || !translateState.current) return

            translateState.current.config(sentenceCount)

            // Input file path
            translateState.current.beginTranslateFile(filePath, log,
                (_start: any) => {
                    setTextPath(translateState.current.textPath)
                    setStatus(TranslateStatus.File)
                },
                (_progress: number, input: string, output: string) => {
                    setProgress(_progress)
                    setInput(input)
                    setOutput(output)
                    setTimeout(() => {
                        translateState.current && translateState.current.goOn()
                    }, 0)
                },
                (_complete: any) => { /** COMPLETE */
                    onFileTranslateComplete()
                },
                (_progress: number, _input: string) => { /** FAIL */
                    log('TRANSLATION TERMINATED IN FAILURE')
                    setStatus(TranslateStatus.None)
                })
        })
    }

    const addLog = () => {
        for (let i = 0; i < 3; i ++ )
            log('Add a log')
    }

    return (
        <div>
            <Card>
                {status != TranslateStatus.Sentence && <Space><Button onClick={onSelectFile} disabled={status != TranslateStatus.None}>选择文件</Button><span>{textPath || chinesePath}</span></Space>}
                {status != TranslateStatus.File && <Form name="complex-form" onFinish={onTranslateText} wrapperCol={{ span: 16 }} initialValues={initValues} style={{ textAlign: 'left', marginTop: '5px' }}>
                    <Form.Item label="英文">
                        <Space>
                            <Form.Item name="text" noStyle /*rules={[{ required: true, message: 'API 是必需的' }]}*/>
                                <Input style={{ width: 500 }} placeholder="Please input" disabled={status != TranslateStatus.None} />
                            </Form.Item>
                            <Button type="primary" htmlType="submit" disabled={status != TranslateStatus.None}>
                                翻译
                            </Button>
                            <Button onClick={addLog}>AddLog</Button>
                        </Space>
                    </Form.Item>
                </Form>}
                {status == TranslateStatus.File && <Flex gap="small" vertical>
                    <Progress percent={progress} status="active" showInfo={false} />
                </Flex>}
            </Card>
            <Card>
                {input && <div>
                    <div style={{ backgroundColor: '#445577', color: '#fefefe', padding: 1, width: '100%' }}>{input}&nbsp;</div>
                    <div style={{ backgroundColor: '#554488', color: '#fefefe', padding: 1, width: '100%' }}>{output}&nbsp;</div>
                </div>}
                <LogComponent ref={logsRef} />
            </Card>
        </div>
    )
}

export default TextTranslate;