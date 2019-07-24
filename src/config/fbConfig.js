import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDQg5X7z2fLUuvzK4ceCbRntq03KACf_mY",
    authDomain: "react-marioplan-616b2.firebaseapp.com",
    databaseURL: "https://react-marioplan-616b2.firebaseio.com",
    projectId: "react-marioplan-616b2",
    storageBucket: "",
    messagingSenderId: "410923609575",
    appId: "1:410923609575:web:9032075a9102d858"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});