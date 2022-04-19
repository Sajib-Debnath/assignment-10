// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADnYARnmar5nW3bxv-re_PTWHScTrOBZM",
    authDomain: "service-provider-651da.firebaseapp.com",
    projectId: "service-provider-651da",
    storageBucket: "service-provider-651da.appspot.com",
    messagingSenderId: "403543944645",
    appId: "1:403543944645:web:2083ae3b2b42884d10efac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;