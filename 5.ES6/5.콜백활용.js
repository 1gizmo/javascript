

const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '종로3가'
    },
    {
        account: 'abc2224',
        userName: '중길이',
        job: '추인',
        address: '종로1가'
    },
    {
        account: 'abc3334',
        userName: '소길이',
        job: '추공',
        address: '종로2가'
    },
    {
        account: 'abc1554',
        userName: '오길이',
        job: '추경',
        address: '종로12가'
    },
  
];
// 회원목록에서 회원정보를 출력하는 함수
function alertUserInfo(wannaSay) {

    for (const user of userList){
        wannaSay(user);
    }
}


// alertUserInfo(u => console.log(`나는 ${u.userName}님이시다 ! 하하하하하 `);


// 배열 고차 함수
// forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
userList.forEach(user => {
    console.log(user.address);
});

const number = [10, 20, 30, 40,];
let total = 0;

number.forEach(num => {
   total += num;  
});

console.log(`${total}`)