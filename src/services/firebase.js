import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {

  
  //  PUT YOUR CREDENTIALS HERE from Firebase SDK setUp

};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
