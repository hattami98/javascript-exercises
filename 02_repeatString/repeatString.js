const repeatString = function(string, num) {
    let repeatedStr = string;
    if(num === 0) return '';
    else if(num < 0) return 'ERROR';
    for(let i = 1; i < num; i++){
        repeatedStr+=string;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
