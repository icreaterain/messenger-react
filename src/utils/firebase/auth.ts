import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

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

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        createdAt,
      })
    } catch (e) {
      console.error("error creating the user", (e as Error).message)
    }
  }

  return userDocRef
}
