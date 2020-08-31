  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-pgPPqM56EDZEeCIFilSTIFp47iCYgtA",
    authDomain: "instagram-clone-react-eca72.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-eca72.firebaseio.com",
    projectId: "instagram-clone-react-eca72",
    storageBucket: "instagram-clone-react-eca72.appspot.com",
    messagingSenderId: "656497776328",
    appId: "1:656497776328:web:e653184636e0d413ed37fd",
    measurementId: "G-6R9BY656D5"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage()

  export {db , auth, storage };


  