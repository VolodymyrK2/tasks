// function fibonacci(n) {
//     let a = 0;
//     let b = 1;
//     const arrFib = [];
//     const arrSection = [];
//     do {
//         let fib = a + b;
//         arrFib.push(fib);
//         arrSection.push((fib / b).toFixed(4));
//         a = b;
//         b = fib;
//     }
//     while (arrFib.length <= n);
//     console.log(arrSection);
//     return arrFib;
// }
// console.log(fibonacci(15000));
const recurseFibonacci = (n) => {
    if (n <= 1) {
        return [0, 1];
    } else {
        let fib = recurseFibonacci(n - 1);
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        return fib;
    }
}
    console.log(recurseFibonacci(5));
