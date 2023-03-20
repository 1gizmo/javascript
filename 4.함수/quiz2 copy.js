/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
function calcNumbersTotalAndAverage(...result){

    var total = 0 ;

    for(var n of result){
        total += n;
    }
    var avg = total/result.length;
    var result = [];
         result.push(total, avg);

    // 변수 이름과 프로퍼티가 같으면 한개만 써도 됨
    return {
        total,
        avg
    };
 
  
    
   
    
}
 

var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);