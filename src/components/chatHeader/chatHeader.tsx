import { useRef, useState } from "react"
import Popup from "reactjs-popup"
import {
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/auth"
import { createUserDocumentFromAuth } from "../../utils/firebase/db"
import { UserCredential } from "firebase/auth"
import "reactjs-popup/dist/index.css"
import { PopupActions } from "reactjs-popup/dist/types"

type User = {
  displayName: string
  photoURL: string
}

const defaultUser = {
  displayName: "",
  photoURL: "https://avatars.githubusercontent.com/u/0",
}

const defaultSignUpFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const ChatHeader = () => {
  const [formFields, setFormFields] = useState(defaultSignUpFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const [isSignUpForm, setIsSignUpForm] = useState(false)
  const [user, setUser] = useState<User>(defaultUser)

  const popupRef = useRef<PopupActions | null>(null)
  const closePopup = () => popupRef.current && popupRef.current.close()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultSignUpFormFields)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault()

    if (isSignUpForm) {
      if (password !== confirmPassword) {
        alert("The pasword doesn`t match the confirm password field")
        return
      }

      const response = await createAuthUserWithEmailAndPassword(email, password)
      if (response) {
        await createUserDocumentFromAuth({
          ...response.user,
          displayName,
        })

        setUser({
          displayName: displayName || "",
          photoURL: defaultUser.photoURL,
        })

        closePopup()
        resetFormFields()
      }
    } else {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      if (response) {
        const { displayName, photoURL } = response.user
        setUser({
          displayName: displayName || "",
          photoURL: photoURL || defaultUser.photoURL,
        })
        closePopup()
        resetFormFields()
      }
    }
  }

  const logGoogleUser = async () => {
    const { user } = (await signInWithGooglePopup()) as UserCredential
    await createUserDocumentFromAuth(user)

    const { displayName, photoURL } = user
    setUser({
      displayName: displayName || "",
      photoURL: photoURL || defaultUser.photoURL,
    })

    closePopup()
  }

  return (
    <header className="sticky top-0 p-3 mb-1.5 flex items-center justify-end z-10 h-14 font-semibold bg-token-main-surface-primary">
      <Popup
        ref={popupRef}
        trigger={
          <div className="rounded-full overflow-hidden cursor-pointer">
            <img
              className="h-10 w-10"
              src={user.photoURL}
              alt={user.displayName}
            />
          </div>
        }
        modal
      >
        <div className="flex flex-col">
          <div className="mx-8 mt-4">
            <form className="flex flex-col my-2" onSubmit={handleSubmit}>
              {isSignUpForm && <label>Display name</label>}
              {isSignUpForm && (
                <input
                  className="border-b-2"
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={handleChange}
                  required={isSignUpForm}
                />
              )}
              <label className="mt-2">Email</label>
              <input
                className="border-b-2"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <label className="mt-2">Password</label>
              <input
                className="border-b-2"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              {isSignUpForm && <label className="mt-2">Confirm password</label>}
              {isSignUpForm && (
                <input
                  className="border-b-2"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  required={isSignUpForm}
                />
              )}
              <div className="my-4">
                <input
                  id="isSignUpForm"
                  type="checkbox"
                  onChange={(event) => {
                    setIsSignUpForm(event.target.checked)
                  }}
                />
                <label htmlFor="isSignUpForm" className="ml-2">
                  I don't have an account
                </label>
              </div>
              <button
                className="bg-indigo-500 p-2 rounded text-white"
                type="submit"
              >
                {isSignUpForm ? "Sign-Up" : "Sign-In"}
              </button>
            </form>
          </div>
          <button
            className="bg-[#E5464F] p-2 mx-8 my-4 rounded text-white"
            onClick={logGoogleUser}
          >
            Google Sign-In
          </button>
        </div>
      </Popup>
    </header>
  )
}

export default ChatHeader
