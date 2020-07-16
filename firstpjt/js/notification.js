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

function activate() {
    var email = document.getElementById("inputEmail").value;
    db.collection("subscription_notification")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.data().vendorEmail === email) {
            var docId = doc.id;
            db.collection("subscription_notification")
              .doc(docId)
              .update({ status: "active" })
              .then(async function () {
                window.alert("Update successful");
                var StartDate = new Date();
                var d = new Date();
                var EndDate = new Date(
                  d.getFullYear(),
                  d.getMonth(),
                  d.getDate() + 364,
                  d.getHours(),
                  d.getMinutes(),
                  d.getMilliseconds()
                );
                var vendorData = await db
                  .collection("tiffen_service_details")
                  .doc(doc.data().vendorEmail)
                  .get();
                if (vendorData.SubscriptionStartDate == null) {
                  db.collection("tiffen_service_details")
                    .doc(doc.data().vendorEmail)
                    .update({
                      SubscriptionStartDate: StartDate.toISOString(),
                      SubscriptionEndDate: EndDate.toISOString(),
                    });
                } else {
                  db.collection("tiffen_service_details")
                    .doc(doc.data().vendorEmail)
                    .update({ SubscriptionEndDate: EndDate.toISOString() });
                }
              })
              .catch((err) => window.alert("Error: " + err.message));
          }
        });
      });
setTimeout(() => {location.reload();}, 3000);
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

    setTimeout(() => {location.reload();}, 3000);
}