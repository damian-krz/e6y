import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-v9PFV7zNZPwlyI_q9cArOGF8WlTGzR0",
    authDomain: "artnet-1ee44.firebaseapp.com",
    projectId: "artnet-1ee44",
    storageBucket: "artnet-1ee44.appspot.com",
    messagingSenderId: "716559640115",
    appId: "1:716559640115:web:2b2c29631575ffc2456546"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebase.firestore();