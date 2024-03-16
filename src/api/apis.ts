/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Translate as translate
    , SelectFile as selectFile
    , ServerURL as serverURL
    , ExecuteCommand as executeCommand
    , SaveText as saveText
    , ReadText as readText
    , Txt2Docx as txt2Docx
} from '#/go/main/App'

import {EventsOn,EventsOff} from '#/runtime/runtime'

// function resultPromise<T>(value: T): Promise<T> {
//     return new Promise<T>((resolve) => {
//         setTimeout(() => resolve(value), 0);
//     })
// }

function promise<T, U extends any[] = []>(
    value: T,
    f: (...args: U) => Promise<T>,
    ...params: U
): Promise<T> {
    if (!import.meta.env.DEV) {
        return f(...params);
    }
    return new Promise<T>((resolve) => {
        setTimeout(() => resolve(value), 0);
    });
}

function RegisterEvent(event:string, callback:any) {
    if (!import.meta.env.DEV) {
        EventsOn(event, callback)
    }
    else {
    }
}

function UnregisterEvent(event:string) {
    if (!import.meta.env.DEV) {
        EventsOff(event)
    }
    else {
    }
}

function Translate(arg1: string): Promise<string> {
    return promise('这是一个苹果', translate, arg1)
}

function SelectFile(ftype: string): Promise<string> {
    return promise('c/abc/测试.mp4', selectFile, ftype)
}

function ServerURL(): Promise<string> {
    return promise('http://127.0.0.1', serverURL)
}

function ExecuteCommand(commandName:string, params:string[]):Promise<string> {
    return promise('', executeCommand, commandName, params)
}

function SaveText(text:string, filepath:string):Promise<string> {
     return promise('', saveText, text, filepath)
}

function ReadText(filepath:string):Promise<string> {
    return promise('', readText, filepath)
}

function Txt2Docx(filepath:string, targetPath:string):Promise<string> {
    return promise('', txt2Docx, filepath, targetPath)
}

export { 
    RegisterEvent, UnregisterEvent, 
    Translate, SelectFile, ServerURL,ExecuteCommand, SaveText, ReadText, Txt2Docx
}