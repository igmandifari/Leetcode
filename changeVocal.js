function changeVocal(z) {
    let x = z.toLowerCase()
    let vocal = {
        "a": "1",
        "i": "2",
        "u": "3",
        "e": "4",
        "o": "5"
    };
    let result = "";

    for(let i=0; i<x.length; i++){
        if(vocal[x[i]]){
            result += vocal[x[i]]
        } else{
            result += x[i]
        }
    }
    return result
}

console.log(changeVocal("enigma camP"));
