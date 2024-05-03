function kotakKosong(x) {
    let result = "";
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if(i===0 || i=== x-1 || j===0 || j===x-1){
                result += "*"
            } else{
                result += " "
            }
        }
        result += "\n"; 
    }
    return result;
}

console.log(kotakKosong(10));
