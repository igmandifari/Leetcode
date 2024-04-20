function wordPattern(pattern, s) {
    const words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    const patternToWord = {};
    const seenWords = {};

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!patternToWord[char]) {
            if (seenWords[word]) {
                return false;
            }
            patternToWord[char] = word;
            seenWords[word] = true;
        } else if (patternToWord[char] !== word) {
            return false;
        }
    }

    return true;
}

console.log(wordPattern("abba", "dog cat cat fish")); 
console.log(wordPattern("abba", "dog cat cat dog")); 
console.log(wordPattern("aaaa", "dog dog dog dog")); 
