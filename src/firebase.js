import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAyh7ayf0LAB1rkopjOQWHKeA3XBdGN_qA",
    authDomain: "think-piece-live-b6c4d.firebaseapp.com",
    databaseURL: "https://think-piece-live-b6c4d.firebaseio.com",
    projectId: "think-piece-live-b6c4d",
    storageBucket: "think-piece-live-b6c4d.appspot.com",
    messagingSenderId: "956610260971",
    appId: "1:956610260971:web:8139fcaff7e9b6ac8cb3ae",
    measurementId: "G-B9XD8K6KTB"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  window.firebase = firebase;

  export const firestore = firebase.firestore();
  export default firebase;