import "./App.scss"
import MessageItem from "./components/messageItem"

const user = {
  name: "Gennadii Mareichev",
  avatar: "https://avatars.githubusercontent.com/u/30478350",
}

const messages = [
  { id: 1, user: "assistant", text: "Hi! How can I help you?" },
  { id: 2, user: "me", text: "Hi!" },
]

function App() {
  return (
    <div className="messages__container">
      <header className="messages__header">
        <img src={user.avatar} alt={user.name} />
      </header>
      <div className="messages__list">
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
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
