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
      className={`m-4 p-6 text-left ${
        user === "me" ? "self-end max-w-[70%] rounded-3xl bg-[#f4f4f4]" : ""
      }`}
    >
      {text}
    </div>
  )
}

export default MessageItem
