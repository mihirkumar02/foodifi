const db = firebase.firestore();


function getuser(){
  document.getElementById("users").style.display = "none";
  var user=document.getElementById("uname").value;
  console.log(user);
  var susersList = document.getElementById("susers");
  db.collection('customer_collection')
  .get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      document.getElementById("susers").style.display = "block";
      if(doc.data().name===user){
        susersList.innerHTML += "<div class='card'><h6>"+doc.data().name+"</h6><p>Email : "+doc.data().email+"</p><p>Address : "+doc.data().address+
        "<p><p>Contact Number : "+doc.data().phone+"</p></div>"
      }
    });
});
}
var usersList = document.getElementById("users");
document.getElementById("susers").style.display = "none";
document.getElementById("users").style.display = "block";
db.collection('customer_collection').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        usersList.innerHTML += "<div class='card'><h6>"+doc.data().name+"</h6><p>Email : "+doc.data().email+"</p><p>Address : "+doc.data().address+
        "<p><p>Contact Number : "+doc.data().phone+"</p></div>"
    });
});


function getvendor(){
  document.getElementById("vendors").style.display = "none";
  document.getElementById("svendors").style.display = "block";
  var user=document.getElementById("name").value;
  var svendorsList = document.getElementById("svendors");
  db.collection('vendor_collection/vendors/registered_vendors/')
  .get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      if(doc.data().Name===user){
        svendorsList.innerHTML +=  "<div class='card'><p>Name : "+doc.data().Name+"</p><p>Email : "
      +doc.data().Email+"</p><p>Contact Number : "
      +doc.data().Phone+"</p></div>"
      }
    });
});
}


var vendorsList = document.getElementById("vendors");
document.getElementById("svendors").style.display = "none";
document.getElementById("vendors").style.display = "block";
db.collection('vendor_collection/vendors/registered_vendors/').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      vendorsList.innerHTML +=  "<div class='card'><p>Name : "+doc.data().Name+"</p><p>Email : "
      +doc.data().Email+"</p><p>Contact Number : "
      +doc.data().Phone+"</p></div>"
    });
});




var totalearning = 0;
db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {

   querySnapshot.forEach(function(doc) {
       totalearning += doc.data().totalCost;
   });
   earning.innerHTML += "<h3>" + totalearning + "</h3>";
});


  var total =0;
     db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {
    
        querySnapshot.forEach(function(doc) {
            total += doc.data().totalCost;
        });
        earnings.innerHTML += "<h3>" + total + "</h3>";
    });

