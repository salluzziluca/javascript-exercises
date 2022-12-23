const leapYears = function (año) {
    if (año % 100 == 0) {
        if (año % 400 == 0) {
            return true;
        }
        return false;
    } else if (año % 4 == 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
