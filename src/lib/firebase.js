// lib/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  // ... tu configuración
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)