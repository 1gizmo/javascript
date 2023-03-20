

// 배열의 특정 데이터의 인덱스를 구하는 함수

function myindexOf(arr, element){


    for (var i = 0; i < arr.lenght; i++){
        if(element === arr[i]){
            return i;
        }
    }
    return -1;
}

// function myIncludes(arr, element){

//     for (var i = 0; i < arr.lenght; i++){
//         if(element === arr[i]){
//             return true;
//         }
//     }
//     return false;
// }

function myIncludes(arr, element){

    return myindexOf(arr, element) !== -1;
  
}



var foodList = ['짜장면','탕수육','고추잡채','족발'];

var idx = myindexOf(foodList, '탕수육'); // idx : 1 