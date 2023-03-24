
let x = 'foo'; //전역변수
console.log(x);


function add(n1, n2) {
   console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

export {x , add};
