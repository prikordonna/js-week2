//TASK 1.1 currency converter 

let ua = 26;

function convertUah (num){
    let num1 = document.getElementById('num1').value;
    result = num1 / ua;
    document.getElementById('resultUah').innerHTML = "Результат: " + result;       
}
    
function convertUsd (num) {
    let num2 = document.getElementById('num2').value;
    result = num2 * ua;
    document.getElementById('resultUsd').innerHTML = "Результат: " + result;
}


//TASK 1.2  min and max numbers

const minMax = numbers => ({
    max: Math.max(...numbers),
    min: Math.min(...numbers),
   });


//TASK 1.3 Average number of values

let arr = [54,44,22,48,67,3,7,-45];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    average = sum / arr.length;
}
console.log (average);


//TASK 2. Recursion function that print numbers from 10 to 1

const recursion = (n) => {
    if(n >= 0) {
        console.log(n);
        recursion(n-1);
    }
}
recursion(10);


//TASK 4   -------------------------

for (var i=0; i < 8; i++) {
    console.log("#".repeat(i+1))
  }