"use strict";

function init() {

    let greetUserBtn = document.getElementById("greetUserBtn");

    greetUserBtn.onclick = onGreetUserBtnClicked;

}
function onGreetUserBtnClicked() {
  let nameField = document.getElementById("nameField");
  

  let name = nameField.value;


  let message =
    `Hello ${name}!`;
  const messageDiv = document.getElementById("messageDiv");
  messageDiv.innerHTML = message;
}

init();
