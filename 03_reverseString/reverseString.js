const reverseString = function(str) {
    let reversedStr = '';
    for(let i = 1; i <= str.length; i++){
        reversedStr+=str.substr(-i, 1);
    }

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
