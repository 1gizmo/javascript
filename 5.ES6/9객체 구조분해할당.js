const emp = {
        empName: '빡빡이',
        age : 29,
        hireDate: '2014-01-01',
        birthDay: '1995-12-31'
    };
// 객체는 key값으로 넣기때문에 순서 상관없고 원하는 key만 꺼내면 된다   
// const { empName, birthDay, age} = emp;
// console.log(`${empName}님의 나이는${age}이고 생일은${birthDay}입니다`);


// key값에 별칭을 달아서 이름을 바꿔줄 수 있음
const { empName: en, birthDay: bd, age: a} = emp;
console.log(`${en}님의 나이는${a}이고 생일은${bd}입니다`);


console.log(`=========================================`)

const {birthDay, age, ...others} = emp;

console.log(others)

// 객체 안전 복사 : 스프레드

const copyEmp = { 
        ...emp,
        addr : '서울시',
        hobby : ['먹기','자기']
}; 

console.log(copyEmp)
