function changeCase(inputString) {
    // Melakukan perubahan casing
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        let c = inputString.charAt(i);
        if (c === c.toUpperCase()) {
            result += c.toLowerCase();
        } else if (c === c.toLowerCase()) {
            result += c.toUpperCase();
        } else {
            result += c;
        }
    }
    return result;
}

// Contoh pemanggilan fungsi dengan input dari log
const inputString = "Hello World!";
console.log(inputString);
console.log(changeCase(inputString));
