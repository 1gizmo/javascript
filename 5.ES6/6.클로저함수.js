
// 자바스크립트의 함수는 함수를 리턴할 수 있음
/*
function calculator(n1, n2){

    function add() {
        return n1 + n2 ;
    }

    return add;
}

const zzz = calculator(10,20)
console.log(typeof zzz)

const n = zzz()
console.log(`n : ${n}`)
*/

// function calculator(n1, n2){
//     return () => n1 + n2;
// }

/*
const calculator = (n1, n2) => () =>  n1 + n2;

const zzz = calculator(10,20)
// console.log(typeof zzz)
console.log(zzz())
// const n = zzz()
// console.log(`n : ${n}`)
*/

/*
let count = 0; //카운팅 변수 (전역변수)
const increase = () => ++count;
console.log(increase())
console.log(increase())
count = 999;
console.log(increase())  //3?
*/
/*
const increase = () => {
    let count = 0; //지역변수
    return ++count;
};

console.log(increase())
console.log(increase())
console.log(increase())
*/
/*
const increadseClosure = () => {

    let count = 0; // 지역변수

    return () => ++count;
}

const increaser = increadseClosure();

console.log(increaser())
console.log(increaser())
console.log(increaser())
*/

// 즉시 실행 함수 : 정의와 동시에 호출  1회용
/*
const result = (function(n1, n2)  {
return n1 + n2;
})(5, 8);

console.log(result);
*/

const increase = (()=> {
    
    let count = 0; // 지역 변수

    return () => ++count;

})();

console.log(increase())
console.log(increase())
console.log(increase())
