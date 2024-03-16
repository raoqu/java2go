import React,{Context} from 'react';

interface GlobalOption {
    llm_api :string
    tts_api : string
    llm_key : string
    translate_count: number
}

const ConfigContext:Context<GlobalOption> = React.createContext({
    llm_api: "http://127.0.0.1:1234/v1/chat/completions",
    tts_api: "http://127.0.0.1:8000/v1/audio/speech",
    llm_key: "",
    translate_count: 3,
});

export default ConfigContext;