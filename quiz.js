qa = new Array();
qa[0]=["今何時ですか？","كم الساعة الآن؟"];
qa[1]=["昼の３時５分前です","السَّاعَةُ الثَّالِثَةُ إِلَّا خَمْسَ دَقَائِقَ عَصْرًا"]
qa[2]=["そろそろ失礼します","أَسْتَأْذِنُ الْآنَ"]
qa[3]=["日本の印象はいかがですか？","مَا هُوَ انْطِبَاعُكَ عَنْ الْيَابَانِ؟"]
qa[4]=["それ（食事）が、とても美味しくて驚きました（感動しました）","إِنًّهُ لَذِيذٌ جِدًّا، وَقَدْ أَعْجَبَنِي تَنَوُّعُهُ"]
qa[5]=["お歳を伺っても構いませんか","هَلْ لِي أَنْ أَسْأَلَكَ عَنْ عُمْرِكَ؟"]


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
  if(input.textContent == kotae){
    output.textContent = "正解";
    next();
  }else{
    output.textContent = "不正解";
  }
}

function reset() {
  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#kaito");
  input.value = "";
  output.textContent = "";
}

function next(){
  document.getElementById("img").src="img/next.png";
  document.getElementById("img").src="img/next.png";
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
  document.getElementById("img").onclick = reset();
}

function kumachange(){
  let input = document.querySelector("#kuma");
  input.addEventListener("click",imageupdate);
}

function main() {
    enableInput();
    enableSubmitByEnter();
    mondai();
    kumachange();
};

function home(){
let input = document.querySelector("#mondai");
input.textContent = "くまを押したらスタート！";
}

window.addEventListener("load", home);