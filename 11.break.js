
// 50000번의 루프 중 1~10 사이의 랜덤숫자중 3이 나오면 반복을 중간에 멈추고싶다.



// for (var i = 0; i < 50000; i++){
//     var rn = Math.floor(Math.random() * 10) + 1;
//     console.log(rn);
//     if(rn === 3 ){
//         console.log(`반복문 종료 : ${i}`);
//         break;
//     }
// }

// for (var i = 0; i < 3; i++){
//     for (var j = 0; j < 2; j++){
      
//         console.log(`[ ${i}, ${j} ]`);
//     }
// }

// console.log('================================');


for (var i = 0; i < 3; i++){
    for (var j = 0; j < 2; j++){
        if( i === j ){
            break;
        }
        console.log(`[ ${i}, ${j} ]`);
    }
}

console.log('================================');



//라벨 지정으로 반복문 나가기 , 지정이 없다면 제일 가까운 반복문만 break
outer: for (var i = 0; i < 3; i++){
   inner : for (var j = 0; j < 2; j++){
        if( i === j ){
            break outer;
        }
        console.log(`[ ${i}, ${j} ]`);
    }
}

console.log('================================');

