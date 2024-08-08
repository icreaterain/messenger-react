import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAqSZd-Oi-hOvCzVqvtME7uhnKVq6dprHw",
  authDomain: "messenger-react-e0e98.firebaseapp.com",
  projectId: "messenger-react-e0e98",
  storageBucket: "messenger-react-e0e98.appspot.com",
  messagingSenderId: "123771124500",
  appId: "1:123771124500:web:80679a0bc47bcc61216001",
  measurementId: "G-CK9ZVDVS6F",
}

initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  try {
    return await createUserWithEmailAndPassword(auth, email, password)
  } catch (e) {
    console.error("Error creating the user.", (e as Error).message)
  }
}

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    console.error("Error signing in the user.", (e as Error).message)
  }
}
