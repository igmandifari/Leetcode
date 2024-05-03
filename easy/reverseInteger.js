function ReverseInteger(x){
    let hasil = 0;
    while(x!=0){
    hasil = hasil*10 + x%10
        x = (x-(x%10))/10
    }
    return hasil
}

console.log(ReverseInteger(123));
console.log(ReverseInteger(-123));
console.log(ReverseInteger(120));
