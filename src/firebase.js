import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAg5UCpTiRTyATE-F4Riax44HNuz_aSpmY",
  authDomain: "smart-x-bfd2a.firebaseapp.com",
  databaseURL: "https://smart-x-bfd2a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-x-bfd2a",
  storageBucket: "smart-x-bfd2a.appspot.com",
  messagingSenderId: "1078793811487",
  appId: "1:1078793811487:web:5fe4e7783c39c0ad60472a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth};