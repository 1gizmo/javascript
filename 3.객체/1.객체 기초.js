


// 객체 리터럴 (값)

var dog = {
    //프로퍼티 작성
    name : '뽀삐',
    kind : '진돗개',
    age : 3,
    // 'for waiting': 11,
    injection: true,
    favorite: ['산책', '간식'],
    hate: null,
    // playWithChild: function(){},
};

var cat = {
    //프로퍼티 작성
    name : '콩순이',
    kind : '블랙러시안',
    age : 2,
    // 'for waiting': 11,
    injection: true,
    favorite: ['낮잠자기', '방어지럽히기'],
    hate: null,
};

console.log(typeof cat);

//객체에 저장된 데이터 참조

console.log(dog.name);
console.log(cat.age);
console.log(cat.favorite);
console.log(dog.favorite[0]);

// dog.favorite - cat.age; 타입이 맞지 않으면 연산 불가

// dog.age - cat.age 타입이 일치하면 연산가능


// 배열타입은 추가도 가능
dog.favorite.push('꼬리 흔들기');
console.log(dog);

dog.favorite.slice(1).splice(1, 1);

//프로퍼티 참조 2
console.log('==========================')
console.log(dog.injection);
console.log(dog['injection']);

//key를 변수에 저장 
var fv = 'favorite';
console.log(cat[fv]);


//프로퍼티 값 수정
dog.age = 4;
cat.favorite[1] = '실뭉치';
dog['injection'] = false;


console.log(dog.age)
console.log(cat.favorite[1])

// 프로퍼티 동적 추가
cat.owner = '김철수';

console.log(cat)

//프로퍼티 삭제
delete cat.owner;
console.log(cat)

console.log('=============================')

//프로퍼티 존재 유무확인
// key를 반드시 문자열로 표기해야함.

var ageFlag = 'age' in cat;
console.log(ageFlag);

// master 라는 프로퍼티가 없으면 추가해라
if(!( 'master ' in cat)){
    cat['master'] = '김또또';
}

console.log('============================')

//객체를 순회하는 반복문
// key 를 반복해서 추출해준다
for (var n in dog) {
    // console.log(n);
    console.log(dog[n]);
}

//객체의 중첩구조
//예시 : 게시판

var articles = {
    totalCount: 25578,  //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, 
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        }, 
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        }
    ]
};
var bbs = articles.articleList;

bbs[0].writer;

var cot = 0;

for ( var x in articles.articleList[0]){
    console.log(`${++cot}!!`)
}
for (var y of bbs) {

}

