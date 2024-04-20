function Palindrome(x){
    if(x < 0) return false 
    if(x < 2) return true

    let hasil = x.toString();

    for(let i=0; i<hasil.length/2; i++){
        for(let j=hasil.length; j--;){
            if(hasil[i]!==hasil[j]){
                return false
            }
            return true
        }
    }
}

console.log(Palindrome(-1));
console.log(Palindrome(1));
console.log(Palindrome(1234));
console.log(Palindrome(12321));
console.log(Palindrome("baba"));
console.log(Palindrome("aba"));
console.log(Palindrome("asdfgfdsad"));
console.log(Palindrome("abaa"));