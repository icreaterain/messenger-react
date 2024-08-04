const ChatInput = () => {
  return (
    <div className="w-full flex px-3 text-base">
      <textarea className="flex-1 rounded-full bg-[#f4f4f4] max-h-[25dvh]" />
      <button className="rounded-full bg-[#d7d7d7] p-3 m-2">Send</button>
    </div>
  )
}

export default ChatInput
