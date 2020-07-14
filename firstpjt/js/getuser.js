var userName = document.getElementById("username");


db.collection("admin").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        userName.innerHTML += doc.data().name;
    });
});

