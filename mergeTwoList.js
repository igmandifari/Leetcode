function mergeTwoList(x,y){
    let result = "";
    result = x.concat(y)

    // let newResult = result.split(',').sort();
    let newResult = result.sort()
    
    return newResult
}

console.log(mergeTwoList([1,2,4],[1,3,4]));