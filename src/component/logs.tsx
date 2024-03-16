import { useRef, useEffect, useState, forwardRef, useImperativeHandle, HTMLAttributes } from 'react'
import './logs.css'

interface LogComponentProps extends HTMLAttributes<HTMLDivElement> {
    // 其他组件属性
}

export interface LogComponentRef {
    addLog: (log: string) => void;
    getLogs: () => string
}

const LogComponent = forwardRef<LogComponentRef, LogComponentProps>((props, ref) => {
    const [logs, setLogs] = useState<string[]>([]);
    const bottomRef = useRef<HTMLDivElement>(null); // 用于自动滚动到底部

    const addLog = (log: string) => {
        setLogs((prevLogs) => [...prevLogs, log]);
    };

    const getLogs = (): string => {
        if (logs && logs.length > 0) {
            return logs.join("\n")
        }
        return ""
    }

    useImperativeHandle(ref, () => ({
        addLog,
        getLogs
    }));

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [logs, props]);

    return (
        <div className="output_log_container" {...props}>
            {logs.map((log, index) => (
                <div key={index}>{log}</div>
            ))}
            <div ref={bottomRef} /> {/* 一个空的div，用于滚动到底部 */}
        </div>
    );
})

export default LogComponent;
