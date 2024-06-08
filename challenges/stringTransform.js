function reverseString(str) {
    if (!str.length) return str;
    return reverseString(str.slice(1)).concat(str[0]);
}

function getAsciiCode(str) {
    if (str.length === 0) return '';
    if (str.length === 1) return str.charCodeAt(0);
    return str.charCodeAt(0) + ' ' + getAsciiCode(str.slice(1));
}

function stringTransform(str) {
    const stringLength = str.length;
    if (stringLength % 3 === 0 && stringLength % 5 === 0) {
        const reversedString = reverseString(str);
        return `${reversedString} \n ${getAsciiCode(reversedString)}`;
    }
    if (stringLength % 3 === 0) return reverseString(str);
    if (stringLength % 5 === 0) return getAsciiCode(str);
    return str;
}

console.log(stringTransform('Hamburger')); // Output: regrubmaH
console.log(stringTransform('Pizza')); // Output: 80 105 122 122 97
console.log(stringTransform('Chocolate Chip Cookie')); // Output: eikooC pihC etalocohC
