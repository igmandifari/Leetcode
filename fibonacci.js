function Fibo(x){
    if(x<2) return x

    return Fibo(x-1)+Fibo(x-2)
}

function Fibo2(x){
    if(x<2) return x

    let satu = 0
    let dua = 1
    let hasil = 0
    
    for(let i=1; i<x; i++){
        hasil =  satu + dua
        satu = dua
        dua = hasil
    }
    return hasil
}

console.log(Fibo(10));
console.log(Fibo2(10));

// Fungsi untuk menampilkan deret Fibonacci hingga n bilangan
function fibonacci(n) {
    let fibSeries = [];
    let num1 = 0, num2 = 1;

    for (let i = 1; i <= n; i++) {
        fibSeries[i - 1] = num1;
        let nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;
    }

    return fibSeries;
}

// Fungsi untuk menampilkan hanya bilangan genap dari deret Fibonacci
function evenFibonacci(n) {
    let fibSeries = [];
    let num1 = 0, num2 = 1;
    let count = 0;

    while (count < n) {
        let nextTerm = num1 + num2;
        if (nextTerm % 2 === 0) {
            fibSeries[count] = nextTerm;
            count++;
        }
        num1 = num2;
        num2 = nextTerm;
    }

    return fibSeries;
}

// Fungsi untuk menampilkan hanya bilangan genap dari deret Fibonacci
function evenFibonacci2(n) {
    let fibSeries = [];
    let num1 = 0, num2 = 1;

    for (let i = 1; i <= n; i++) {
        let nextTerm = num1 + num2;
        if (nextTerm % 2 === 0) {
            fibSeries.push(num1);
        }
        num1 = num2;
        num2 = nextTerm;
    }

    return fibSeries;
}

// Contoh penggu
// Contoh penggunaan
let n = 10; // Misalnya, untuk menampilkan 10 bilangan dalam deret Fibonacci

console.log(fibonacci(n));
console.log(evenFibonacci(n));
console.log(evenFibonacci2(n));
