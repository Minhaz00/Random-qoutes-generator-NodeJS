const fs = require('fs');
const qoutes = {};

qoutes.allQoutes = () => {
    const fileContent = fs.readFileSync(`${__dirname}/qoutes.txt`, 'utf8');
    const arrayOfQoutes = fileContent.split(/\r?\n/);
    return arrayOfQoutes;
}

module.exports = qoutes;