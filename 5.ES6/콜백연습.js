userList = [{
        userName: '둘리',
        userAge: 36,
        userJob: '한량',
        userAddr: '서울'
    },
    {
        userName: '또치',
        userAge: 37,
        userJob: '마술사',
        userAddr: '서울'
    },
    {
        userName: '도우너',
        userAge: 36,
        userJob: '음악가',
        userAddr: '경기도'
    },
    {
        userName: '마이콜',
        userAge: 32,
        userJob: '랩퍼',
        userAddr: '서울'
    },
];

// map 
const userName = userList.map(userList => userList.userName);
console.log(userName)

const userAge = userList.map(userList => userList.userAge);
console.log(userAge)

// filter 
const seoulUser = userList.filter(userList => userList.userAddr === '서울')
    .map(userList => ({
        job: userList.userJob,
        Age: userList.userAge,
    }))
    .forEach(userList => {
        console.log(`${userList.Age}살 ${userList.job}일 하는 사람입니다`)
    })

// console.log(seoulUser)