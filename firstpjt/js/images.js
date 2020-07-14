const db = firebase.firestore();

function sliderUpdate() {  
    var imageNumber = document.getElementById("imageNumber").value;
    var image = document.getElementById("image").files[0];
    var imageName = image.name;
    
    var storageRef = firebase.storage().ref('sliderImages/' + imageName);
    
    var uploadTask = storageRef.put(image);
    

    uploadTask.on('state_changed', function(snapshot) {
    var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;

    console.log("Upload is " + progress + "% done");
    },function(error){
        console.log(error.message);
    },function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            var url = downloadURL;

            db.collection("home_slider_images").doc(imageNumber).
            update({
                image: url,
            })
            .then(function(){
                window.alert("Update successful");
            })
            .catch(err => window.alert("Error: " + err.message));
        });
    });
    setTimeout(() => {location.reload();}, 3000);
}
// ==========================================

// FETCHING IMAGES


db.collection("home_slider_images").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc){
        var colDiv = document.createElement("div");
        colDiv.classList.add("col-md-3", "col-sm-12");

        var sliderImgHolder = document.createElement("div");
        sliderImgHolder.classList.add("sliderimageholder");

        var img = document.createElement("img");
        img.src = doc.data().image;
        img.classList.add("sliderimage");
        img.alt = "Image";

        sliderImgHolder.appendChild(img);      
        colDiv.appendChild(sliderImgHolder);
        document.getElementById("addImage").appendChild(colDiv);
    });
});


