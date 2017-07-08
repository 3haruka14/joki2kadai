qa = new Array();
qa[0]=["今何時ですか？","كم الساعة الآن؟","كَم السَّاعَة الْآنَ؟","كَمِ السَّاعَةُ الْآنَ؟"];
qa[1]=["昼の３時５分前です","السَّاعَةُ الثَّالِثَةُ إِلَّا خَمْسَ دَقَائِقَ عَصْرًا"]
qa[2]=["そろそろ失礼します","أَسْتَأْذِنُ الْآنَ"]
qa[3]=["日本の印象はいかがですか？","مَا هُوَ انْطِبَاعُكَ عَنْ الْيَابَانِ؟"]
qa[4]=["それ（食事）が、とても美味しくて驚きました（感動しました）","إِنًّهُ لَذِيذٌ جِدًّا، وَقَدْ أَعْجَبَنِي تَنَوُّعُهُ"]
qa[5]=["お歳を伺っても構いませんか","هَلْ لِي أَنْ أَسْأَلَكَ عَنْ عُمْرِكَ؟"]

/*
function update(event) {
  let output = document.querySelector("#kaito");
  let input = event.target;
  let hatsuon = input.value.split("");
  console.log(hatsuon);
    output.textContent = input.value;
}



function enableInput() {
  let input = document.querySelector("#nyuryoku");
  input.addEventListener("keyup", update);
}*/


function mondai2(){
  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#seikai");
  // document.getElementById("nyuryoku").placeholder = "";
  console.log(input);
  console.log(qa[0][1]);
  input.value = qa[0][1];
  console.log(input.value);
  imageupdate();
  output.textContent = "";
}

function watchKeyInput2(event){
  if(event.keyCode == 13){
    mondai2();
  }
}

function hantei(){
  let input = document.querySelector("#nyuryoku");
  let kotae = qa[0][1];
  console.log(input.value);
  let output = document.querySelector("#seikai");
  if(input.value == kotae){
    output.textContent = "○　"+kotae;
    next();
  }else{
    output.textContent = "×　"+kotae;
    out();
  }
}

function reset() {
  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#seikai");
  input.value = "";
  output.value = "";
}

function next(){
  document.getElementById("img").src="img/next.png";
  let enter = document.querySelector("#nyuryoku");
  enter.addEventListener("keypress", watchKeyInput2);
}

function out(){
  document.getElementById("img").src="img/batsu.png";
  let enter = document.querySelector("#nyuryoku");
  enter.addEventListener("keypress", watchKeyInput2);
}

function mondai(){
  let input = document.querySelector("#mondai");
  let question = qa[0][0];
  input.textContent = question;
}

function watchKeyInput(event) {
  if (event.keyCode == 13) {
    hantei();
  }
}
function enableSubmitByEnter() {
  let input = document.querySelector("#nyuryoku");
  input.addEventListener("keypress", watchKeyInput);
}


function imageupdate(){
  document.getElementById("img").src = "img/houki.png";
  document.getElementById("img").onclick = reset;
}

function kumachange(){
  let input = document.querySelector("#kuma");
  input.addEventListener("click",imageupdate);
}

function main() {
    enableSubmitByEnter();
    mondai();
    kumachange();
};

function home(){
let input = document.querySelector("#mondai");
input.textContent = "くまを押したらスタート！";
}

window.addEventListener("load", home);