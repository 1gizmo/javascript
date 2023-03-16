
var a = 5;
var b = '5';

console.log(a === b);
console.log(a !== b);

console.log('=====================');

// == 비교는 결과 예측이 어려움
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');

// 문자 대소비교
console.log('=====================');
console.log('cobra' <= 'cobrO');


var money = 0;

if (!money) {
    console.log('저는 그지입니다.');
} else {
    console.log('저는 돈이 있습니다.');
}
