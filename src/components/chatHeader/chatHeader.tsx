const user = {
  name: "Gennadii Mareichev",
  avatar: "https://avatars.githubusercontent.com/u/30478350",
}

const ChatHeader = () => {
  return (
    <header className="sticky top-0 p-3 mb-1.5 flex items-center justify-end z-10 h-14 font-semibold bg-token-main-surface-primary">
      <div className="rounded-full overflow-hidden">
        <img className="h-10 w-10" src={user.avatar} alt={user.name} />
      </div>
    </header>
  )
}

export default ChatHeader
