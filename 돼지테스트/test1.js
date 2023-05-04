var turn = 0;
// var audio = new Audio("../sounds/Countdown.mp3");
// audio.volume = 0.2;
// var corsound = new Audio("../sounds/yes.mp3");
// var wrosound = new Audio("../sounds/no.mp3");
// var tiktok = new Audio("../sounds/tiktok2.mp3");
// var tang = new Audio("../sounds/tang.mp3");
// tang.volume = 0.2;
// tiktok.volume = 0.2;
// corsound.volume = 0.2;
// wrosound.volume = 0.2;

let idolMale = topic.idolMale;
let idol = topic.idol;
let singer = topic.singer;
let actor = topic.actor;
let sport = topic.sport;
let comedian = topic.comedian;
let influencer = topic.influencerAndCharacter;
let hero = topic.hero;
let level1 = level.level1;
let level2 = level.level2;
let level3 = level.level3;

// document.getElementById("footer").innerHTML +=
//   "총 " + Object.keys(all).length.toString() + "명의 인물";
// document.getElementById("choice").innerHTML +=
//   "총 " + Object.keys(all).length.toString() + "분)";

//맞는 답을 어떻게 꺼낼 것인가
//test[문제] <= 정답 Array / 음퀴랑 똑같이 처리 + 문제도 정답으로 처리.
// function check(element) {
//   if(document.getElementById('answer').value.replace(/ /g,'') === element.replace(/ /g,'').toUpperCase() ||
//   document.getElementById('answer').value.replace(/ /g,'') === element.replace(/ /g,'').toLowerCase()) {
//       return true;
//   }
// } 그러면 if(정답.some(check)||문제 === 정답)

let list = [];

var answer = document.getElementById("answer").value;

var correctAnsw;

function prepare() {
  for (let k = 0; k < 10; k++) {
    document.getElementById("loading").innerHTML +=
      '<img src="./photo/' + list[k] + '.jpg">';
  }
}

function Shuffle() {
  for (let i = 0; i < list.length; i++) {
    let j = Math.floor(Math.random() * list.length);
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
}



function typeSelect(num, type) {
  if (
    document.getElementsByClassName("type")[num].className ===
    "level type select"
  ) {
    document.getElementsByClassName("type")[num].className = "level type";
    let other = [];
    list.forEach(function (x) {
      if (!Object.keys(type).includes(x)) {
        other.push(x);
      }
      list = other;
    });
  } else {
    //추가
    document.getElementsByClassName("type")[num].className =
      "level type select";
    list.push(...Object.keys(type));
  }
}

function levelSelect(num) {
  if (
    document.getElementsByClassName("level")[num].className === "level selected"
  ) {
    document.getElementsByClassName("level")[num].className = "level";
    list = [];
    for (let i = 0; i < 8; i++) {
      document.getElementsByClassName("type")[i].className = "level type";
    }
  } else {
    for (let i = 0; i < 5; i++) {
      document.getElementsByClassName("level")[i].className = "level";
    }
    for (let i = 0; i < 8; i++) {
      document.getElementsByClassName("type")[i].className =
        "level type select";
    }
    document.getElementsByClassName("level")[num].className = "level selected";
  }
}



var timer;

function startTimer(time) {
  timer = setInterval(function () {
    time--;

    document.getElementById("introduction").style.fontSize = "30px";
    if (document.getElementById("together").className === "together") {
      if (time <= 0) {
        if (time === 0) {
          tang.play();
          tiktok.pause();
        }
        document.getElementById("restart").style.display = "block";
        document.getElementById("button").style.dispaly = "block";
        document.getElementById("resume").style.display = "block";
        document.getElementById("record").innerHTML =
          "문제: " + order.toString();
        document.getElementById("explain").innerHTML =
          "정답은 " + question + " 입니다." + "<br>그 외 인정: ";
        for (a of correctAnsw) {
          document.getElementById("explain").innerHTML += a + " ";
        }
      } else if (time > 0) {
        tiktok.play();
        document.getElementById("introduction").innerHTML =
          "남은시간: " + time.toString();
      }
      document.getElementById("resume").style.display = "block";
    } else {
      if (time <= 0) {
        if (time === 0) {
          wrosound.play();
          tiktok.pause();
        }
        document.getElementById("result").style.fontSize = "220px";
        document.getElementById("result").innerHTML = "땡!";
        document.getElementById("record").style.fontSize = "50px";
        document.getElementById("explain").innerHTML =
          "정답은 " + question + " 입니다." + "<br>그 외 인정: ";
        for (a of correctAnsw) {
          document.getElementById("explain").innerHTML += a + "/";
        }
        document.getElementById("answer").value = null;
        document.getElementById("restart").style.display = "block";
        document.getElementById("answer").style.display = "hidden";
        document.getElementById("button").style.display = "none";
        document.getElementById("introduction").style.display = "none";
        document.getElementById("input").style.display = "none";
        document.getElementById("title").style.display = "block";
        document.getElementById("top").style.display = "block";
      } else if (time > 0) {
        tiktok.play();
        document.getElementById("introduction").innerHTML =
          "남은시간: " + time.toString();
      }
    }
  }, 1000);
}

let order = 0;
let question;

function Ask() {
  startTimer(parseInt(document.getElementById("time-limit").value));
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("start").style.position = "absolute";
  question = list[order];
  correctAnsw = all[list[order]];
  order++;
  document.getElementById("name").innerHTML =
    '<img id="img" src="./phot21o/' + question + '.jpg">'; // 그 사진을 문제 란에 올리기.
  document.getElementById("loading").innerHTML +=
    '<img src="./photo/' + list[order + 10] + '.jpg">'; //미리 로딩시키기
  document.getElementById("answer").value = null; // 정답칸 비워주기.

  // if (window.innerWidth < 800) {
  //   document.getElementById("title").style.display = "none";
  //   document.getElementById("top").style.display = "none";
  //   document.querySelector("#title h1").innerHTML = null;
  // } else {
  //   document.getElementById("name").style.height = "auto";
  // }
  // document.getElementById('name').style.height = 'auto'
}

function ready() {
  document.getElementById("answer").value = null;
  document.getElementById("result").innerHTML = null;
  document.getElementById("explain").innerHTML = null;
}

function levelUp() {
  if (list === level1) {
    list = Object.keys(level2);
  } else if (list === level2) {
    list = Object.keys(level3);
  }
}

// function check(element) {         ======== 대소문자 구분/ 확인
//   if (
//     document.getElementById("answer").value.replace(/ /g, "").toUpperCase() ===
//       element.replace(/ /g, "").toUpperCase() ||
//     document.getElementById("answer").value.replace(/ /g, "").toLowerCase() ===
//       element.replace(/ /g, "").toLowerCase()
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

function Game() {
  tiktok.pause();
  corsound.load();
  clearInterval(timer);
  if (
    document.getElementById("answer").value === question ||
    correctAnsw.some(check)
  ) {
    corsound.play();

    document.getElementById("result").innerHTML = "정답!";
    document.getElementById("result").style.animation = "blink 1s 0.3";
    setTimeout(function () {
      document.getElementById("result").style.animation = "none";
    }, 300);
    document.getElementById("answer").value = null;
    turn += 1;
    document.getElementById("record").innerHTML = "점수: " + turn.toString();

    if (list.length === order) {
      document.getElementById("record").style.fontSize = "50px";
      // document.getElementById('result').style.fontSize = '45px';
      document.getElementById("result").innerHTML =
        "전부 다 <br> 맞히셨습니다!";
      document.getElementById("name").innerHTML = "끝!";
      document.getElementById("name").innerHTML.style.fontSize = "50px";
      document.getElementById("title").style.display = "block";
      document.getElementById("top").style.display = "block";
      document.getElementById("result").style.animation =
        "blink 1s step-end infinite";
      document.getElementById("restart").style.display = "block";

      // if (list === level1 || list === level2) {
      //   document.getElementById("next").style.display = "block";
      // } else if (list === level3 || list === all) {
      //   document.getElementById("result").innerHTML +=
      //     "<br>이정도면 예능정복 쌉가능";
      // }

      // document.getElementById("answer").style.visibility = "hidden";
      // document.getElementById("button").style.display = "none";
      // document.getElementById("introduction").style.display = "none";
      // document.getElementById("input").style.display = "none";
      // document.getElementById("restart").style.display = "block";
    } else {
      Ask();
    }
  } else {
    wrosound.play();
    document.getElementById("title").style.display = "block";
    document.getElementById("top").style.display = "block";
    document.getElementById("result").style.fontSize = "220px";
    document.getElementById("result").innerH= "땡!";
    document.getElementById("record").style.fontSize = "50px";TML 
    document.getElementById("explain").innerHTML =
      "정답은 " + question + " 입니다." + "<br>그 외 인정: ";
    for (a of correctAnsw) {
      document.getElementById("explain").innerHTML += a + "/";
    }
    document.getElementById("answer").value = null;
    document.getElementById("restart").style.display = "block";
    document.getElementById("answer").style.visibility = "hidden";
    document.getElementById("button").style.display = "none";
    // document.getElementById("introduction").style.display = "none";
    document.getElementById("input").style.display = "none";
  }
}

document.getElementById("resume").addEventListener("click", resume);
document.getElementById("submit").addEventListener("click", Game);

function resume() {
  if (order == list.length) {
    document.getElementById("explain").innerHTML = "<br>끝났어요.";
  } else {
    document.getElementById("introduction").innerHTML =
      "남은시간: " + parseInt(document.getElementById("time-limit").value);
    document.getElementById("record").innerHTML = null;
    document.getElementById("result").innerHTML = null;
    document.getElementById("explain").innerHTML = null;
    document.getElementById("result").style.fontSize = "40px";
    document.getElementById("record").style.fontSize = "20px";
    document.getElementById("button").style.display = "block";
    document.getElementById("introduction").style.display = "block";
    clearInterval(timer);
    Ask();
    document.getElementById("restart").style.display = "none";
  }
}

function Enter() {
  if (window.event.keyCode === 13) {
    if (document.getElementById("answer").value.length > 0) {
      Game();
    }
  }
}

function gamestart() {
  if (list.length === 0) {
    list = Object.keys(all);
  }
  if (document.getElementById("together").className === "together") {
    document.getElementById("input").style.visibility = "hidden";
  }
  Shuffle();
  prepare();
  setTimeout(function () {
    document.getElementById("name").innerHTML = "3";
    audio.play();
  }, 200);

  setTimeout(function () {
    document.getElementById("name").innerHTML = "2";
    audio.play();
  }, 1200);
  setTimeout(function () {
    document.getElementById("name").innerHTML = "1";
    audio.play();
  }, 2400);
  setTimeout(function () {
    document.getElementById("name").innerHTML = "Go!";
  }, 3600);
  setTimeout(function () {
    Ask();
  }, 4000);
}

function restart() {
  turn = 0;
  order = 0;
  document.getElementById("record").innerHTML = null;
  ready();
  document.getElementById("result").style.fontSize = "40px";
  document.getElementById("record").style.fontSize = "20px";
  document.getElementById("answer").style.visibility = "visible";
  document.getElementById("button").style.display = "block";
  document.getElementById("introduction").style.display = "block";
  document.getElementById("input").style.display = "block";
  gamestart();
  clearInterval(timer);
  document.getElementById("introduction").innerHTML = "이번엔 맞히자";
  document.getElementById("restart").style.display = "none";
}

document.getElementById("restart").addEventListener("click", restart);
document.getElementById("next").addEventListener("click", function () {
  levelUp();
  restart();
  document.getElementById("next").style.display = "none";
  if (list === level2) {
    document.getElementById("choice").textContent = "2단계";
  } else if (list === level3) {
    document.getElementById("choice").textContent = "3단계";
  }
});

document.getElementById("together").addEventListener("click", function () {
  if (document.getElementById("together").className === "together") {
    document.getElementById("together").classList.remove("together");
    document.getElementById("together").innerHTML = "혼자서";
    document.getElementById("result").style.display = "block";
    document.getElementById("record").style.visibility = "visible";
    document.getElementById("input").style.visibility = "visible";
    document.getElementById("explain").style.marginTop = "0";
    document.getElementById("explain").style.fontSize = "20px";
    document.getElementById("resume").style.display = "none";
  } else {
    document.getElementById("explain").style.marginTop = "10px";
    document.getElementById("explain").style.fontSize = "50px";
    document.getElementById("record").style.visibility = "visible";
    document.getElementById("input").style.visibility = "hidden";
    document.getElementById("together").classList.add("together");
    document.getElementById("together").innerHTML = "친구랑";
    document.getElementById("result").style.display = "none";
  }
});

document.getElementById("guess-close").addEventListener("click", function () {
  document.getElementById("guess").style.display = "none";
});
