import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import { User } from "firebase/auth"

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
      console.error("Error creating the user.", (e as Error).message)
    }
  }

  return userDocRef
}
