function skippedNumber(y) {
    let x = "abcdefghijklmnopqrstuvwxyz";
    let hasil = x.split("");
    
    if (y < 0 || y >= hasil.length) {
        return "Invalid index";
    }
    
    hasil.splice(y, 1); // Menghapus huruf pada indeks y
    
    let hasilBaru = hasil.join('')
    return hasilBaru;
}

console.log(skippedNumber(0));
