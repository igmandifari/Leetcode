function skippedNumber(y) {
    let x = "abcdefghijklmnopqrstuvwxyz";
    let hasil = x.split("");
    
    if (y < 0 || y >= hasil.length) {
        return "Invalid index";
    }
    
    hasil.splice(y, 1); // Menghapus huruf pada indeks y
    
    return hasil;
}

console.log(skippedNumber(2));
