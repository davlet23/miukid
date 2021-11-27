

// var object = {0: 'first', 1: 'second', 2: 'third', length: 3}
// var array = [];

// // Преобразуем псевдомассив в массив
// for (var i = 0; i < object.length; i++) {
//    array.push(object[i]);
// };

// console.log( array ); // [1, 2, 3]



    
function a (){
    let s = ["first", "second", "third" ];
    for(res of s){
       let b = res.split('');
       console.log(b);
    }
}
a();