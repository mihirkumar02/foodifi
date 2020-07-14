const db = firebase.firestore();


function forgot() {
    var auth = firebase.auth();
    var forgotEmail = document.getElementById("forgot-email").value;

    if(forgotEmail != ""){
        auth.sendPasswordResetEmail(forgotEmail).then(function(){
            window.alert("An Email with instructions has been sent to " + forgotEmail);
        })
        .catch(err => window.alert("Error is: " + err.message));
    } else {
        window.alert("Please provide a valid Email address.");
    }
}

