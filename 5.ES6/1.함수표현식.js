/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.

    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 일급 객체라 할 수 있다.
 */


// 함수의 선언문
function add(n1, n2){
    return n1 + n2 ; 
}

// const plus = add(5,9);

const plus = add; 

// console.log(plus);

const r1 = plus(10, 20);
console.log(`r1 ${r1}`)


// 무명함수 생성 : 함수 리터럴(값) 
const sub = function (n1, n2) {
 return n1- n2;
};

sub(20,10);

    
// 변수나 자료구조 , 객체, 배열 , 함수(함수리터럴포함), 다 저장이 가능하다
const fArr = [10, 'hello',
             true, {}, 
             [], add,
            function(){ console.log('메롱')}
            ];
        fArr[7];

    const dog = {
        name : '초코',
        kind : '푸들',
        bark : function(){
            console.log('왈왈!');
        }
     };

     const cat = {
        name : '야옹이',
        kind : '페르시안',
        sleep : function(){
            console.log('쿨쿨 zzz');
        }
     }

     dog.bark();
     cat.sleep();
