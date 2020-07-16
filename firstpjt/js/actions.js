
function Delete(){
    var email = document.getElementById("deleteEmail").value;
    var fromVendor = "";
    var subId = "";

    db.collection('tiffen_service_details').doc(email).delete();
    
    db.collection('vendor_collection/vendors/registered_vendors').get().then(function(snap){
      snap.forEach(function(doc){  
        if(doc.data().Email === email){
            fromVendor = doc.data().Email;
        }
      });
      db.collection('vendor_collection/vendors/registered_vendors').doc(fromVendor).delete();
    });
    
    db.collection('subscription_notification').get().then(function(querySnap){
        querySnap.forEach(function(doc){
            if(doc.data().vendorEmail === email){
                subId = doc.id;
            }
        });
        db.collection('subscription_notification').doc(subId).delete();
        window.alert("Vendor removed successfully!");
    });

    setTimeout(() => {location.reload();}, 2000);
  }