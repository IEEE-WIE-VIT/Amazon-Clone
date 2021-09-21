/*import firebase from 'firebase';*/
import firebase from 'firebase';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApESxhfaD0DbQuHjomCqwV3xkTw_IgNBM",
  authDomain: "clone-51d83.firebaseapp.com",
  projectId: "clone-51d83",
  storageBucket: "clone-51d83.appspot.com",
  messagingSenderId: "1011366692510",
  appId: "1:1011366692510:web:acc9acc9bd2406bdda1d8f",
  measurementId: "G-D8EYGP9Q9G"
};

// Initialize Firebase



const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export{db,auth};