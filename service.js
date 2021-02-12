const { add } = require("./add");
const sub = require("./sub");
const combine = (a, b) => {
    return add(a, b) * 10;
}

const combine1 = (a, b) => {
    return sub(a, b) * 10;
}

module.exports = {
    combine, combine1
}
