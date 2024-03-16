import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ConfigContext from './config'
import './index.css'

const config = {
  llm_api: "http://127.0.0.1:1234/v1/chat/completions",
  tts_api: "http://127.0.0.1:8000/v1/audio/speech",
  llm_key: "",
  translate_count: 5
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ConfigContext.Provider value={config}>
    <App />
    </ConfigContext.Provider>
  </React.StrictMode>,
)
