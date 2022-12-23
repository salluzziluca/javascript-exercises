const palindromes = function (string) {
    let string2 = string.toLowerCase().replace(/[^a-z]/g, "");
    let string3 = string2.split("").reverse().join("");
    if (string2 === string3) {
        return true;
    }
    return false

};

// Do not edit below this line
module.exports = palindromes;
