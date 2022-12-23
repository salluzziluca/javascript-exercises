const sumAll = function (from, to) {
    if (from < 0 || typeof from != "number" || typeof to != "number") {
        return "ERROR";
    }
    if (from > to) {
        let aux = from;
        from = to;
        to = aux;
    }
    let suma = 0;
    let anterior = 0;
    for (let i = from; i < to + 1; i++) {
        suma += i;
    }
    return suma;
};

// Do not edit below this line
module.exports = sumAll;
