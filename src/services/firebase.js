import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBsbBRErBSfk2-cL3lqfJMg4Vd88mo-_bI",
  authDomain: "chittychatty-4e562.firebaseapp.com",
  databaseURL: "https://chittychatty-4e562.firebaseio.com",
  projectId: "chittychatty-4e562",
  storageBucket: "chittychatty-4e562.appspot.com",
  messagingSenderId: "947011546127",
  appId: "1:947011546127:web:5a48d5a162a6adf443877a",
  measurementId: "G-HRSM4QZ9NN",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
