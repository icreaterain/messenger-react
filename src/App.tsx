import ChatHeader from "./components/chatHeader"
import MessagesList from "./components/messagesList"
import ChatInput from "./components/chatInput/chatInput"
import "./App.scss"

function App() {
  return (
    <main className="relative flex h-full w-full max-w-full flex-1 flex-col overflow-hidden gap-4">
      <ChatHeader />
      <MessagesList />
      <ChatInput />
    </main>
  )
}

export default App
