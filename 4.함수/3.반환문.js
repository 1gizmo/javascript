
function add(n1, n2) {
    

    return n1 + n2; // 탈출문 

    console.log('메롱');
}

// 반환값 : 함수 호출 이후에 함수밖으로 전달되는 값 
var r1 = add(5, 7);

add(r1, r1 * 2); // add(12, 24)
// add(r1, r1 *= 2); // add(12, 24)

//안쪽으로 쭉가서 실행 같은 레벨끼리는 왼쪽부터 실행
// 닌자 *
var r2 = add(add(2,3), add(add(3,4), add(6,2)))
console.log(`r2 : ${r2}`)


// 리턴이 없는 함수 (void 함수)
// 리턴이 없는 함수는 변수에 담지말고, 다른함수에 인수로 전달 X 

function multi(n1, n2){
    var result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}

var r3 = multi(10, 3);

add(r3 , 10);

multi(add(4,3),add(5,5));

var r4 = add(multi(3,2), 40);
console.log(`r4: ${r4}`);

// return 탈출문
function callName(nickname){

    var prohibits = ['멍청이','돌아이','홍길동'];

    if (prohibits.includes(nickname)){
        console.log(`잘못된 닉네임은 인사를 못해줘 이놈아`);
        return;
    }

    console.log(`${nickname}님 안녕하세요!`);
}

callName('멍청이')

function stopLoop() {
    while(true) {
        var flag = prompt(`명령어를 입력하세요 ! !`)
        if(flag === '멈춰'){
           return;
        }
        alert(flag);
    }
    alert(`수고용 ~ ~ ! `)
}
// break로 반복문 탈출 시 수고용~을 실행하지만 return 은 바로 탈출하고 종료

stopLoop();