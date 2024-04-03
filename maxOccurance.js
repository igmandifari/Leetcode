function maxOccurance(x, y) {
    for (let i = 0; i <= x.length - y.length; i++) {
        let count = 0;

        for (let j = 0; j < y.length; j++) {
            if (x[i + j] === y[j]) {
                count++;
            } else {
                break; 
            }
        }

        if (count === y.length) {
            return i; 
        }
    }

    return -1; 
}

console.log(maxOccurance("sadbutsad", "sad")); 
console.log(maxOccurance("sadbutsad", "but")); 
console.log(maxOccurance("sadbutsad", "xyz")); 
