import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyB614JSwpXHaQR2oTUDunWoCWFN3rNxH2E',
  authDomain: 'my-react-porfolio-dashboard.firebaseapp.com',
  projectId: 'my-react-porfolio-dashboard',
  storageBucket: 'my-react-porfolio-dashboard.appspot.com',
  messagingSenderId: '754318575783',
  appId: '1:754318575783:web:76512a969f697494d93382',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
export const signInWithCred = (email, pass) =>
  signInWithEmailAndPassword(auth, email, pass)
