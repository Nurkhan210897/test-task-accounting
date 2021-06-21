import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyB7mwOBp5BkBwYEsLS956aKIElSCQCtA08",
    authDomain: "training-project-54d1b.firebaseapp.com",
    projectId: "training-project-54d1b",
    storageBucket: "training-project-54d1b.appspot.com",
    messagingSenderId: "617458624718",
    appId: "1:617458624718:web:3864c598fb36547064489f",
    measurementId: "G-CCJ0Q4GG3S"
};



let app = null;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}

export default firebase