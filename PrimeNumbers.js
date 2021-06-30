const prompt = require('prompt-sync')();
var n = prompt("Enter number: ");
const primeArray = [];

for(let i=2;i<n;i++){
    while(n%i==0){
        primeArray.push(i);
        n = n/i;
    }
}
console.log(primeArray)