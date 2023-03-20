
//함수 정의 - 만든다

function happyGreeting(yourName) {
    console.log(`${yourName}님 안녕하세요 ! 방가 !`);
    console.log(`오늘도 즐거운 하루 되세요~`);
}

//함수 호출 - 사용한다

happyGreeting('뽀로로');

function makeLine(){
    console.log('========================');
}

makeLine();
    
for( var i = 0; i<5; i++){
    makeLine();
}

//원의 넓이를 자주 구한다. 원주율 * 반지름 ^ 2

function calcAreaCircle(r) {
    var PI = 3.14159265;
    var area = PI * r** 2;
    return area;
}


var r1 = calcAreaCircle(5);

console.log(calcAreaCircle(15));

var r3 = calcAreaCircle(20);