function clibingStart(n){
    if(n<2) return n

    return clibingStart(n-1)+clibingStart(n-2)
}

console.log(clibingStart(10));

function clibingStart2(n){
    if (n < 2) return 1 

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
}

console.log(clibingStart2(2));