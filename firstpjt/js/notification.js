var noti = document.getElementById("notify");


db.collection('subscription_notification').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        if(doc.data().status === "pending"){
          var li = document.createElement("li");
          li.classList.add("list-group-item");
        li.innerHTML += "<a data-toggle='modal' data-target='#notModal'><b>You got a notification for</b> "+doc.data().vendorEmail+"</a>";
        noti.appendChild(li);
        var docId = doc.id;
          db.collection('subscription_notification').doc(docId).get().then(function(oneDoc){
              var img = document.createElement("img");
              var name=document.createElement("div");
              name.innerHTML +="<center>"+oneDoc.data().vendorEmail+"</center>";

              img.src = oneDoc.data().proofOfPayment;
              img.classList.add("listimage");

              document.getElementById("inputEmail").value = name.innerText;
              document.getElementById("pimg").appendChild(img);
              
          });
        }
    });
});

function activate(){

var email=document.getElementById("inputEmail").value;
db.collection('subscription_notification').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        if(doc.data().vendorEmail === email){
            var docId = doc.id;
    db.collection('subscription_notification').doc(docId).update({ status: "active" }).then(function(){
    window.alert("Update successful");
})
.catch(err => window.alert("Error: " + err.message));
        }
    });
});
}
function reject(){
    var email=document.getElementById("email").value;
    db.collection('subscription_notification').get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if(doc.data().vendorEmail === email){
                var docId = doc.id;
        db.collection('subscription_notification').doc(docId).update({ status: "reject" }).then(function(){
        window.alert("Update successful");
    })
    .catch(err => window.alert("Error: " + err.message));
            }
        });
    });
}