function isNumberString(str) {
    return /^[0-9]+$/.test(str);
}

function alternatingCaps(str) {
    let result = "";
    let upper = true;
    for (let ch of str) {
        result += upper ? ch.toUpperCase() : ch.toLowerCase();
        upper = !upper;
    }
    return result;
}

module.exports = { isNumberString, alternatingCaps };
