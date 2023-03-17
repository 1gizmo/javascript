

var foodList = ['닭꼬치','볶음밥','짜장면','족발'];

var count = 0 ;

var target = '짜장면';

// for (var food of foodList){
//     if(food === target){
//         break;
//     }
//     count++;
// }
// console.log(`찾은 인덱스: ${count}`);


//indexOf : 배열의 특정 데이터가 몇번 인덱스에 있는지 탐색

var index = foodList.indexOf(target);
console.log(`찾은 인덱스 : ${index}`);


// slice() : 배열을 일정부분 잘라냄. 사본배열을 반환
foodList.push('오뎅','순대국밥');

console.log(foodList);

var sliceFoods = foodList.slice(1, 4);

console.log(sliceFoods);

//2번부터 끝까지 추출
var sliceFoods2 = foodList.slice(2);
console.log(sliceFoods2);

//원본배열 그대로 복사
var sliceFoods3 = foodList.slice();
console.log(sliceFoods3);

// reverse() : 배열을 역순으로 배치 , 원본이 변함
console.log(`============================`);


var nums = [10, 20 , 30, 40, 50];
var copyNums =nums.slice();

copyNums.reverse();

console.log(nums);

// concat() : 배열 2개를 연결
console.log ( `==========================`);

var arr1 = [10, 20, 30];
var arr2 = [100, 900, 700, 1000];

var concatedArr = arr1.concat(arr2);

console.log(concatedArr);

// includes() : 배열의 특정 데이터가 존재하는지 확인

console.log(`===================`);

var resultFlag = foodList.includes('닭꼬ck');

console.log(resultFlag);

// splice() : 배열의 특정요소를 제거 , 삽입 
console.log('================================');


console.log(foodList);


// 원본에 반영
foodList.splice(4, 1);
console.log(foodList);

foodList.splice(0, 1, '보쌈');
console.log(foodList);


//1번에 마라탕 삽입
foodList.splice(1, 0, '마라탕');
console.log(foodList);



foodList.splice(2, 0, '아이스크림', '떡볶이');
console.log(foodList);

// 2번부터 끝까지 다 지운다
foodList.splice(2);
console.log(foodList);


