function moveZeroes(x) {
    let nonZeroIndex = 0; // Indeks untuk menyimpan angka non-nol
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== 0) {
            // Jika elemen saat ini bukan nol, geser ke depan dan perbarui nonZeroIndex
            x[nonZeroIndex++] = x[i];
        }
    }
    // Isi sisanya dengan nol
    for (let i = nonZeroIndex; i < x.length; i++) {
        x[i] = 0;
    }
    return x;
}

// Contoh penggunaan
console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
