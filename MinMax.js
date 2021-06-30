let number;
let array = [];

for(let i=0;i<10;i++){
    do{
        number = Math.floor(Math.random() * 999);
    }while(number < 100);
    array[i] = number;
}
array.sort();
minMaxWithoutSorting(array);
function minMaxWithoutSorting(arr){
    arr.sort();
    console.log(arr);
    let firstMax = Math.max.apply(null,arr);
    tempArray.splice(arr.indexOf(firstMax),1);
    console.log("Second Max: " + Math.max.apply(null,arr));

    let firstMin = Math.min.apply(null,arr);
    tempArray.splice(arr.indexOf(firstMin),1);
    console.log("Second Min: " + Math.min.apply(null,arr));
}

// function minMaxWithSorting(array){
//     array.sort();
//     console.log("Second Max: " + array.indexOf(array.length - 1));
//     console.log("Second Min: " + array.indexOf(1));
// }
