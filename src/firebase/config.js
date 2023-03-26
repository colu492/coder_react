
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-sgKlS1ah_5dnDvXKiLoB5YzJ_zJCVm0",
    authDomain: "golloadventures-a30c0.firebaseapp.com",
    projectId: "golloadventures-a30c0",
    storageBucket: "golloadventures-a30c0.appspot.com",
    messagingSenderId: "288708670063",
    appId: "1:288708670063:web:0b810c1fd2604df020939a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);