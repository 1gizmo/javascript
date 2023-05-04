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
       
        document.querySelector("record").innerHTML =
          "문제: " + order.toString();
        document.querySelector(".correct").innerHTML =
          "정답은 " + question + " 입니다." + "<br>그 외 인정: ";
        for (a of correctAnsw) {
          document.querySelector("explain").innerHTML += a + " ";
        }
      } else if (time > 0) {
        tiktok.play();
        document.querySelector("timer").innerHTML =
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
      
        document.getElementById("answer").style.display = "hidden";
        
        
        document.querySelector("scorebox").style.display = "none";
        document.getElementById("title").style.display = "block";
        document.getElementById("top").style.display = "block";
      } else if (time > 0) {
        tiktok.play();
        document.querySelector("correct").innerHTML =
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
  document.getElementById("imgbox").innerHTML =
    '<img id="img" src="./phot21o/' + question + '.jpg">'; // 그 사진을 문제 란에 올리기.
  document.getElementById("loading").innerHTML +=
    '<img src="./photo/' + list[order + 10] + '.jpg">'; //미리 로딩시키기
  document.getElementById("answer").value = null; // 정답칸 비워주기.
};

function ready() {
    document.getElementById("answer").value = null;
    document.getElementById("result").innerHTML = null;
    document.getElementById("explain").innerHTML = null;
  }
  
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