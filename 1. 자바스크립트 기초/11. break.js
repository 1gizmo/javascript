

outer: for (var i = 0; i < 3; i++) {
    inner: for (var j = 0; j < 2; j++) {
        if ( i === j ) {
            break inner;
        }
        console.log(`[ ${i}, ${j} ]`);
    }
}
console.log('========================');


// 50000번의 루프 중 1~10사이의 랜덤숫자중 3이
// 나오면 반복을 중간에 멈추고 싶다.

for (var i = 0; i < 50000; i++) {
    var rn = Math.floor(Math.random() * 10) + 1;
    console.log(rn);
    if (rn === 3) {
        console.log(`반복문 종료 : ${i}`);
        break;
    }
}
