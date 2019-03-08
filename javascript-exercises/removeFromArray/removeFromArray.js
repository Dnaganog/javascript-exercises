const removeFromArray = function(array, ...args) {
    args.forEach((argItem) => {
        if (array.includes(argItem)) {
            array.splice(array.indexOf(argItem), 1);
        }
    });
    return array;
}

module.exports = removeFromArray
