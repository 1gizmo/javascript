


var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while(true){

    var modTarget = prompt(`현재 멤버:[${tvxq}]수정할 이름을 입력하세요.`);
    
    if(tvxq.includes(modTarget)){
        //존재한다면 
        var newMemberName = prompt('새로운 멤버 이름을 입력하세요');
        
        tvxq[tvxq.indexOf(modTarget)] = newMemberName;
        alert(`수정완료!\n현재멤버:[${tvxq}]`);
        
        break;
        
}  else {
    alert(`${modTarget}는 잘못된 이름입니다.\n 멤버이름을 다시 입력해주세요`)
}

}