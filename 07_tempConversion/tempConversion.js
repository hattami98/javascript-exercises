const ftoc = function(fahrenheit) {
    let celsius = (fahrenheit - 32) / 9 * 5;
    return parseFloat(celsius.toFixed(1));
};

const ctof = function(celsius) {
    let fahrenheit = celsius / 5 * 9 + 32;
    return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
