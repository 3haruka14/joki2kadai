qa = new Array();
qa[0]=["今何時ですか？","كم الساعة الآن؟","كَم السَّاعَة الْآنَ؟","كَمِ السَّاعَةُ الْآنَ؟"];
qa[1]=["昼の３時５分前です","السَّاعَةُ الثَّالِثَةُ إِلَّا خَمْسَ دَقَائِقَ عَصْرًا"]
qa[2]=["そろそろ失礼します","أَسْتَأْذِنُ الْآنَ"]
qa[3]=["日本の印象はいかがですか？","مَا هُوَ انْطِبَاعُكَ عَنْ الْيَابَانِ؟"]
qa[4]=["それ（食事）が、とても美味しくて驚きました（感動しました）","إِنًّهُ لَذِيذٌ جِدًّا، وَقَدْ أَعْجَبَنِي تَنَوُّعُهُ"]
qa[5]=["お歳を伺っても構いませんか","هَلْ لِي أَنْ أَسْأَلَكَ عَنْ عُمْرِكَ؟"]

jo = ["الْأَوَّلٌ", "الثَّانِـي", "الثَّالِثُ", "الـرَّابِعُ", "الْحَامِسُ", "السَّادِسُ", "السَّابِعُ", "الثَّامِنُ", "التَّاسِعُ", "الْعَاشِرُ"];
//初期設定
q_max = 5; //出題数
hen = 0;
sewa = 0;
//初期設定
function setReady() {
  if (hen == 1) { hyoji(); }
  if (sewa == 1) { osewa(); }
  count = 0;
  kekka = 0;
  mode = 0;
  mode2 = 0;
  ansers = new Array(); //解答記録
  arr = [1, 2, 3, 4, 5, 0];
  randArr = [];
  rand = 0;
  for (var i = 0, len = arr.length; i < q_max; i++ , len--) {
    rand = Math.floor(Math.random() * len); // 0～len-1の範囲の整数からランダムに値を取得
    randArr.push(arr[rand]); // 配列のランダム値に対応するインデックスを得る
    arr[rand] = arr[len - 1]; // ランダムに得た値の箇所を、インデックスがlen-1(ランダム値がとりうる最大の値)の要素に置き換える
  }
  home();
}

function enableSubmitByEnter() {
  let input = document.querySelector("#nyuryoku");
  input.addEventListener("keypress", watchKeyInput);
}

function watchKeyInput(event) {
  if (event.keyCode == 13) {
    if(mode2==0)
    {hantei();}
    else if(mode2==1){
      mondai();}
    else if(mode2==2){
      ikuzo();}
    else{;}
  }
}




function mondai() {
  mode2=0;
  let qn = randArr[count];
  imageupdate();
  let output = document.querySelector("#seikai");
  output.textContent = "";
  let input = document.querySelector("#mondai");
  let nyu = document.querySelector("#nyuryoku");
if(mode==0){
  document.getElementById("bango").innerHTML = "السُّؤَالُ " + jo[count];
  document.getElementById("kaito").innerHTML="";
  nyu.value = "";
  let question = qa[qn][0];
  input.textContent = question;}
else{
let input = document.querySelector("#mondai");
  let el = document.createElement("p");
  el.textContent = "この文章のすべての文字に発音記号をつけてください";
  input.appendChild(el);
  nyu.value = qa[qn][2];
  botan();
}
}


function hantei() {
  let qn = randArr[count];
  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#seikai");
  if(mode==0){
    let kotae=qa[qn][1];
    mode=1;
    mode2=1;
   if (input.value==kotae){
    output.textContent = "○　" + kotae;
    document.getElementById("img").src="img/next.png";
  } else {
    output.textContent = "×　" + kotae;
    document.getElementById("img").src="img/batsu.png";
  }}
  else{
    let kotae = qa[qn][3];
    mode=0;
    mode2=2;
    if (input.value == kotae) {
    output.textContent = "○　" + kotae;
    document.getElementById("img").src="img/next.png";
  } else {
    output.textContent = "×　" + kotae;
    document.getElementById("img").src="img/batsu.png";
  }
  }

}



function reset() {
  let qn = randArr[count];
  if(mode==0){
  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#seikai");
  input.value = "";
  output.textContent = "";}
  else{let input = document.querySelector("#nyuryoku");
  input.value = qa[qn][2];}

}

function ikuzo() {
  count++;
    if (count < q_max) {
      document.getElementById("img").onclick = main;
      mode=0;
    mondai();}
    else {
      mode2=4;
      reset();
      let ban = document.querySelector("#bango");
      let kai = document.querySelector("#kaito");
      ban.textContent = "";
      kai.textContent = "";
      let mon = document.querySelector("#mondai");
      mon.textContent = "";
      let input = document.querySelector("#nyuryoku");
      input.value = "問題は終わりです。お疲れ様でした";
      document.getElementById("img").src = "img/start.png";
      document.getElementById("img").onclick = setReady;
    }
  }


function imageupdate() {
  document.getElementById("img").src = "img/houki.png";
  document.getElementById("img").onclick = reset;
}

function kumachange() {
  let input = document.querySelector("#kuma");
  input.addEventListener("click", imageupdate);
}

function main() {
  enableSubmitByEnter();
  mondai();
  kumachange();
}

function home() {
  let input = document.querySelector("#mondai");
  mode2=0;
  input.textContent = "くまを押したらスタート！";
  document.getElementById("img").src = "img/start.png";
  document.getElementById("img").onclick = main;
}






/*
Goal
1. このプログラムを動かしてください
2. [1]の部分をコメントから戻し、再読み込みして、違いを確認してください
3. [2]の部分を変更して、すべての画像ファイルを出力するようにしてください
*/


let vowbutton = [
  {name: "kyasla", img: "img/button/k.png", utsu:"ِ",tan:"ٍ"},
    {name: "danma", img: "img/button/d.png", utsu:"ُ",tan:"ٌ"},
  {name:"fatfa",img:"img/button/f.png",utsu:"َ",tan:"ً"},
  {name:"skun",img:"img/button/s.png",utsu:"ْ",tan:"ْ"},
{name:"shadda",img:"img/button/sh.png",utsu:"ّ",tan:"ّ"}
];


function appen(kazu){
let textarea = document.querySelector("#nyuryoku");
var sentence = textarea.value;
var len      = sentence.length;
var pos      = textarea.selectionStart;
var temae   = sentence.substr(pos-1, 1);

if (temae==vowbutton[kazu].utsu){
var before   = sentence.substr(0, pos-1);
var word     = vowbutton[kazu].tan;
var after    = sentence.substr(pos, len);
sentence = before + word + after;
textarea.value = sentence;
textarea.setSelectionRange(pos+1,pos+1);
}
else{
var before   = sentence.substr(0, pos);
var word     = vowbutton[kazu].utsu;
var after    = sentence.substr(pos, len);

sentence = before + word + after;
textarea.value = sentence;

textarea.setSelectionRange(pos+1,pos+1);}
}


var countk=0;

function sh(){
  let vow = vowbutton;
  let el = document.createElement("input");
  el.type = "image";
  el.height="60";
  el.src = vow[4].img;
  el.alt = vow[4].name;
  var f = "appen(4);";
  el.setAttribute('onclick', f);
  var target = document.getElementById("kaito");
  target.appendChild(el);
}

function sk(){
  let vow = vowbutton;
  let el = document.createElement("input");
  el.type = "image";
  el.height="60";
  el.src = vow[3].img;
  el.alt = vow[3].name;
  var f = "appen(3);";
  el.setAttribute('onclick', f);
  var target = document.getElementById("kaito");
  target.appendChild(el);
}

function fa(){
  let vow = vowbutton;
  let el = document.createElement("input");
  el.type = "image";
  el.height="60";
  el.src = vow[2].img;
  el.alt = vow[2].name;
  var f = "appen(2);";
  el.setAttribute('onclick', f);
  var target = document.getElementById("kaito");
  target.appendChild(el);
}

function dm(){
  let vow = vowbutton;
  let el = document.createElement("input");
  el.type = "image";
  el.height="60";
  el.src = vow[1].img;
  el.alt = vow[1].name;
  var f = "appen(1);";
  el.setAttribute('onclick', f);
  var target = document.getElementById("kaito");
  target.appendChild(el);
}

function kya() {
  let vow = vowbutton;
  let el = document.createElement("input");
  el.type = "image";
  el.height="60";
  el.src = vow[0].img;
  el.alt = vow[0].name;
  var eve = "appen(0);";
  el.setAttribute('onclick', eve);
  var target = document.getElementById("kaito");
  target.appendChild(el);
}

function botan(){
  sk();
  sh();
  kya();
  dm();
  fa();
}

window.addEventListener("load", setReady);