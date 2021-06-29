let number;
let array = [];

for(let i=0;i<10;i++){
    do{
        number = Math.floor(Math.random() * 999);
    }while(number < 100);
    array[i] = number;
}

console.log(array);
minMaxWithoutSorting(array);
function minMaxWithoutSorting(array){
    let tempArray = array;
    let firstMax = Math.max.apply(Math,tempArray);
    tempArray.splice(tempArray.indexOf(firstMax),1);
    console.log("Second Max: " + Math.max.apply(Math,tempArray));

    let firstMin = Math.min.apply(Math,tempArray);
    tempArray.splice(tempArray.indexOf(firstMin),1);
    console.log("Second Min: " + Math.min.apply(Math,tempArray));
}
