qa = new Array();
qa[0]=["パンはパンでも食べられないパンなーんだ？","フライパン"];
qa[1]=[""]


function update(event) {
  let output = document.querySelector("#kaito");
  let input = event.target;
  output.textContent = input.value;
}

function enableInput() {
  let input = document.querySelector("#nyuryoku");
  input.addEventListener("keyup", update);
}

function hantei(){
  let input = document.querySelector("#kaito");
  let kotae = qa[0][1];
  console.log(input.textContent);
  let output = document.querySelector("#seikai");
  if(input.textContent == kotae)
  { output.textContent = "正解";}
    else{
    output.textContent = "不正解";}
}

function reset() {
  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#kaito");
  input.value = "";
  output.textContent = "";
}

function enableResetButton() {
  let rbutton = document.querySelector("#reset");
  rbutton.addEventListener("click", reset);
}
function Ok() {
  let okbutton = document.querySelector("#ok");
  okbutton.addEventListener("click", hantei);
}

function mondai(){
  let input = document.querySelector("#mondai");
  let question = qa[0][0];
  input.textContent = question;
}

function main() {
    enableResetButton();
    mondai();
    Ok();
    enableInput();
};

window.addEventListener("load", main);