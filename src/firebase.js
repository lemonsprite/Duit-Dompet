// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
"firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIDv6xckrNLGP6YENJZyz5Zz--CR0gG2A",
  authDomain: "duit-dompet.firebaseapp.com",
  projectId: "duit-dompet",
  storageBucket: "duit-dompet.appspot.com",
  messagingSenderId: "1004892682496",
  appId: "1:1004892682496:web:91d8bf778f31d280e61be5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export default { db }