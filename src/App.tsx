import "./App.scss"
import MessageItem from "./components/messageItem"

const messages = [
  { user: "me", text: "Hi!" },
  { user: "assistant", text: "Hi! How can I help you?" },
]

function App() {
  return (
    <div className="messages__container">
      <header className="messages__header">{/* <img /> */}</header>
      <div className="messages__list">
        {messages.map((message) => (
          <MessageItem message={message} />
        ))}
      </div>
      <div className="messages__input">
        <input className="messages__input-field" />
        <button className="messages__send-button">Send</button>
      </div>
    </div>
  )
}

export default App
