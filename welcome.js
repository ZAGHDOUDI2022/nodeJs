const fs = require('fs');
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read and console log data from welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});