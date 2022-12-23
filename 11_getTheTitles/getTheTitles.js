const getTheTitles = function (array) {
    let titulos = [];
    for (const book of array) {
        titulos.push(book.title);
    }
    return titulos;
};

// Do not edit below this line
module.exports = getTheTitles;
