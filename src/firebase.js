import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD7WdTUEl8FPoG7ouriRsNklDhYiUxtpgw",
  authDomain: "metzger-website.firebaseapp.com",
  projectId: "metzger-website",
  storageBucket: "metzger-website.appspot.com",
  messagingSenderId: "478931865735",
  appId: "1:478931865735:web:76b480fe4dd9a47c67e822",
  measurementId: "G-7B1VX3FMN2"
});

var db = firebaseApp.firestore();

export { db };