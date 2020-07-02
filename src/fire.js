const firebase = require('firebase/app');

require("firebase/firestore");

const fire =  firebase.initializeApp({
    apiKey: "AIzaSyBGzEyR2yrus-wAU6B7fHF_U6gR6AKQhCU",
    authDomain: "email-garca.firebaseapp.com",
    databaseURL: "https://email-garca.firebaseio.com",
    projectId: "email-garca",
    storageBucket: "email-garca.appspot.com",
    messagingSenderId: "73020057706",
    appId: "1:73020057706:web:c61948ffe3d57780a14213"
  })

export default fire.firestore()