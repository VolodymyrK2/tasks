function fibonacci(n) {
    let a = 0;
    let b = 1;
    const arrFib = [];
    const arrSection = [];
    do {
        let fib = a + b;
        arrFib.push(fib);
        arrSection.push((fib / b).toFixed(4));
        a = b;
        b = fib;
    }
    while (arrFib.length <= n);
    console.log(arrSection);
    return arrFib;
}
console.log(fibonacci(15000));
