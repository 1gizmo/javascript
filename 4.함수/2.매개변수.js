
// x ~ y 까지의 총합을 구하는 함수

/* 
        description : x ~ y 까지의 총합을 구하는 함수
        parameter : 
            - begin: 누적 총합의 시작 값
            - end : 누적 총합의 끝값
        return : 계산된 총합

*/

// 매개변수 ( parameter) : 함수를 정의할 때 외부에서 받아오는 값을 저장할 변수
function calcRangeTotal(begin, end) {

    // console.log(`x: ${begin}, y: ${end}`);
    var total = 0; // 총합을 저장 할 변수
    for (var i = begin; i <= end; i++){
        total += i;

    }   
    return total; 
}
// 인수 ( argument ) : 함수를 호출할 때 함수에게 전달되는 값이나 표현식
var result1 = calcRangeTotal(1, 10);

console.log(`result1: ${result1}`)

console.log(`result2:${calcRangeTotal(1, 50)}`)

console.log(`result3:${calcRangeTotal(1, result1 - 5)}`)

// 매개변수 기본 값
function sayHello(language='한국어'){

    // ES5
    // language = language || '한국어'; 옛날에 사용하던 방법

    // ES6
    // function sayHello(language='한국어'){ 현재 사용하는 방법
    if(language === '한국어'){
        console.log(`안녕하세요`)
    }else if(language === '영어'){
        console.log(`hello ~`)
    }else if(language === '중국어'){
        console.log(`따쟈하오~`)
    }else{
        console.log(`크크루삥뽕~`)
    }
}

sayHello()


// ex: [10, 20, 30, 40, 50]
function mySlice(arr, start, end){
    // 사본 배열 생성
    var copyArr = [];
    for (var i = start; i < end; i ++){
        copyArr.push(arr[i]);
    }
    return copyArr;
}

var newArr = mySlice([10, 20, 30, 40, 50], 1, 3);
console.log(newArr);



// 매개변수가 없는 함수
function selectRandomPet(){
    var pets = ['멍멍이','쨱짹이','꽥꽥이','어흥이'];

    return pets[Math.floor(Math.random() * pets.length)];
}

var randomPet = selectRandomPet();
console.log(`랜덤동물 : ${randomPet}`)




