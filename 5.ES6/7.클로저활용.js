/*
const increase = (() => {
    let count = 0;
    return () => ++count;
}) ();

const decrease = (() => {
    let count = 0;
    return () => --count;
}) ();

console.log(increase()) //1
console.log(increase()) //2 
console.log(decrease()) //1 

*/
/*
function conuterClosure() {

    let count = 0;

    function increase() {
        return ++count
    }
    function decrease() {
        return --count;
    }
    return {increase, decrease};
}
// 하나에 함수 두개를 만든다
const counter = conuterClosure();
// counter 에 담는다

const increase = counter.increase;
const decrease = counter.decrease;
//따로 따로 만든 함수를 담아준다 그리고 사용

console.log(increase()) //1
console.log(increase()) //2 
console.log(decrease()) //1 
*/

/*
const counter = (() => {

    let count = 0;

    return { 
        increase: () => ++count,
        decrease: () => --count 
    };
})();

const { increase, decrease } = counter;

console.log(increase()); // 1
console.log(increase()); // 2
console.log(decrease()); // 1
*/
/*
function counterWithCbClosure() {
    let count = 0 ;
    function process(callback) {
        return count = callback(count);
    }
    return process;
}

const counter_ = counterWithCbClosure();

console.log(counter_(c => ++c )); //1 
console.log(counter_(c => c += 3 )); //4 
console.log(counter_(c => c **= 2 )); // 16
*/

const counter_ = (() => {    
    let count = 0;
    return callback => count = callback(count);
})();

console.log(counter_(c => ++c));    // 1
console.log(counter_(c => c += 3)); // 4
console.log(counter_(c => c **= 2));// 16



