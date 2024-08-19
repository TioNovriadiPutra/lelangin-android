import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWMbGekcsvA8yxS1BZt59-ZFIkYf5V8ko",
  authDomain: "lelangin-adb8a.firebaseapp.com",
  projectId: "lelangin-adb8a",
  storageBucket: "lelangin-adb8a.appspot.com",
  messagingSenderId: "860529864988",
  appId: "1:860529864988:web:dbd4a096a365e387504ad9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
