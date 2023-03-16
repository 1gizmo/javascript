
var money = 1000;

// var food = money >= 2000 ? '라면' : '삼각김밥';

var food = money >= 5000 ? 
                    '볶음밥' : 
                    (money >= 3000 ? '삼각김밥' : '라면');

// if (money >= 5000) {
//     food = '볶음밥';
// }else if (money >= 3000){
//     food = '삼각김밥';
// }else {
//     food = '굶음';
// }
console.log (`선택한 음식: ${food}`);

alert('하하하');