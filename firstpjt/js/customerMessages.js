
//To retrive data form firebase

var ref = firebase.database().ref("Contact-Us");
ref.on('value', gotData);

function gotData(data) {
    // console.log(data.val());
    var contactdata = data.val();
    var keys = Object.keys(contactdata);
    // console.log(keys);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var Name = contactdata[k].Name;
        var eMail = contactdata[k].eMail;
        var Message = contactdata[k].Message;
        // console.log(Name, eMail, Message);
        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(`Name: ${Name} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
        eMail: ${eMail} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
        Message: ${Message}`);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("messages").appendChild(node);     // Append <li> to <ul> with id="myList"


    }
}
