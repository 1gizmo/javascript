

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
nums.reverse();

console.log(nums);
