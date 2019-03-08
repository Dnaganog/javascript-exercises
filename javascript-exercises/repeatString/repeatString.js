const repeatString = function(string, number) {
    let total = string;   
    for (let i = 1; i < number; i++) {
        total += string;
        
    }
    if (number == 0) {
        total = "";
    }
    if (number < 0) {
        total = "ERROR";
    }
    return total;
    }

repeatString('hey', 3)
repeatString('hey', 10)
repeatString('hey', 1)
repeatString('hey', 0)
repeatString('hey', -1)

module.exports = repeatString
