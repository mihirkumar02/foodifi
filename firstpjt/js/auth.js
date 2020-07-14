const db = firebase.firestore();

firebase.auth.Auth.Persistence.SESSION;

firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        window.user = user;
        window.location.href = "./public/welcome.html";
    } 
});


function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
    });
}

function logout() {
    firebase.auth().signOut().then(function() {
        window.location.href = "../public/logout.html"
    })
    .catch(function(error) {
        window.alert("Error:" + error);
    });
}

