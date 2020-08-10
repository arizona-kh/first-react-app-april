
// STEP 1: set up firebase 

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';
// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import 'firebase/auth';

// Your app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAt27lXZOhbWnSijmLepQ8oQAeWELgKxc4",
    authDomain: "first-react-app-april.firebaseapp.com",
    databaseURL: "https://first-react-app-april.firebaseio.com",
    projectId: "first-react-app-april",
    storageBucket: "first-react-app-april.appspot.com",
    messagingSenderId: "550366827376",
    appId: "1:550366827376:web:67adf975e787f429a335b5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

// Finally, export it to use it throughout your app
  export default firebase;
