function LongestPrefix(x){
    if(x.length === 0) return ""

    let prefix = x[0];
    for(let i=1; i<x.length; i++){
        for(let j=0; i<prefix.length; j++){
            if(x[i][j]!==prefix[j]){
                prefix = prefix.slice(0,j)
                break
            }
        }
        if (prefix==="") return ""
    }
    return prefix
}

console.log(LongestPrefix(["flower","flow","flight"]));
// let x = ["flower","flow","flight"]
// console.log(x[1]);