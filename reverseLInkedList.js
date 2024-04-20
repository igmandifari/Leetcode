function reverse(n){
    let result = []
    for(let i=n.length-1; i>=0; i--){
        result.push(n[i])
    }
    return result
}
console.log(reverse([1,2,3,4,5]));