import MessageItem from "../messageItem"

const messages = [
  { id: 2, user: "me", text: "Hi!" },
  { id: 1, user: "assistant", text: "Hi! How can I help you?" },
]

const MessagesList = () => {
  return (
    <div className="flex-1 flex flex-col justify-end h-full text-sm md:pb-32">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  )
}

export default MessagesList
