import Popup from "reactjs-popup"
import { signInWithGooglePopup } from "../../utils/firebase/auth"
import { createUserDocumentFromAuth } from "../../utils/firebase/auth"
import { UserCredential } from "firebase/auth"
import "reactjs-popup/dist/index.css"

const user = {
  name: "Gennadii Mareichev",
  avatar: "https://avatars.githubusercontent.com/u/30478350",
}

const ChatHeader = () => {
  const logGoogleUser = async () => {
    const { user } = (await signInWithGooglePopup()) as UserCredential
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log("→", "chatHeader", "userDocRef", userDocRef)
  }

  return (
    <header className="sticky top-0 p-3 mb-1.5 flex items-center justify-end z-10 h-14 font-semibold bg-token-main-surface-primary">
      <Popup
        trigger={
          <div className="rounded-full overflow-hidden cursor-pointer">
            <img className="h-10 w-10" src={user.avatar} alt={user.name} />
          </div>
        }
        modal
      >
        <div className="m-8">
          <button onClick={logGoogleUser}>Sign-In</button>
        </div>
      </Popup>
    </header>
  )
}

export default ChatHeader
