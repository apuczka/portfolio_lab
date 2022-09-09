import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnHM3xP0ozR3zbKeiE46lMpS8V-_gP4ZE",
  authDomain: "oddajrzeczy-2ba33.firebaseapp.com",
  projectId: "oddajrzeczy-2ba33",
  storageBucket: "oddajrzeczy-2ba33.appspot.com",
  messagingSenderId: "857026929465",
  appId: "1:857026929465:web:e0e5c7a61eb5a76bd03ee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


const registerWithEmailAndPassword = async (email, password, repeat) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password, repeat);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "local",
        email,
      });
      
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };
  
  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
  };