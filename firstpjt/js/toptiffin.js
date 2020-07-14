var vendorList = document.getElementById("vendors");
 
  db.collection('tiffen_service_details').limit(5).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        
        vendorList.innerHTML += "</td><td>"+doc.data().OwnerName+"</td><td>"+doc.data().Email+
        "</td><td>"+doc.data().Phone+
        "</td><td class='text-center'></tr>"
      });
  });