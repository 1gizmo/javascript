


var input = +prompt(`숫자를 입력하세요`);
var pm = ``;

for(var i = 0; i<input; i++){
             if(i%2 === 0 ){
                pm += `+`;
        }else{
                pm += `-`;
        }
}
alert(`${pm}`);