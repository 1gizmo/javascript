// function sum(a){
//    return function sum1(b){
//         return a + b ;
//     };
// }
// console.log( sum(1)(2));


function inBetween (n1, n2){

  function arrand(n){
    return  n >= n1 && n <= n2
    };
    return arrand;
} 
 
function inArray(arr){
   function arrcopy(a){
    return  arr.includes(a)
   }
        return arrcopy;
    }



let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3,6)) )

console.log(arr.filter(inArray([1,2,10])) )


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

function byField(nickname){

   return (a,  b) => a[nickname] > b[nickname] ? 1 : -1;
}

// users.sort(byField('name'));
users.sort(byField('age'));

console.log(users)