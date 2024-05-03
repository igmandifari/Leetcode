function skippedLetters(letters, steps) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetIndex = {}; // Objek untuk menyimpan indeks huruf-huruf

    // Mengisi objek dengan indeks huruf-huruf dari alfabet
    for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
    }

    let result = '';

    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        let index = alphabetIndex[letter];

        if (index !== 'undefined' || '') {
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
