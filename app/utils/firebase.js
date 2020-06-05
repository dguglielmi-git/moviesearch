import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDkSiwaej1iN1uF6XlaMXKWfW6QnLE-17k",
    authDomain: "movies-b81b6.firebaseapp.com",
    databaseURL: "https://movies-b81b6.firebaseio.com",
    projectId: "movies-b81b6",
    storageBucket: "movies-b81b6.appspot.com",
    messagingSenderId: "135576179703",
    appId: "1:135576179703:web:d29f42514fded24fde54f2"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);