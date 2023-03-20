/*
- 요구사항
1. 사용자에게 계정을 입력받으세요.
2. 입력된 계정이 존재하는 계정이 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 계정이 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "xxx님 환영합니다!"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/
var userInfo = {
    userList: [
        {
            account: 'kim1234',
            password: 'kkk1234',
            username: '김두한'
        },
        {
            account: 'park9876',
            password: 'ppp9999',
            username: '박찬호'
        },
        {
            account: 'hong7766',
            password: 'hhh1234',
            username: '홍길동'
        },
    ]
};

var userList = userInfo.userList;

while(true){

    // 계정 입력 받기
    // var inputAccount = 'kim1234'; 
    var inputAccount = prompt(`아이디를 입력하세요`);
    
    //회원목록을 반복하여 입력한 계정명과 일치하는 객체를 탐색
    var foundUser = null; // 로그인 시도하는 회원의 정보객체
    
    for (var user of userList){
        if(inputAccount === user.account){
            // console.log(`회원가입했다`); 
            foundUser = user;
            break;
        }
        
    }
    
    // foundUser 에는 로그인시도 하는 회원의 정보가 들어있다
    // 로그인시도 회원이 잘못된 계정을 입력하면 null로 유지되어있다
// console.log(foundUser);

if (foundUser !== null){
    // console.log(`일단 회원가입 했다`)
    //비밀번호 검증
    // var inputPassword = '321312';
    var inputPassword = prompt(`비밀번호를 입력하세요`);
    
    if(inputPassword === foundUser.password){
        alert(`${foundUser.username}님 환영합니다 ~~ ! !`)
        break;
    }else{
        alert(`비밀번호가 틀렸습니다`);
    }
    
    
}else{
    alert(`존재하지 않는 회원입니다.`);
    // console.log(`존재하지 않는 회원입니다.`)
}
}

