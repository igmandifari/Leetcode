function camelCase(x){
    let camel = x.length;
    
    let count = 1;
    for(let i=0; i<camel; i++){
        if(x[i] >= 'A' && x[i]<='Z'){
            count++
        } 
    }
    return count
}

console.log(camelCase("saveChangesInTheEditor"));