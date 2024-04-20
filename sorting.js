function bubbleSort(x) {
    let arr = x.split('');
    let n = arr.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - i; j++){
            if(arr[j] > arr[j+1]){
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


let m = "zxcvbnmasdghjlqwertyuiop";
let n = m.split('').sort().join('');
console.log(n);
