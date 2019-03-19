  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Initialize firebase
  var config = {
    apiKey: "AIzaSyCAnmuMhAmc1LS_xo4uKaL6Sbr1AkQq0l0",
    authDomain: "sohoeland.firebaseapp.com",
    databaseURL: "https://sohoeland.firebaseio.com",
    projectId: "sohoeland",
    storageBucket: "sohoeland.appspot.com",
    messagingSenderId: "981067312137"
  };

  firebase.initializeApp(config);
//   firebase.firestore().setting({ timestampsInSnapshots: true });
  export default firebase;