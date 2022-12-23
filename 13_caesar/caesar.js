const caesar = function (string, shift) {
    // works with negative shift


    let newString = "";
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            code = ((code - 65 + shift) % 26) + 65;
            if (code < 65) {
                code += 26;
            }
        } else if (code >= 97 && code <= 122) {
            code = ((code - 97 + shift) % 26) + 97;
            if (code < 97) {

                code += 26;
            }
        }
        newString += String.fromCharCode(code);
    }

    return newString;


};

// Do not edit below this line
module.exports = caesar;
