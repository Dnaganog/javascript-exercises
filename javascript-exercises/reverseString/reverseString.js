const reverseString = function(string) {
    return string.split("").reverse().join("");
}

reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');

module.exports = reverseString
