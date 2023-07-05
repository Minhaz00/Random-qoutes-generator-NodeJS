//Dependencies
const mathLib = require('./lib/math.js');
const qoutesLib = require('./lib/qoutes');

// app object - module scaffolding
const app = {}

app.config = {
    timeInterval: 2000
}

app.printQoute = printQoute = () => {
    const allQoutes = qoutesLib.allQoutes();
    const randomNumber = mathLib.getRandomNumber(1, allQoutes.length);
    const selectedQoute = allQoutes[randomNumber - 1];
    console.log(selectedQoute);
}

app.infiniteCall = () => {
    setInterval(app.printQoute, app.config.timeInterval);
}

app.infiniteCall();

