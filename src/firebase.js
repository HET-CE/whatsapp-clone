import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCWJ9zy3sd-0OZKUHnNbbHoQ1r2cXA89wk",
    authDomain: "whatsapp-clone-b598a.firebaseapp.com",
    projectId: "whatsapp-clone-b598a",
    storageBucket: "whatsapp-clone-b598a.appspot.com",
    messagingSenderId: "334008556902",
    appId: "1:334008556902:web:c9a1825c631ca786edfca7",
    measurementId: "G-PEYTXHB03L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider};
export default db;