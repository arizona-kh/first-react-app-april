import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAt27lXZOhbWnSijmLepQ8oQAeWELgKxc4",
    authDomain: "first-react-app-april.firebaseapp.com",
    databaseURL: "https://first-react-app-april.firebaseio.com",
    projectId: "first-react-app-april",
    storageBucket: "first-react-app-april.appspot.com",
    messagingSenderId: "550366827376",
    appId: "1:550366827376:web:67adf975e787f429a335b5"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export default firebase;
