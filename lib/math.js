
//amth object - module scaffolding
const math = {}

math.getRandomNumber = getRandomNumber = (max, min) => {
    const maximum = max;
    const minimum = min;
    if (typeof maximum !== 'number' || typeof minimum !== 'number')
        return 0;
    else
        return Math.floor(Math.random() * (maximum - minimum + 1) + min);
}

module.exports = math;