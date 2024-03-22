import { useEffect, useRef, useState } from 'react'
import { Button, Checkbox, Space } from 'antd'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Editor, { loader as MonacoLoader, Monaco, useMonaco, DiffEditor, MonacoDiffEditor } from '@monaco-editor/react';
import Java2Go from '@/util/java2go';
import WSS, { WSProcessor, WSMessage } from './util/webscoket';
import { DEFAULT_JAVA } from '@/converter/DefaultJava'

import './App.css'
import { initParserConfig } from './converter/ConverterConfig';

// MonacoLoader.config()

function App() {
  const monaco = useMonaco();
  const javaEditorRef = useRef<any>(null)
  const [java, setJava] = useState(DEFAULT_JAVA)
  const [diffJava, setDiffJava] = useState(DEFAULT_JAVA)
  const [diffGo, setDiffGo] = useState('package main')
  const [diff, setDiff] = useState(false)
  const [diffEditor, setDiffEditor] = useState<MonacoDiffEditor | null>(null)
  const [remote, setRemote] = useState(false)

  useEffect(() => {
    initParserConfig()
  }, [])

  useEffect(() => {
    // monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }, [monaco])

  function handleJavaEditorDidMount(editor: any, _monaco: any) {
    javaEditorRef.current = editor
  }

  function handleGenerate() {
    if (!javaEditorRef.current) return

    const val = javaEditorRef.current.getValue()
    setDiff(!diff)
    diffEditor?.getOriginalEditor().setValue(val)

    if (remote) {
      // remote generate
      WSS('ws://127.0.0.1:1366/ws', val, {
        onError: null,
        onClose: () => console.log('closed'),
        onOpen: null,
        onMessage: (msg: WSMessage) => { diffEditor?.getModifiedEditor().setValue(msg.data) }
      })
    }
    else {
      diffEditor?.getModifiedEditor().setValue(Java2Go(val))
    }
  }

  function handleDiffEditorDidMount(editor: MonacoDiffEditor, _monaco: Monaco) {
    setDiffEditor(editor)
  }

  function handleDiff() {
    const val = javaEditorRef.current?.getValue()
    diffEditor?.getOriginalEditor().setValue(val)
    // Java2Go request

    setDiff(!diff)
  }

  function handleCheckboxChange(e: any) {
    setRemote(e.target.checked)
  }

  return (
    <div className="Container">
      <div>
        <center><Space>
          {!diff && <Checkbox checked={remote} onChange={handleCheckboxChange}>远程</Checkbox>}
          {!diff && <Button onClick={handleGenerate}>生成</Button>}
          {diff && <Button onClick={handleDiff}>模式切换</Button>}
        </Space>
        </center>
      </div>
      <div className="BottomRow">
        <PanelGroup autoSaveId="example" direction="horizontal" className="PanelGroup" style={{ display: (diff ? 'none' : 'flex') }}>
          <Panel className="Panel" collapsible={true} defaultSize={50} order={1}>
            <div className="PanelContent">
              <Editor height="100vh" defaultLanguage="java" onMount={handleJavaEditorDidMount} defaultValue={java} />;
            </div>
          </Panel>
        </PanelGroup>
        <div className="diffView" style={{ display: (diff ? 'flex' : 'none') }}>
          <DiffEditor originalLanguage="java" modifiedLanguage='go' original={diffJava} modified={diffGo} onMount={handleDiffEditorDidMount} />
        </div>
      </div>
    </div>
  )
}

export default App
