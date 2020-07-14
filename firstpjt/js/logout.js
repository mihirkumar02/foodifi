firebase.auth().onAuthStateChanged(function(user) {
    if(!user) {
        window.location.href="../index.html";
    } 
});


function logout() {
    firebase.auth().signOut().then(function() {
        window.location.href = "../public/logout.html";
    })
    .catch(function(error) {
        window.alert("Error:" + error);
    });
}
