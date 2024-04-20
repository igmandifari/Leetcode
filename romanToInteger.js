function romantoInteger(s){
    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    for (i=0; i < s.length; i++){
        const cur = sym[s[i]];
        const next = sym[s[i+1]];

        if (cur < next){
            result += next - cur 
            i++
        } else {
            result += cur
        }
    }
    return result; 
}
console.log(romantoInteger("II")); 
console.log(romantoInteger("III")); 
console.log(romantoInteger("IV")); 
console.log(romantoInteger("VI")); 
console.log(romantoInteger("IX")); 
console.log(romantoInteger("XV")); 
console.log(romantoInteger("LVIII")); 
console.log(romantoInteger("MCMXCIV")); 
