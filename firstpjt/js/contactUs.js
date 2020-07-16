// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCHXsGkm61Hmk_yLYw5txSPfee_fGiDMDc",
    authDomain: "foodifi-493e8.firebaseapp.com",
    databaseURL: "https://foodifi-493e8.firebaseio.com",
    projectId: "foodifi-493e8",
    storageBucket: "foodifi-493e8.appspot.com",
    messagingSenderId: "328551440601",
    appId: "1:328551440601:web:9a84de1b23ee84403b5ec8",
    measurementId: "G-DHPTH3J7N4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Reference contactUs collection
let messagesRef = firebase.database().ref('Contact-Us');

//listen to form
document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    //     // get Values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let message = getInputVal('message');

    //save message

    saveMessage(name, email, message);

    //clear form
    document.getElementById('contactform').reset();
}
//function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        Name: name,
        eMail: email,
        Message: message
    })
}
