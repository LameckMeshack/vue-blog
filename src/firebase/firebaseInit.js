import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdkwqCsS5EgDSdFAj1eRH7qDbTxwybbko",
  authDomain: "vueblog-70675.firebaseapp.com",
  projectId: "vueblog-70675",
  storageBucket: "vueblog-70675.appspot.com",
  messagingSenderId: "1017852959886",
  appId: "1:1017852959886:web:b50cb5343d0b9985ed7ddf",
};


//initialize application

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();