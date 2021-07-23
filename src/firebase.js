import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmWaziFfqLXppTp1l2eVKRAG_PlN0cqs0",
  authDomain: "gameloop-2be7d.firebaseapp.com",
  projectId: "gameloop-2be7d",
  storageBucket: "gameloop-2be7d.appspot.com",
  messagingSenderId: "407143399009",
  appId: "1:407143399009:web:2f1071abf89b078ce83420",
  measurementId: "G-1LZGZNMVK3",
};

const gameLoop = firebase.initializeApp(firebaseConfig);
