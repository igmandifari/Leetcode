function assignCookies(g, s) {
    let Baru = [];
    for(let i=0; i<g.length; i++){
        for(let j=0; j<s.length; j++){
            if(g[i]===s[j]){
                Baru.push(s[j])
                s.splice(j,1)
                break
            }
        }
    }
    return Baru.length
}

console.log(assignCookies([1,2,3,4], [1,2,3,4]));
