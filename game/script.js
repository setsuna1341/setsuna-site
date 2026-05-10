let bg = document.getElementById("bg");
let char = document.getElementById("char");
let text = document.getElementById("text");
let name = document.getElementById("name");
let choicesDiv = document.getElementById("choices");

let currentLines = [];
let index = 0;
let currentChoices = [];

function setMessageStyle(bg, color="white") {

  messageBox.style.background = bg;
  messageBox.style.color = color;
}

function showLine(line) {
  let [n, t] = line;

  if (n === "HIDE") {
    char.style.display = "none";
    return;
  }
  if (n === "SHOW") {
    char.style.display = "block";
    return;
  }

  name.innerText = n;
  text.innerText = t;
}

function next() {
  if (index < currentLines.length) {
    showLine(currentLines[index]);
    index++;
  } else {
    showChoices();
  }
}

function showChoices() {
  choicesDiv.innerHTML = "";

  currentChoices.forEach(c => {

    let btn = document.createElement("div");

    btn.className = "choice";
    btn.innerText = c.text;

    btn.onclick = (e) => {
      e.stopPropagation();
      c.func();
    };

    choicesDiv.appendChild(btn);
  });
}

function setChoices(c) {
  currentChoices = c;
}

function clearChoices() {
  choicesDiv.innerHTML = "";
}

function changeBg(src) {
  bg.src ="game/" + src;
}

document.addEventListener("click", next);


// =====================
// シナリオ
// =====================

function start() {
  clearChoices();
  changeBg("an-empty-classroom1.jpg");
  char.style.display = "block";

  currentLines = [
    ["", "放課後。"],
    ["", "ずっと好きだったクラスメイトと、"],
    ["", "なぜか一緒に帰ることになった。"],
    ["主人公", "（今日こそ、告白するチャンス…！）"],
    ["", "どうやって話しかける…？"]
  ];
  index = 0;

  setChoices([
    {text:"今日いい天気だね", func:scene1},
    {text:"なあ、実は俺…宇宙人なんだ", func:endGag}
  ]);

  next();
}

function scene1() {
  clearChoices();
  changeBg("The-main-street-in-front-of-the-school2.jpg");

  currentLines = [
    ["主人公","今日いい天気だね"],
    ["彼女","そうだね、ちょっと暑いくらい"],
    ["","いい感じに会話が続いている…"],
    ["主人公","（今、距離を縮めるべきか…？）"]
  ];
  index = 0;

  setChoices([
    {text:"変な話をする", func:endHorror},
    {text:"距離を縮める", func:scene2}
  ]);

  next();
}

function scene2() {
  clearChoices();

  currentLines = [
    ["","なんだか少し距離が近づいた気がする。"],
    ["","もうすぐ別れ道。"],
    ["主人公","（今しかない…！）"]
  ];
  index = 0;

  setChoices([
    {text:"告白する", func:endTrue},
    {text:"何も言えない", func:endNormal}
  ]);

  next();
}

// ===== END =====

function endGag() {
  clearChoices();
  currentLines = [
    ["主人公","なあ、実は俺…宇宙人なんだ"],
    ["彼女","へぇ、じゃあ地球に帰ってね"],
    ["HIDE",""],
    ["","その日以降、話しかけられることはなかった。"],
    ["","— END：黒歴史 —"]
  ];
  index = 0;
  setChoices([{text:"タイトルへ", func:start}]);
  next();
}

function endHorror() {
  clearChoices();
  changeBg("Abandoned-shrines-worship-hall2.jpg");

  currentLines = [
    ["彼女","そういえばさ、この道って出るらしいよ"],
    ["主人公","……え？"],
    ["HIDE",""],
    ["","振り返ると、誰もいなかった。"],
    ["","隣にいたはずの彼女も。"],
    ["","スマホには知らない番号からの着信。"],
    ["","— END：帰り道の“何か” —"]
  ];
  index = 0;
  setChoices([{text:"タイトルへ", func:start}]);
  next();
}

function endTrue() {
  clearChoices();
  currentLines = [
    ["主人公","ずっと前から好きでした"],
    ["","少しの沈黙。"],
    ["彼女","……やっと言ったね"],
    ["","彼女は少し笑って、手を差し出した。"],
    ["","— END：帰り道は、これからも —"]
  ];
  index = 0;
  setChoices([{text:"タイトルへ", func:start}]);
  next();
}

function endNormal() {
  clearChoices();
  currentLines = [
    ["主人公","結局、何も言えなかった。"],
    ["主人公","でも、少し距離は縮まった気がする。"],
    ["主人公","（次こそは…）"],
    ["","— END：また明日 —"]
  ];
  index = 0;
  setChoices([{text:"タイトルへ", func:start}]);
  next();
}

// 初期起動
start();