qa = new Array();
qa[0] = ["今何時ですか？", "كم الساعة الآن؟"];
qa[1] = ["昼の３時５分前です", "السَّاعَةُ الثَّالِثَةُ إِلَّا خَمْسَ دَقَائِقَ عَصْرًا"];
qa[2] = ["そろそろ失礼します", "أَسْتَأْذِنُ الْآنَ"];
qa[3] = ["日本の印象はいかがですか？", "مَا هُوَ انْطِبَاعُكَ عَنْ الْيَابَانِ؟"];
qa[4] = ["それ（食事）が、とても美味しくて驚きました（感動しました）", "إِنًّهُ لَذِيذٌ جِدًّا، وَقَدْ أَعْجَبَنِي تَنَوُّعُهُ"];
qa[5] = ["お歳を伺っても構いませんか", "هَلْ لِي أَنْ أَسْأَلَكَ عَنْ عُمْرِكَ؟"];

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

function hantei() {
  let input = document.querySelector("#nyuryoku");
  let kotae = qa[0][1];
  console.log(input.value);
  let output = document.querySelector("#seikai");
  if (input.value == kotae) {
    output.textContent = "○　" + kotae;
    next();
  } else {
    output.textContent = "×　" + kotae;
  }
}

function reset() {
  let input = document.querySelector("#nyuryoku");
  let output = document.querySelector("#kaito");
  input.value = "";
  output.textContent = "";
}

function next() {
  document.getElementById("img").src = "img/next.png";
  document.getElementById("img").src = "img/next.png";
  document.getElementById("next").innerHTML = "";
  count++;
  if (count%2==1){
  if (count < q_max) {
    quiz();
  } else {
    let input = document.querySelector("#mondai");
    input.textContent = "お疲れ様でした";
  }}

}

function mondai() {
  let qn = randArr[count];
  alert(qn);
  document.getElementById("bango").innerHTML = "السُّؤَالُ " + jo[count];
  let input = document.querySelector("#mondai");
  let question = qa[qn][0];
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


function imageupdate() {
  document.getElementById("img").src = "img/houki.png";
  document.getElementById("img").onclick = reset();
}

function kumachange() {
  let input = document.querySelector("#kuma");
  input.addEventListener("click", imageupdate);
}

function main() {
  //enableInput();
  enableSubmitByEnter();
  mondai();
  kumachange();
}

function home() {
  let input = document.querySelector("#mondai");
  input.textContent = "くまを押したらスタート！";
}

window.addEventListener("load", setReady);






/*
Goal
1. このプログラムを動かしてください
2. [1]の部分をコメントから戻し、再読み込みして、違いを確認してください
3. [2]の部分を変更して、すべての画像ファイルを出力するようにしてください
*/


let sentaku = [
  { title: "kyasla", img: "images/10607738133_5d763d7c12_z.jpg" ,usu:"ّ";},
];
/*
function description(imageData) {
  let el = document.createElement("p");
  el.textContent = imageData.title;
  return el;
}

function img(imageData) {
  let el = document.createElement("img");
  el.src = imageData.url;
  el.alt = imageData.title;
  return el;
}

function li(imageData) {
  let el = document.createElement("li");
  let image = img(imageData);
  el.appendChild(image);

  let desc = description(imageData);
  el.appendChild(desc);
  return el;
}

function ul(imageList) {
  let el = document.createElement("ul");
  let index=0;
while(index<imageList.length){
  let image = imageList[index];
  let renderedImage = li(image);
  el.appendChild(renderedImage);
  index = index+1;
}  return el;
}

function button() {
  let el = ul(images);
  document.body.appendChild(el);
}*/