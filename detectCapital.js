function detectCapital(word) {
    return (
        word.toLowerCase() === word ||
        (word[0] === word[0].toUpperCase() &&
          (word.substr(1) === word.substr(1).toLowerCase() ||
            word.substr(1) === word.substr(1).toUpperCase()))
      );
}

// Pengujian
// console.log(detectCapital("usa"));   // Output: true
// console.log(detectCapital("Usa"));   // Output: true
// console.log(detectCapital("USA"));   // Output: true
// console.log(detectCapital("UsAaA")); // Output: false

var detectCapitalUse = function(word) {
    let match1 = 0,match2=0
      if(word.length===1) return true
      for(let i =0; i<word.length; i++){
          if(word[i]===word[i].toUpperCase()){
              match1++;
          }else if(word[i]===word[i].toLowerCase()){
              match2++;
          }
      }
    if(match1===1&&word[0]===word[0].toUpperCase()) return true
    if(match1===word.length) return true
    if(match2===word.length) return true
   
    return false
};

console.log(detectCapitalUse("usa"));   // Output: true
console.log(detectCapitalUse("Usa"));   // Output: true
console.log(detectCapitalUse("USA"));   // Output: true
console.log(detectCapitalUse("UsAaA")); // Output: false
