var totalearning = 0;
var subCount = 0;
//var total =0;
var orders=0;
var vendors =0;
var users = 0;
//var vendor=0;
   
   /*db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
        totalearning += doc.data().totalCost;
        });
       earning.innerHTML += "<h3>" + totalearning + "</h3>";
    }); 

      
    db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {
    
        querySnapshot.forEach(function(doc) {
            total += doc.data().totalCost;
        });
        earnings.innerHTML += "<h3>" + total + "</h3>";
    });*/
    
    
    /*db.collection("vendor_collection/vendors/registered_vendors").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            vendors ++;
        });
        totalvendors.innerHTML += "<h3>" + vendors + "</h3>";
    });
    */

        
    /*db.collection("vendor_collection/vendors/registered_vendors").get().then(function(querySnapshot){
         querySnapshot.forEach(function(doc){
           vendor ++;
        });
         totalvendor.innerHTML += "<h3>" + vendor + "</h3>";
    });*/



    db.collection("subscription_notification").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            if(doc.data().status === "active") {
                var email = doc.data().vendorEmail;
                subCount++;
            } else {
                email = "pending";
            }
            if(email !== "pending"){
                totalearning = subCount * 199;
            }
        });
        earning.innerHTML += "<h3>" + totalearning + "</h3>";
        earnings.innerHTML += "<h3>" + totalearning + "</h3>";
    });

    db.collection("tiffen_service_details").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            if(doc.data().SubscriptionStartDate != null){
                vendors++;
            }   
        });
        totalvendors.innerHTML += "<h3>" + vendors + "</h3>";
        totalvendor.innerHTML += "<h3>" + vendors + "</h3>";
    });


   db.collection("customer_collection").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            users++;
         });
         totalusers.innerHTML += "<h3>" + users + "</h3>";
   });

   db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            orders++;
          });
        totalorders.innerHTML += "<h3>" + orders + "</h3>";
    });
