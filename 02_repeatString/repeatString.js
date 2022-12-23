const repeatString = function (palabra, num) {
    if (num < 0) {
        return "ERROR";
    }
    let resultado = "";
    for (let i = 0; i < num; i++) {
        resultado += palabra;
    }
    return resultado;
};

// Do not edit below this line
module.exports = repeatString;
