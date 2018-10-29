const n = Number(prompt('Type number of Fibonacci'));   
function fib(n) {
  if( n <= 1)
  return n;
  return fib(n - 1) + fib(n - 2);
 }
 
 function fibCycle (n) {
  let a = 1;
  let b = 1;
  let c= 0;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

alert( fib(n) ); 