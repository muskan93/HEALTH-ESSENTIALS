// const firebase = require('firebase');
// import firebase from 'firebase';
(function () {
    var firebaseConfig = {
    apiKey: "AIzaSyDp9oUTAzfSUxVZ8BqqztRlS39Nklni9AA",
    authDomain: "health-558ae.firebaseapp.com",
    projectId: "health-558ae",
    storageBucket: "health-558ae.appspot.com",
    messagingSenderId: "1040982098229",
    appId: "1:1040982098229:web:c21845db5936039929cc7c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    console.log(firebase);
    // const auth = firebase.auth();
    // 
    // firebase.analytics();

    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const signups = document.getElementById("signups");
    const logouts = document.getElementById("logouts");
    const signins = document.getElementById("signins");


    signins.addEventListener('click', e => {
        const txtEmail = email.value;
        const txtPass = pass.value;
        const auth = firebase.auth();
        // console.log(auth);
        // console.log(txtPass);
        const promise = auth.signInWithEmailAndPassword(txtEmail, txtPass);
        promise
            .then(() => {
                var element = document.getElementById("error");
                element.classList.remove("hide");
                element.innerHTML = "Successfully LogIn";

                // document.getElementById('error').innerHTML = "Successfully LogIn";
                // document.getElementById('error').classList.remove("hide");

            })
            .catch(e => {
                var element = document.getElementById("error");
                element.classList.remove("hide");
                document.getElementById('error').innerHTML = e.message;
            });


    })

    signups.addEventListener('click', e => {
        const txtEmail = email.value;
        const txtPass = pass.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(txtEmail, txtPass);
        promise
            .then(() => {
                var element = document.getElementById("error");
                element.classList.remove("hide");
                element.innerHTML = "Successfully SignUp";
            })
            .catch(e => {
                var element = document.getElementById("error");
                element.classList.remove("hide");
                element.innerHTML = e.message;


            })
    })

    logouts.addEventListener('click', e => {
        const promise = firebase.auth().signOut();
        promise
            .then(() => {
                var element = document.getElementById("error");
                element.classList.remove("hide");
                element.innerHTML = "Successfully LogOut";
            })
            .catch(e => {
                var element = document.getElementById("error");
                element.classList.remove("hide");
                element.innerHTML = e.message;
            })
    })
}());