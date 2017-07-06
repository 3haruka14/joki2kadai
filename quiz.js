function update(event) {
  let output = document.querySelector("#kaito");
  let input = event.target;
  output.textContent = input.value;
}

function enableInput() {
  let input = document.querySelector("#nyuryoku");
  input.addEventListener("keyup", update);
}

function reset() {
  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#kaito");
  input.value = "";
  output.textContent = "";
}

function enableResetButton() {
  let button = document.querySelector("button");
  button.addEventListener("click", reset);
}

function main() {
    enableResetButton();
    enableInput();
};

window.addEventListener("load", main);