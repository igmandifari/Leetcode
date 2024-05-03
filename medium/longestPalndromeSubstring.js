function longestPalindrome (string) {
    let longestPalLength = 0;
    let longestPalLeft = 0;
    let longestPalRight = 0;

    var getLongestPalindrome = function (leftPosition, rightPosition) {
    
        while (
            leftPosition >= 0 &&
            rightPosition < string.length &&
            string[leftPosition] === string[rightPosition]
        ) {
           
            leftPosition--;
            rightPosition++;
        }

        
        if (rightPosition - leftPosition > longestPalLength) {
            longestPalLeft = leftPosition + 1;
            longestPalRight = rightPosition - 1;
            longestPalLength = longestPalRight - longestPalLeft + 1;
        }
    };

   
    for (let i = 0; i < string.length; i++) {
        
        getLongestPalindrome(i, i + 1);
        getLongestPalindrome(i, i);

    
        if ((string.length - i) * 2 < longestPalLength) {

            break;
        }
    }

    return string.slice(longestPalLeft, longestPalRight + 1);
};

console.log(longestPalindrome("cbbd"));