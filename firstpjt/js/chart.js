var earningchart = document.getElementById("earning-chart");
var earning = document.getElementById("earning-display");
var earnings = document.getElementById("earnings");

db.collection("subscription_notification").get().then(function(querySnapshot){
    /*querySnapshot.forEach(function(doc){
        if(doc.data().status === "active") {
            var email = doc.data().vendorEmail;
            subCount++;
        } else {
            email = "pending";
        }
        if(email !== "pending"){
            /*db.collection("tiffen_service_details/" + email + "/acceptedOrders").get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                    earningtotal += doc.data().totalCost;
                    console.log(earningtotal + "\n");
                });
            });
            earningtotal = subCount * 199;
        }
    });*/
        var data = [totalearning, totalearning];
        var labels = ['JUN','JUL']
        new Chart(earningchart, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        backgroundColor: '#ff8243',
                        borderColor: '#ff8243',
                        data: data
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                hover:{
                    mode: 'index',
                    intersect: true
                },
                scales:{
                    yAxes: [{
                        gridLines: {
                            display: true,
                            lineWidth: '4px',
                            color: 'rgba(0, 0, 0, 0.2)',
                            zeroLineColor: 'transparent'
                        },
                        scaleLabel:{
                            display: true,
                            labelString: 'Total Earnings',
                            fontColor: 'black',
                        },
                        ticks: {
                            beginAtZero: false,
                            stepSize: 400 ,
                            min: 0
                        }
                    }]
                }
            }
        });
});
