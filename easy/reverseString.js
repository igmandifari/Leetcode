function ReverseString(x){
    let result =""

    for(let i=x.length-1; i>=0; i--){
        result += x[i]
    }
    return result
}

console.log(ReverseString("hellow"));

// function Fibonacci(x){
//     if(x<2) return x
//     return Fibonacci(x-1)+Fibonacci(x-2)
// }

// console.log(Fibonacci(10));

function Palindrome(x) {
    x = String(x);

    for (let i = 0; i < x.length / 2; i++) {
        if (x[i] !== x[x.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// Contoh penggunaan
console.log(Palindrome("asdfghjklkjhgfdsa")); // true
console.log(Palindrome("racecar")); // true
console.log(Palindrome(12321)); // true
console.log(Palindrome("hello")); // false

