const sumAll = function(arg1, arg2) {
    if (arg1 >= 0 && arg2 >= 0 && Number.isInteger(arg1) && Number.isInteger(arg2) ){
        let total = 0;
        let lesser = 0;
        let greater = 0;
        (arg1 < arg2) ? (lesser = arg1, greater = arg2) : 
            (greater = arg1, lesser = arg2);
        for (let index = lesser; index <= greater; index++) {
             total += index;
        }  
        return total;
    } else {
        return "ERROR";
    }
}

module.exports = sumAll
