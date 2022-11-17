const removeFromArray = function(...args) {
    if (args.length == 0) {
        return "ERROR: no arguments given";
    } else if (args.length == 1) {
        return args[0];
    } else {
        for (let i = 1; i < args.length; i++) {
            for (let j = args[0].length - 1; j >=0; j--) {
                if (args[i] === args[0][j]) {
                    args[0].splice(j, 1);
                }
            }
        }
        return args[0];
    }
};

// Do not edit below this line
module.exports = removeFromArray;
