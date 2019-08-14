var messages=document.getElementById("messages");
var textbox=document.getElementById("textbox");
var button=document.getElementById("button");
var messages1=document.getElementById("messages1");
var textbox1=document.getElementById("textbox1");
var button1=document.getElementById("button1");

button.addEventListener("click", function(){
var newMessages=document.createElement("li");
var sameMessages=document.createElement("li");
newMessages.innerHTML = textbox.value;
sameMessages.innerHTML = textbox.value;
messages.appendChild(newMessages);
messages1.appendChild(sameMessages);
sameMessages.classList.add('user');
newMessages.classList.add('user1');
textbox.value=" ";



});


button1.addEventListener("click", function(){
var newMessages=document.createElement("li");
var sameMessages=document.createElement("li");
newMessages.innerHTML = textbox1.value;
sameMessages.innerHTML = textbox1.value
messages1.appendChild(newMessages);
messages.appendChild(sameMessages);
sameMessage.classList.add('user' );
newMessages.classList.add('user1');
textbox1.value=" ";

});

var x = document.getElementById("myAudio"); 
function playAudio(){
    x.play();
}