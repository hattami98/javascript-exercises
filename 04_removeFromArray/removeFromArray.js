const removeFromArray = function(array, ...theArgs) {
    let filteredArray = [];
    for(const arrElement of array){
        let notSame = true;
        for(const argElement of theArgs){
            if(arrElement === argElement) notSame = false;
        }
        if(notSame) filteredArray.push(arrElement);
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
