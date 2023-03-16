// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다. 
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다. 
// 난이도는 상, 중, 하 난이도가 존재하며 
// 난이도별 입력 횟수제한이 다르다.


while (true) {

    var HIGH = 1,
        MIDDLE = 2,
        LOW = 3;


    // 사용자의 초기 입력 기회
    var INIT_COUNT;

    while (true) {
        var level = +prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');

        if (level === HIGH) {
            INIT_COUNT = 3;
        } else if (level === MIDDLE) {
            INIT_COUNT = 6;
        } else if (level === LOW) {
            INIT_COUNT = 10;
        } else {
            alert('난이도를 숫자로 다시 입력하세요!');
            continue;
        }
        break;
    }

    // 사용자의 남은 입력 기회
    var countDown = INIT_COUNT;


    // 실제 정답
    var secret = Math.floor(Math.random() * 100) + 1;
    console.log(secret);


    // 입력 최소값, 최대값
    var minValue = 1,
        maxValue = 100;

    // 게임 종료 플래그
    var gameEndFlag = false;

    while (true) {
        // 사용자 입력답
        var answer = +prompt(`숫자를 입력하세요! [${minValue} ~ ${maxValue}]`);

        // 입력이 범위안의 값인가?
        if (answer < minValue || answer > maxValue) {
            alert('범위 안의 값을 입력하세요!');
            continue;
        }

        countDown--;

        if (secret === answer) {
            alert(`정답입니다! ${INIT_COUNT - countDown}번만에 맞췄습니다!`);
            gameEndFlag = true;
            break;
        } else if (secret > answer) {
            alert(`UP!!`);
            minValue = answer + 1;
        } else {
            alert(`DOWN!!`);
            maxValue = answer - 1;
        }

        // 추가 게임 종료 조건
        if (countDown <= 0) {
            alert(`응 너 졌어~~~ 정답은 ${secret}이었음ㅋㅋㅋ`);
            gameEndFlag = true;
            break;
        } else {
            alert(`${countDown}번의 기회가 남았습니다.`);
        }

    } // end each game loop

    
    if (gameEndFlag) {
        var exitFlag = confirm('한 판더?');
        if (!exitFlag) {
            alert('수고하셨습니다!');
            break;
        }
    }

}// end all game loop