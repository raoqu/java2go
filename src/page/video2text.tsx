/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Button } from 'antd'
import {
    RegisterEvent, UnregisterEvent,
    SelectFile, ServerURL, ExecuteCommand, SaveText
} from '@/api/apis'
import { useState, useRef, useEffect } from 'react'
import { Player, Video, DefaultUi, usePlayerContext } from '@vime/react'
import { Space } from 'antd'
import { splitPath } from '@/util/path'
import LogComponent, { LogComponentRef } from '@/component/logs'
import '@vime/core/themes/default.css'
import TapSidesToSeek from './player_slide';

const VideoToText = () => {
    const logsRef = useRef<LogComponentRef>(null)
    const player = useRef<HTMLVmPlayerElement>(null)
    const [currentTime] = usePlayerContext(player, 'currentTime', 0)
    const [mediaPath, setMediaPath] = useState('')
    const [wavePath, setWavePath] = useState('')
    const [textPath, setTextPath] = useState('')
    const [serverUrl, setServerUrl] = useState('')
    const [streamUrl, setSteamUrl] = useState('')

    const [cmdWave, setCmdWave] = useState(false)
    const [cmdWhisper, setCmdWhisper] = useState(false)
    const [cmdText, setCmdText] = useState(false)

    useEffect(() => {
        ServerURL().then((url: string) => {
            setServerUrl(url)
        }).catch((error: any) => {
            console.log(error)
        })

        registerEvents()

        return unregisterEvents
    }, [])

    useEffect(() => {
        console.log(currentTime);
    }, [currentTime]);

    useEffect(() => {
        if (cmdWave) {
            // log('MEDIA TO WAV ' + mediaPath + ',' + wavePath)
            if (mediaPath && wavePath)
                ExecuteCommand("media_to_wav", [mediaPath, wavePath])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cmdWave])

    useEffect(() => {
        if (cmdWhisper) {
            // log('WHISPER: ' + wavePath + ',' + textPath)
            if (wavePath && textPath) {
                ExecuteCommand('whisper', [wavePath])
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cmdWhisper])

    useEffect(() => {
        if (cmdText) {
            // log('SAVE TEXT: ' + textPath)
            const text = logsRef.current ? logsRef.current.getLogs() : ""
            if (text && textPath) {
                SaveText(text, textPath)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cmdText])

    const registerEvents = () => {
        RegisterEvent("shell", onShellOutput)
        RegisterEvent("shell_error", onShellError)
        RegisterEvent("shell_complete", onShellComplete)
    }

    const unregisterEvents = () => {
        UnregisterEvent("shell")
        UnregisterEvent("shell_error")
        UnregisterEvent("shell_complete")
    }

    const log = (line: string) => {
        logsRef.current && logsRef.current.addLog(line)
    }

    const onShellOutput = (line: string) => {
        log(line)
    }

    const onShellError = (commandName: string) => {
        if (commandName == "media_to_wav") {
        }
        else if (commandName == "whisper") {
        }
        log("ERROR RUN " + commandName)
    }

    const onShellComplete = (commandName: string) => {
        if (commandName === "media_to_wav") {
            setCmdWhisper(true)
        }
        else if (commandName === "whisper") {
            setCmdText(true)
        }
    }

    const onSelectFile = () => {
        SelectFile('Video (*.mp4;*.mov) | Audio (*.mp3;*.wav)')
            .then((filePath: string) => {
                if (filePath) {
                    setMediaPath(filePath)

                    const detail = splitPath(filePath)
                    detail.extension = '.wav'
                    const wave_path = detail.compose()
                    setWavePath(wave_path)

                    detail.extension = '.txt'
                    const text_path = detail.compose()
                    setTextPath(text_path)

                    const url = serverUrl + '/stream?path=' + encodeURIComponent(filePath)
                    console.log(url)
                    setSteamUrl(url)

                    // media to wave
                    setCmdWave(true)
                }
            }).catch(() => {
            })
    }
    const onPlaybackReady = () => {
        // ...
    };

    return (
        <div>
            <Card>
                <Space><Button onClick={onSelectFile}>选择文件</Button><span>{streamUrl}</span></Space>
            </Card>
            {mediaPath && <Card>
                <Player playsinline ref={player} onVmPlaybackReady={onPlaybackReady}>
                    <Video /*https://media.vimejs.com/poster.png*/>
                        <source data-src={streamUrl} type="video/mp4" />
                    </Video>

                    <DefaultUi>
                        {/* Custom UI Component. */}
                        <TapSidesToSeek />
                    </DefaultUi>
                </Player>
                <p>{mediaPath}<br />{wavePath}<br />{textPath}</p>
                <LogComponent ref={logsRef} />
            </Card>}
        </div>
    )
}

export default VideoToText;