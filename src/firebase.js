import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDKH53PrXHFc6mPlWKpAmkm9SwZqO7it3Y",
    authDomain: "instagram-clone-react-b0bee.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-b0bee-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-b0bee",
    storageBucket: "instagram-clone-react-b0bee.appspot.com",
    messagingSenderId: "296685102025",
    appId: "1:296685102025:web:954b868835748afc56fe18",
    measurementId: "G-LMN3LGMQDM"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };