const removeFromArray = function (array, ...args) {
    let newArray = [...array]
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < args.length; j++) {
            if (array[i] === args[j]) {
                newArray.splice(newArray.indexOf(array[i]), 1);
            }

        }

    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
