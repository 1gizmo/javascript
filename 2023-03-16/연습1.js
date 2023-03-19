
var numbers = [] ;


while(true) {

    var inputData = prompt('숫자를 입력하세요')

    if(inputData === '그만') break;

    numbers.push(+inputData);

}

var total = 0 ;

for(var n of numbers){
    total += n;
}

alert(`입력한 숫자 목록[${numbers}]\n입력한 숫자의 총합${total}`)