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
  w2c=0;
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

function mondai2(){
  mode = 1;
  let qn = randArr[count];
  let teidai = document.querySelector("#mondai");
  let el = document.createElement("p");
  el.textContent = "この文章のすべての文字に発音記号をつけてください";
  teidai.appendChild(el);

  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#seikai");
  input.value = qa[qn][2];
  imageupdate();
  output.textContent = "";
  botan();
}

function mondai2main(){
  if(mode==0){
  w2c++;
  console.log(w2c);
  hantei2SubmitByEnter();
  mondai2();}
  else{;}
}



function ikumae(event){
  if(event.keyCode == 13){
    ikuzo();}
}

function ikumaeSubmitByEnter() {
  if(mode==2){
  let input = document.querySelector("#nyuryoku");
  input.addEventListener("keypress", ikumae);}
  else{;}
}


function mondai2SubmitByEnter() {
  let input = document.querySelector("#nyuryoku");
  input.addEventListener("keypress", watchKeyInput2);
}

function watchKeyInput2(event){
  if(event.keyCode == 13){
    mondai2main();}
}


function hantei() {
  
  let qn = randArr[count];
  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#seikai");
  let kotae=qa[qn][1];
   if (input.value==kotae){
    output.textContent = "○　" + kotae;
    next();
  } else {
    output.textContent = "×　" + kotae;
    out();
  }

}

function hantei2(){
  let qn = randArr[count];
  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#seikai");
let kotae = qa[qn][3];
    if (input.value == kotae) {
    output.textContent = "○　" + kotae;
    mode=2;
    next2();
  } else {
    output.textContent = "×　" + kotae;
    mode=2;
    out2();
  
  }
}


function reset() {
  if(mode==0){
  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#seikai");
  input.value = "";
  output.value = "";}
  else{let input = document.querySelector("#nyuryoku");
  input.value = qa[qn][2];}

}

function ikuzo() {
  count++;
    if (count < q_max) {
      document.getElementById("img").onclick = main;
      let input = document.querySelector("#nyuryoku");
      mode=3;
      input.addEventListener("keypress", nikaime);}
    else {
      let input = document.querySelector("#mondai");
      input.textContent = "お疲れ様でした";
    }
  }


function next(){
  document.getElementById("img").src="img/next.png";
  mondai2SubmitByEnter();
}

function out(){
  document.getElementById("img").src="img/batsu.png";
  mode2 = 1;
}

function next2(){
  document.getElementById("img").src="img/next.png";
  ikumaeSubmitByEnter();
}

function out2(){
  document.getElementById("img").src="img/batsu.png";
  ikumaeSubmitByEnter();
}


function mondai() {
  let output = document.querySelector("#seikai");
  output.value = "";
  document.getElementById("kaito").innerHTML="";
  imageupdate();
  let qn = randArr[count];
  document.getElementById("bango").innerHTML = "السُّؤَالُ " + jo[count];
  let input = document.querySelector("#mondai");
  let question = qa[qn][0];
  input.textContent = question;
}

function watchKeyInput(event) {
  if (event.keyCode == 13) {
    if(mode2==0){hantei();}
    else if (mode2==1){
      alert(mode2);
      mondai2main();}
  }
}


function hantei2SubmitByEnter() {
  mode=1;
  if(mode==1){
  let input = document.querySelector("#nyuryoku");
  input.addEventListener("keypress", watchKeyInput4);}
else{;}
}

function watchKeyInput4(event) {
  if (event.keyCode == 13) {
    hantei2();
  }
}

function nikaime() {
  if(mode==3){
  let input = document.querySelector("#nyuryoku");
  input.addEventListener("keypress", mainnomae);}
  else{;}
}

function mainnomae(event) {
  if (event.keyCode == 13) {
    main();
  }
}

function enableSubmitByEnter() {
  let input = document.querySelector("#nyuryoku");
  input.addEventListener("keypress", watchKeyInput);
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
  //enableInput();
  //enableSubmitByEnter();
  alert(mode);
  let nyu = document.querySelector("#nyuryoku");
  nyu.value = "";
  let sei = document.querySelector("#seikai");
  sei.value = "";
  enableSubmitByEnter();
  mondai();
  kumachange();
}

function home() {
  
  let input = document.querySelector("#mondai");
  input.textContent = "くまを押したらスタート！";
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