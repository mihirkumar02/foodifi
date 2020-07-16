firebase.auth().onAuthStateChanged(function(user) {
    if(!user) {
        window.location.href="../admin_dashboard.html";
    } 
});


function logout() {
    firebase.auth().signOut().then(function() {
        window.location.href = "../admin_dashboard.html";
    })
    .catch(function(error) {
        window.alert("Error:" + error);
    });
}
