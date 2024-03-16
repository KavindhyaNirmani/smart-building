
// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
// Import the database module

const firebaseConfig = {
  apiKey: "AIzaSyAg5UCpTiRTyATE-F4Riax44HNuz_aSpmY",
  authDomain: "smart-x-bfd2a.firebaseapp.com",
  databaseURL: "https://smart-x-bfd2a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-x-bfd2a",
  storageBucket: "smart-x-bfd2a.appspot.com",
  messagingSenderId: "1078793811487",
  appId: "1:1078793811487:web:5fe4e7783c39c0ad60472a"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;// Export app, auth, and database

