import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyB7S5H5dMiS0llCRLcgHPEUd1Bg3F_PIcE',
  authDomain: 'linkedin-clone-yt-bf350.firebaseapp.com',
  projectId: 'linkedin-clone-yt-bf350',
  storageBucket: 'linkedin-clone-yt-bf350.appspot.com',
  messagingSenderId: '1050787180518',
  appId: '1:1050787180518:web:e3aff27e203f39cfccb027',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
