//問題と解答「闇のheadにjsを書いちゃった事件//

qa = new Array();
qa[0] = ["彼女達は食後にジュースを飲んだ。","شَرِبُونَ","الطَّعَامَ","عَصِـيرًا","شَرِبْنَ","الطَّعَامِ","بَعْدَ"," شَرِبْنَ عَصِـيرًا بَعْدَ الطَّعَامِ"];
qa[1] = ["私は彼の車の鍵を見つけた。","وَجَدَتْ","وَجَدْتُ","سَيَّارَةِهِ","سَيَّارَةِهُ","مِفـْتَاحٌ","مِفـْتَاحَ", " وَجَدْتُ مِفـْتَاحَ سَيَّارَةِهِ"];
qa[2] = ["あれは私の父方の叔父の車です。","سَيَّارَةُ","عَمِّي","دلِكَ","السَّيَّارَةُ","تِلْكَ","خَالـِي"," تِلْكَ سَيَّارَةُ عَمِّي"];
qa[3] = ["彼はフランスパンを食べている","يَاكُلْ","الْخُبْزَ","الْفَرَنْسِـيَّ","فَرَنْسِـيٍّ","يَأْكُلُ","خُبُزًا"," يَأْكُلُ الْخُبْزَ الْفَرَنْسِـيَّ"];
qa[4] = ["彼らは中華料理に行った","ذَهَبُوا","مَطْبَخً","صِـينِـيً","سِـينِـيً","ذَهَبُونَ","مَطْعَمً"," ذَهَبُوا مَطْعَمً صِـينِـيً"];
qa[5]=["４ディナールです。","بِأرْبَعَةِ","دِنَارِ","دَنَانِـيرِ","بِأرْبَعُ","دَنَانِـيرَ","الرَّابِعِ"," بِأرْبَعَةِ دَنَانِـيرَ"];
qa[6] = ["古いテレビ","هَاتـِفٌ","قَصِـيرٌ","تـِلْفَازٌ","قَصِـيرٍ","كَثِـيرٌ","قَدِـيمٌ"," تـِلْفَازٌ قَدِـيمٌ"];
qa[7] = ["清潔なベッド","النَّظِـيخٌ","صَغِـيرٌ","نَظِـيفٌ","سَجَادَةٌ","السَّرِـيرٌ","النَّظِـيفٌ"," السَّرِـيرٌ النَّظِـيفٌ"];
qa[8] = ["あなたはいくつ魚を持っていますか","بِكَمْ","سَمَكَةً","السَّمَكَةَ","سَمَكٌ","كَمْ","عـِنْدَكَ"," كَمْ سَمَكَةً عـِنْدَكَ"];
qa[9] = ["これらはいくらですか？","بـِكـَمِ","هذُونَ","بِكَمْ","أُول أِكَ","هؤلَاءِ","؟"," بِكَمْ هؤلَاءِ ؟"];
jo = ["الْأَوَّلٌ","الثَّانِـي","الثَّالِثُ","الـرَّابِعُ","الْحَامِسُ","السَّادِسُ","السَّابِعُ","الثَّامِنُ","التَّاسِعُ","الْعَاشِرُ"];
//初期設定
q_sel = 6; //選択肢の数
q_max = 10; //出題数
hen=0;
sewa=0;
//初期設定
function setReady() {
	if(hen==1){hyoji();}
	if(sewa==1){osewa();}
	count = 0;
	kekka = 0;
	ansers = new Array(); //解答記録
 arr = [1,2,3,4,5,6,7,8,9,0];
 randArr = [];
 rand=0;
	for(var i=0,len=arr.length;i<q_max ; i++,len--){
	    rand = Math.floor( Math.random() * len); // 0～len-1の範囲の整数からランダムに値を取得
	    randArr.push(arr[rand]); // 配列のランダム値に対応するインデックスを得る
	    arr[rand] = arr[len-1]; // ランダムに得た値の箇所を、インデックスがlen-1(ランダム値がとりうる最大の値)の要素に置き換える
	}
//最初の問題
quiz();
}
//問題表示
function quiz() {
	document.getElementById("next").innerHTML = "<img src='OK.png' alt='حقا'>";
		spa = ""
	document.getElementById("ap").innerHTML = "<span class='setsu'>ここに選択した文字が表示されます</span>";
	document.getElementById("text_a").innerHTML = "<span class='setsu'>正しい答えが表示されます</span>";
	qn = randArr[count];
	var s, n;
	//問題
	document.getElementById("text_q").innerHTML = "السُّؤَالُ "+jo[count] + "<br>" + qa[qn][0];
	//選択肢
	s = "";
	var aida;
	aida = "";
	for (n=1;n<=q_sel;n++) {
		if (qa[qn][n] != "") {
			aida = aida + "<a href='javascript:cl(" + n + ")'><li id=box" + n + ">" + qa[qn][n] + "</li></a>";}
	document.getElementById("se").innerHTML = aida + "<img src='houki.png' alt='消す' onclick='kesu();' id='clear'>";}
}

function cl(num){var p;
	p=qa[qn][num];
	spa = spa + " " + p ;
	document.getElementById("ap").innerHTML = spa;
var nex ;
nex =  "<a href='javascript:anser(" + num + ")'><img src='ok.png' alt='حقا'></a><br><span class='setsu' id='sentaku'>選択が終了したら、上のイラストをクリックしましょう。</span> ";
document.getElementById("next").innerHTML = nex;
}
function kesu(){
	spa = ""
		document.getElementById("ap").innerHTML = spa;
}

//解答表示
function anser(num) {
	var s;
	var p;
	//答え合わせ
	if (spa == qa[qn][q_sel + 1]) {
		//正解
		ansers[count] = "○";
		kekka = kekka +1 ;
		p = '<img src="right.png" alt="صحيح" mouseover = "uni();">'
	} else {
		ansers[count] = "×";
		p = '<img src="fales.png" alt="خاطى" mouseover = "uni();">'
	}
	s = "<span class='setsu'>正しい答えが表示されます</span>正解は"+qa[qn][q_sel + 1];
	document.getElementById("text_a").innerHTML = s;
	spa = spa+"   <span id='kai'>"+ansers[count]+"</span>";
	document.getElementById("ap").innerHTML = spa;
	document.getElementById("next").innerHTML ="<a href='javascript:nex( )'>"+ p +"</a><span class='setsu'>上の画像をクリックすると次の問題が表示されます</span>";}

function uni(){	var nex ;
	nex =  "<a href='javascript:nex( )'><img src='next.png' alt='حسنا'</a>" ;
	document.getElementById("next").innerHTML = nex;
}


	//次の問題を表示
	function nex(){
		document.getElementById("next").innerHTML = "";
	count++;
	if (count < q_max) {
		quiz();
	} else {
		//終了
		s = "<table border='2'><caption>成績発表</caption>";
		//1行目
		s += "<tr><th>問題</th>";
		for (n=0;n<q_max;n++) {
			s += "<th>" + (n+1) + "</th>";
		}
		s += "</tr>";
		//2行目
		s += "<tr><th>成績</th>";
		for (n=0;n<q_max;n++) {
			s += "<td>" + ansers[n] + "</td>";
		}
		s += "</tr>";
		s += "</table>";
		document.getElementById("text_q").innerHTML = s;
		if(kekka = 10){
			sen = "<a href='javascript:setReady( )'><img src='next.png' alt='حسنا'</a>";
}
		else{
			sen =  "<a href='javascript:setReady( )'><img src='fales.png' alt='خاطى'</a>" ;
}
document.getElementById("next").innerHTML = sen;
document.getElementById("ap").innerHTML = "";
document.getElementById("text_a").innerHTML = "";
document.getElementById("text_s").innerHTML = "";
}
}

	function hyoji()
{var element = document.getElementsByClassName("setsu");
if(hen == 0){
	for (var i=0;i<element.length;i++) {element[i].style.display = "block";}
hen = hen+1}
else
{for (var i=0;i<element.length;i++) {element[i].style.display = "none";}
hen = hen-1}}

function osewa(){
if(sewa == 0){
document.getElementById("text_s").style.display="none";
document.getElementById("ans").style.display="none";
document.getElementById("left").style.display="none";
document.getElementById("omake").style.display="block";
sewa = sewa+1}
else{
	document.getElementById("text_s").style.display="block";
	document.getElementById("ans").style.display="block";
	document.getElementById("left").style.display="block";
	document.getElementById("omake").style.display="none";
sewa = sewa-1;
}}
