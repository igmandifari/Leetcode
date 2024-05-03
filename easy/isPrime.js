function isPrime(num){
    for(let i=2; i<num; i++){
        if(num%i===0) return false
    }
    return num>1    
}

console.log(isPrime(3))

function generatePrimeSeries(limit) {
    let primeSeries = [];
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeSeries.push(num);
        }
    }
    return primeSeries;
}

console.log(generatePrimeSeries(20));

