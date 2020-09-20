import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-m65w1pn5rTOXeYJx1bc50QiF7pMdGZE",
  authDomain: "twitter-clone-f204f.firebaseapp.com",
  databaseURL: "https://twitter-clone-f204f.firebaseio.com",
  projectId: "twitter-clone-f204f",
  storageBucket: "twitter-clone-f204f.appspot.com",
  messagingSenderId: "289446399220",
  appId: "1:289446399220:web:581426f462ab506fb862a1",
  measurementId: "G-DV1GVWKE2W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
