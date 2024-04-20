function skippedLetters(letters, steps) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = '';

    for (let i = 0; i < letters.length; i++) {
        let index = alphabet.indexOf(letters[i]);
        if (index !== -1) {
            index = (index + steps) % 26;
            if (index < 0) {
                index = 26 + index; // Untuk mengakomodasi nilai negatif
            }
            result += alphabet[index];
        }
    }

    return result;
}

// Contoh penggunaan:
console.log(skippedLetters(['b', 'd'], -5)); // Output: e
