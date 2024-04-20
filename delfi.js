function isPrime(x){
    for (let i = 2; i <= x; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(i);
    }
}


function Ganjil(x){
    for(let i=1; i<=x; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
function Genap(x){
    for(let i=1; i<=x; i++){
        if(i%2!==0){
            console.log(i);
        }
    }
}

function Fibonacci(x) {
    let a = 0;
    let b = 1;
    while (a <= x) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

function Bunga(uang, rate) {
    return uang * (rate / 100);
}


function Kembalian(hargaBeli, discount, payment) {
    let hargaDiskon = hargaBeli - (hargaBeli * (discount / 100));
    return payment - hargaDiskon;
}


function Piring(totalPiring, DinjamTio, PinjamDavid) {
    return totalPiring - (DinjamTio + PinjamDavid);
}


function Weird(x) {
    if (x % 2 !== 0) {
        console.log("weird");
    } else {
        if (x >= 2 && x <= 5) {
            console.log("not weird");
        } else if (x >= 6 && x <= 20) {
            console.log("weird");
        } else {
            console.log("not weird");
        }
    }
}


// isPrime(100)
Ganjil(100)
// Genap(100);
// Fibonacci(100);
// console.log(Bunga(850000, 5));
// console.log(Kembalian(165000, 15, 150000));
// console.log(Piring(6 * 144, 4 * 12, 2 * 12));
// Weird(3);

