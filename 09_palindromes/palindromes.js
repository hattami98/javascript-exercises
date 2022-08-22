const palindromes = function (string) {
    const reverseString = function(str) {
        let reversedStr = '';
        for(let i = 1; i <= str.length; i++){
            reversedStr+=str.substr(-i, 1);
        }
    
        return reversedStr;
    };
    const removeNonAlphabet = function(str) {
        let alphabetOnly = '';
        for(let i = 0; i < str.length; i++){
            const character = str.substr(i, 1);
            if(
                character === 'a' ||
                character === 'b' ||
                character === 'c' ||
                character === 'd' ||
                character === 'e' ||
                character === 'f' ||
                character === 'g' ||
                character === 'h' ||
                character === 'i' ||
                character === 'j' ||
                character === 'k' ||
                character === 'l' ||
                character === 'm' ||
                character === 'n' ||
                character === 'o' ||
                character === 'p' ||
                character === 'q' ||
                character === 'r' ||
                character === 's' ||
                character === 't' ||
                character === 'u' ||
                character === 'v' ||
                character === 'w' ||
                character === 'x' ||
                character === 'y' ||
                character === 'z' 
                ) {alphabetOnly+=character;}
        }

        return alphabetOnly;
    }
    let testString = removeNonAlphabet(string.toLowerCase());
    let reversedString = reverseString(testString);
    if(testString === reversedString) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
