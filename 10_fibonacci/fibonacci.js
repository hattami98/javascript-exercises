const fibonacci = function(max) {
    max = Number(max);
    const numbers = [1, 1];
    if(max < 0) return 'OOPS';
    for(let i = 2; i < max; i++){
        numbers[i] = numbers[i-1] + numbers[i-2];
    }
    return numbers[max-1];
};

// Do not edit below this line
module.exports = fibonacci;
