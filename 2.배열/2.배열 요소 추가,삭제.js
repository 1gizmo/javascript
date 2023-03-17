

var pets = ['멍멍이', '야옹이', '쩝쩝이'];

console.log(pets);

// pets[3] = '징징이';
// console.log(pets);


//안좋은 예 
// pets[pets.length]= '징징이';



pets.push('징징이');
pets.push('어흥이');
var newLength = pets.push('거부기','콩콩이');

console.log(pets);
console.log(newLength);

//맨 끝 데이터 삭제
pets.pop();

console.log(pets);


// shift() : 배열의 맨 첫번째 요소 제거
pets.shift();

console.log(pets);

// unshift ( ...items) : 배열의 첫번째 데이터 추가
pets.unshift('짝짝이');
console.log(pets);

