import firebase from "firebase/app"
import "@firebase/firestore"




const app = firebase.initializeApp( {
  apiKey: "AIzaSyCDUOkn_RUmPE9c0vUfXFyb4ZMxKxumr8k",
  authDomain: "coder-prueba.firebaseapp.com",
  projectId: "coder-prueba",
  storageBucket: "coder-prueba.appspot.com",
  messagingSenderId: "328218022769",
  appId: "1:328218022769:web:36d736c0385f3ebe089cd0"
});


export const getFirebase=()=>{
    return app
}

export const getFirestore=()=>{
    return firebase.firestore(app)
}