var db = firebase.firestore();
function getu(){
  document.getElementById("susers").style.display = "none";
  document.getElementById("users").style.display = "block";
  document.getElementById("back").style.display = "none";
}
function getuser(){
  document.getElementById("users").style.display = "none";
  document.getElementById("back").style.display = "block";
  var user=document.getElementById("uname").value;
  console.log(user);
  var susersList = document.getElementById("susers");
  db.collection('customer_collection')
  .get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      document.getElementById("susers").style.display = "block";
      if(doc.data().name===user){
        susersList.innerHTML += "<tr><td>"+doc.data().name+"</td><td>"+doc.data().email+"</td><td>"+doc.data().phone+
        "</td><td class='text-center'><i class='fa fa-edit' data-toggle='modal' data-target='#sliderModal'></i></td></tr>"
      }
    });
});
//document.getElementById("users").style.display = "block";
}
var usersList = document.getElementById("users");
document.getElementById("susers").style.display = "none";
document.getElementById("back").style.display = "none";
document.getElementById("users").style.display = "block";
db.collection('customer_collection').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      usersList.innerHTML += "<tr><td>"+doc.data().name+"</td><td>"+doc.data().email+"</td><td>"+doc.data().phone+
      "</td><td class='text-center'><i class='fa fa-edit' data-toggle='modal' data-target='#sliderModal'></i></td></tr>"
      
    });
  
});
