


while(true){

    
    var score ;
    
    while (true) {
        
        var lv = +prompt(`~~~~~~~~재미있는 사칙연산 게임 ~~~~~~~~
        [즐겁게 문제를 푸시다가 지겨우면 0을 누르세요]
        =======================================================
        [1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`)

        var HIGH = 1,
        MIDDLE = 2,
        LOW = 3;
        if (lv === HIGH) {
            score = 100;
        } else if (lv === MIDDLE) {
            score = 50;
        } else if (lv === LOW) {
            score = 20;
        } else {
            alert(`다시 설정하세요`);
            continue;
        }
        break;
    }
    
    var max = 0;
    var min = 0;
while (true) {
    
    for (var i = 1; i < 500000000000000; i++) {
        var x = Math.floor(Math.random() * score) + 1;
        var y = Math.floor(Math.random() * score) + 1;
        
        if(x===y){
            continue;
        }else{
            
            
            var qz = +prompt(`Q${i}.${x} + ${y} = ??`);
            if ((x + y) === qz) {
                max++;
                alert('정답입니다');
            } else if (0 === qz) {
                var gameEnd = confirm(`정말 종료하시겠습니까  ?`);
                break;
            } else {
                alert('틀렸습니다')
                min++;
            }
        }
    }
    if(!gameEnd){
        continue;
    }else{
        break;
    }
    
    
}
alert(`게임을 종료합니다
==========================
정답횟수: ${max}, 틀린횟수 : ${min}`);
break;
}



// alert(`~~~~~~~~재미있는 사칙연산 게임 ~~~~~~~~
//     [즐겁게 문제를 푸시다가 지겨우면 0을 누르세요]
//     ==========================================`);

//     var ol = 0;
//     var xl = 0;
// while (true){

//     for(var i = 1; i<5000; i++){
//         var x = Math.floor(Math.random() * 20) +1;
//         var y = Math.floor(Math.random() * 20) +1;
//          var qz =+prompt(`Q${i}.${x} + ${y} = ??`);
//     if((x+y)===qz){
//         ol++;
//         alert('정답입니다');
//     }
//     else if(0===qz){
//         break;
//     }else{
//         alert('틀렸습니다')
//         xl++;
//     }
//     }
//     if(0===qz){
//         break;
//     }
//     break;  
// }
// alert(`게임을 종료합니다
//     ==========================
//     정답횟수: ${ol}, 틀린횟수 : ${xl}`);