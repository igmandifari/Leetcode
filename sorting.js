function bubbleSort(x) {
    let arr = x.split('');
    let n = arr.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - i; j++){
            if(arr[j] > arr[j+1]){ // ubah2 tanda "<" jika ingin dari terbsesar atau terkecil a-z / z-a
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr.join('');
}

console.log(bubbleSort("abcdefghijklmnopqrstuvwqyz"));
console.log(bubbleSort("zxcvbnmasdfghjklqwertyuiop"));


let m = "zxcvbnmasdfghjklqwertyuiop";
let n = m.split('').sort().join('');
console.log(n);
