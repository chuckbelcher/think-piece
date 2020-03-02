import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
  export const auth = firebase.auth();
  export const firebaseSignOut = () => auth.signOut();
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;
    
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
      const { displayName, email, photoURL } = user
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.error('Error creating user profile document', error.message);
      }
    }

    return getUserDocument(user.uid);
  }

  export const getUserDocument = async (uid) => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.collection('users').doc(uid).get();
      return { uid, ...userDocument.data() }
    } catch (error) {
      console.error('Error retrieving user profile document', error.message);
    }
  }

  export default firebase;