import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyB2o8IhFrp5ZWGXe3eWtM78qk85sh-mavY",
  authDomain: "imageupdrive-9a2d4.firebaseapp.com",
  projectId: "imageupdrive-9a2d4",
  storageBucket: "imageupdrive-9a2d4.appspot.com",
  messagingSenderId: "512580790990",
  appId: "1:512580790990:web:0ad684186072b105e23e9f",
  measurementId: "G-X0TB7F30VX"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
