
// multi paramter : 매개변수가 n개인 경우

// 집합 자료구조를 매개변수로 사용
// [배열 , 객체]

// n개 정수를 전달하면 해당 정수의 총합을 구해주는 함수

// 스프레드 (ES6)
function addAll(...numbers) {

    var total = 0;

    for ( var n of numbers){
        total += n;
    }
    return total;
}

var r1 = addAll(1, 3, 5, 10 , 20)
console.log(`r1 : ${r1}`)

function  foo ( arr1 , arr2 ){

}

foo([10, 20], [500, 1000, 1500]);

// function  foo (...arr1, ...arr2 ){} ...은 배열을 하나만 쓸때 가능
// foo([10, 20], [500, 1000, 1500]);


console.log(`=============================`)


// 함수의 리턴값은 언제나 1개
// 2개의 정수를 전달하면 덧셈,뺄셈 ,곱셈, 나눗셈의 결과를 리턴받고싶다
// 하나의 배열에 다 담아서 리턴하면 가능
function operateAll(n1, n2){
    var addResult = n1 + n2;
    var subResult = n1 - n2;
    var multiResult = n1 * n2;
    var divideResult = n1 / n2;

    var resultset = [
        addResult,
        subResult,
        multiResult,
        divideResult
    ];
    return resultset;
}

// 위에 코드에서 변수를 재활용하지 않는다면 아래처럼 만들어도 된다
// 변수는 1번이상 사용할때는 만드는게 좋지만 일회용이라면 만들지 않아도 된다
function operateAll(n1, n2){
    return [
        addAll(n1, n2),
        n1 + n2,
        n1 - n2,
        n1 * n2,
        n1 / n2
    ];
    // 순서가 바뀌여도 상관없다면 객체로 만들어주는게 좋다
    return {    
     plus: addAll(n1, n2),
     minus:  n1 - n2,
     multiply:   n1 * n2,
     divide: n1 / n2
    };
}

var result = operateAll(10, 5);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

