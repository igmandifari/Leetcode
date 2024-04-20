function plusOne(x){
    let result = parseInt(x.join(''))+1
    let newArr = result.toString().split('')
    return newArr
}

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));

function plusOne2(digits) {
    const n = digits.length;
    
    // Start from the least significant digit
    for (let i = n - 1; i >= 0; i--) {
        // Increment the digit by 1
        digits[i]++;
        
        // If the digit is less than 10, no need to carry over, return the result
        if (digits[i] < 10) {
            return digits;
        } else {
            // If the digit becomes 10, set it to 0 and carry over 1 to the next significant digit
            digits[i] = 0;
        }
    }
    
    // If there's still a carry after processing all digits, add one more digit to the array
    return [1, ...digits];
}

// Test cases
console.log(plusOne2([1, 2, 3])); 
console.log(plusOne2([4, 3, 2, 1]));
