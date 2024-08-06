const ChatInput = () => {
  return (
    <div className="w-full flex px-3 text-base">
      <textarea className="flex-1 rounded-full bg-[#f4f4f4] max-h-[25dvh]" />
      <button className="rounded-full bg-[#d7d7d7] py-3 px-5 mx-2">
        &#9654;
      </button>
    </div>
  )
}

export default ChatInput
