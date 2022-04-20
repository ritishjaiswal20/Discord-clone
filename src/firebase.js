import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAWI-E6Jw4eUpE0mAmcXJY3dBEjp24my7k",
    authDomain: "discord-clone-ceae6.firebaseapp.com",
    projectId: "discord-clone-ceae6",
    storageBucket: "discord-clone-ceae6.appspot.com",
    messagingSenderId: "180233965958",
    appId: "1:180233965958:web:5e93ee13d4a317d4d39c07"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();
export{auth,provider};
export default db;
