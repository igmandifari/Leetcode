function Palindrome(x){
    if(x<10) return true
    if(x<0) return false

    const str = String(x)
    for(let i=0, j=str.length-1; i<j; i++,j--){
        if(str[i]!==str[j]) return false
    }
    return true
}

console.log(Palindrome(-1));
console.log(Palindrome(1));
console.log(Palindrome(1234));
console.log(Palindrome(12321));
console.log(Palindrome("baba"));
console.log(Palindrome("aba"));
console.log(Palindrome("asdfgfdsad"));
console.log(Palindrome("abaa"));