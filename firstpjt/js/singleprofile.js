const db = firebase.firestore();

var upperName = document.getElementById("upper-name");

db.collection("admin").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        upperName.innerHTML += doc.data().name;
    });
});



function editProfile() {
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;

    var existingName = "";
    var existingContact = "";
    var existingEmail = "";
    
    var profileImage = document.getElementById("prof").files[0];
    var profileImageName = profileImage.name;

    var storageRef = firebase.storage().ref('profileImage/' + profileImageName);
    
    var uploadTask = storageRef.put(profileImage);
    

    uploadTask.on('state_changed', function(snapshot) {
    var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;

    console.log("Upload is " + progress + "% done");
    },function(error){
        console.log(error.message);
    },function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            var url = downloadURL;

            db.collection("admin").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc){
                    
                    existingName = doc.data().name;
                    existingContact = doc.data().contact;
                    existingEmail = doc.data().email;


                    var newName = "";
                    var newContact = "";
                    var newEmail = "";

                    if(name == ""){
                        newName = existingName;
                    } else {
                        newName = name;
                    }
                                
                    if(contact == ""){
                        newContact = existingContact;
                    } else {
                        newContact = contact;
                    }
                
                    if(email == ""){
                        newEmail =  existingEmail;
                    } else {
                        newEmail = email;
                    }

                    console.log(newEmail);



                    db.collection("admin").doc("HJ2ZbpRXYGgeX3IeYMWZ").update({
                        name: newName,
                        contact: newContact,
                        email: newEmail,
                        image: url
                    })
                    .then(function(){
                        window.alert("Update successful");
                    })
                    .catch(err => window.alert("Error: " + err.message));
                });
            }); 
            
        });
    });
    setTimeout(() => {location.reload();}, 3000);
}