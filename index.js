// Fibonacci 

// function fib(n) {
//   let a = [0, 1];

//   for (i = 2; i < n; i++) {
//     b = a[i-1] + a[i -2];
//     a.push(b);
//   }
//   return a;
// }

// console.log(fib(5));
// big O = O(n)


// =====================

// Factorial

// function factorial(n){
//   result = 1
//   for(i=2; i<=n; i++){
//     // a=i*(i-1)
//     result = result*i
    
//   }
//   return result;
// }

// console.log(factorial(5))

// big O = O(n)


// PRIME Number

// function isPrime (n){
// if(n<2){
//   return false
// }
//   // case1
//   // for(let i=2; i<n; i++){

//   // case2(more optimal)
//   for(let i=2; i<Math.sqrt(n); i++){
//     if(n%i === 0){
//       return false
//     }
    
//   }
//   return true
// }

// console.log(isPrime(7))
// case1 bigO = O(n)
// case2 bigO=O(sqrt(n))