const sumAll = function(a, b) {
    if(typeof(a) != 'number' || typeof(b) != 'number' || a < 0 || b < 0) return "ERROR";
    const range = Math.abs(a-b)+1;
    return (a+b)*range/2;
};

// Do not edit below this line
module.exports = sumAll;
