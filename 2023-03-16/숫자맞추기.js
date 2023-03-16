

// alert('1 ~ 50 사이의 무작위 숫자를 맞춰보세요 ~ ! !')


// var rn = Math.floor(Math.random() * 50) +1 ;

// for (var i=1; i < 50; i++){
//     var x = +prompt('숫자입력');
//     if(rn > x){
//         alert('UP !!')
//     }
//     else if (rn < x){
//         alert('DOWN !!')
//     }
//     else{
//         alert('딩동댕 ~ !!') 
//         break;
//     }
// }
// alert('다시 할려면 새로고침을 하세요')
// ========================1단계 숫자 맞추기게임 ================


// alert('1 ~ 50 사이의 무작위 숫자를 맞춰보세요 기회는 5번 ~ ! !')

// var rn = Math.floor(Math.random() * 50) +1 ;

// for (var i=1; i < 6; i++){
//     for (var j=5; j>=1; j--){
//         var x = +prompt(`숫자를 입력하세요 기회가 ${j}번 남았습니다`);
//         if(rn > x){
//             alert('UP !!')
//             // alert(`UP !! 기회가 ${j}번 남았습니다`)
//         }
//         else if (rn < x){
//             alert('DOWN !!')
//             // alert(`DOWN !! 기회가 ${j}번 남았습니다`)
//         }
//         else{
//             alert('딩동댕 ~ !!') 
//             break;
//         }
//     }
//         if(j===0){
//             alert('기회를 모두 소진했어요. GEAM OVER ! !')
//         }else {
//             alert('축하드립니다~ 통과!')
//             break;
//         }
// }
// alert('다시 할려면 새로고침을 하세요')
// ======================2단계 숫자 맞추기게임 =============


// alert(`[난이도를 설정하세요 ~ !]
//      [1. 상 (기회3번) | 2. 중 (기회6번) | 3.하 (기회 10번) ]`);
var lv = +prompt(`[난이도를 설정하세요 ~ !]
[1. 상 (기회3번) | 2. 중 (기회6번) | 3.하 (기회 10번) ]`);
var ch = 0;
if(lv===3){
    alert('1 ~ 50 사이의 무작위 숫자를 맞춰보세요 기회는 3번 ~ ! !');
    ch=+3;
}else if (lv===2){
    alert('1 ~ 50 사이의 무작위 숫자를 맞춰보세요 기회는 6번 ~ ! !')
    ch=+6;
}else if(lv===1) {
    alert('1 ~ 50 사이의 무작위 숫자를 맞춰보세요 기회는 10번 ~ ! !')
    ch=+10;
}else{
    alert('1~3까지의 난이도를 설정하세요')
}




var rn = Math.floor(Math.random() * 50) +1 ;

for (var i=1; i < 10; i++){
    for (var j=ch; j>=1; j--){
        var x = +prompt(`숫자를 입력하세요 기회가 ${j}번 남았습니다`);
        if(rn > x){
            alert('UP !!')
            // alert(`UP !! 기회가 ${j}번 남았습니다`)
        }
        else if (rn < x){
            alert('DOWN !!')
            // alert(`DOWN !! 기회가 ${j}번 남았습니다`)
        }
        else{
            alert('딩동댕 ~ !!') 
            break;
        }
    }
        if(j===0){
            alert('기회를 모두 소진했어요. GEAM OVER ! !')
        }else {
            alert('축하드립니다~ 통과!')
            break;
        }
}
alert('다시 할려면 새로고침을 하세요')
