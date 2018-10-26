// currency converter 

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


// min and max numbers

function minMax (num) {
    const maxNum = Math.max(...num);
    const minNum = Math.min(...num);
    console.log("Max number is: " + maxNum);
    console.log("Min number is: " + minNum);
}


// Average number of values

let arr = [54,44,22,48,67,3,7,-45];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    average = sum / arr.length;
}
console.log (average);


// Recursion function that print numbers from 10 to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//TASK 4

for (var i=0; i < 8; i++) {
    console.log("#".repeat(i+1))
  }