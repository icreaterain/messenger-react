import "./messageItem.scss"

interface MessageItemProps {
  message: {
    user: string
    text: string
  }
}

const MessageItem = ({ message }: MessageItemProps) => {
  const { user, text } = message

  return (
    <div
      className={`messageItem messageItem${
        user === "me" ? "--self" : "--other"
      }`}
    >
      {text}
    </div>
  )
}

export default MessageItem
