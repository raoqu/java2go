export interface WSMessage {
  success: boolean
  data: string
}

export interface WSProcessor {
  onMessage: ((msg: WSMessage) => void)
  onOpen: null | ((ws: WebSocket) => void)
  onError: null | (() => void)
  onClose: null | (() => void | null)
}

// wsurl: 'ws://127.0.0.1:1366/ws'
const WSS = (wsurl: string, input: string, processor: WSProcessor) => {
  const newSocket = new WebSocket(wsurl);

  newSocket.onopen = () => {
    newSocket.send(input)
    processor.onOpen && processor.onOpen(newSocket)
  };

  // 监听接收到的消息
  newSocket.onmessage = (event: MessageEvent) => {
    const message: WSMessage = JSON.parse(event.data)
    processor.onMessage && processor.onMessage(message)
  };

  // 当连接关闭时执行回调
  newSocket.onclose = () => {
    processor.onClose && processor.onClose()
  }

  return () => {
    if (newSocket.readyState === WebSocket.OPEN) {
      newSocket.close();
    }
  }
}

export default WSS;