

// setting of firebase with our website
// const firebaseApp = firebase.initializeApp({ /* Firebase config */ 
// apiKey: "AIzaSyCSEEXT83cYpzmwOeYXW_xVR28SItxGIpU",
// authDomain: "loginpage-76cbc.firebaseapp.com",
// projectId: "loginpage-76cbc",
// storageBucket: "loginpage-76cbc.appspot.com",
// messagingSenderId: "565919845067",
// appId: "1:565919845067:web:e8f3202d09bd4c6e51694e",
// measurementId: "G-H1P8RF5HX9"
// });

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
 
// };


// signup user

const signupForm = document.querySelector(".sign-up-form");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // const email = signupForm.email.value;
    // const password = signupForm.password.value;
    const email=document.getElementById("signup-email").value;
 const password=document.getElementById("signup-password").value;

    // Create user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed up successfully
            const user = userCredential.user;
            console.log("User signed up:", user);
            // alert("Congratuation your account is created !!\n Now you can login!");
            window.location.href="../index.html";
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            var errorMessage = error.message;
            errorMessage=errorMessage.slice(9);
            for (let i = errorMessage.length - 1; i >= 0; i--) {
                if (errorMessage[i] === '(') {
                    errorMessage=errorMessage.substring(0, i);
                    break;
                }
            }
            console.error("Sign up error:", errorCode, errorMessage);
            document.getElementById("signup-error").textContent=errorMessage;

        });
});

// for login

const loginForm = document.querySelector(".sign-in-form");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // const loginEmail = loginForm["login-email"].value;
    // const loginPassword = loginForm["login-password"].value;
     const loginEmail=document.getElementById("login-email").value;
 const loginPassword=document.getElementById("login-password").value;

    // Sign in user with email and password
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
        .then((userCredential) => {
            // User logged in successfully
            const user = userCredential.user;
            window.location.href="../index.html";
            console.log("User logged in:", user);
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            var errorMessage = error.message;
            errorMessage=errorMessage.slice(9);
            for (let i = errorMessage.length - 1; i >= 0; i--) {
                if (errorMessage[i] === '(') {
                    errorMessage=errorMessage.substring(0, i);
                    break;
                }
            }
            console.error("Login error:", errorCode, errorMessage);
            console.error("Sign up error:", errorCode, errorMessage);
            document.getElementById("login-error").textContent=errorMessage;
            console.log(document.getElementById("login-error").textContent)

        });
});


