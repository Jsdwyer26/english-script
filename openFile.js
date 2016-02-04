//Opens and reads a file. https://nodejs.org/api/fs.html.
//Takes in a second param, 'r', which gives the ability to READ it's contents.
fs = require('fs');
var fileName = '/etc/hosts';

function printFile(err, file) {
  console.log(file);
}
fs.readFile(fileName, 'utf8', printFile);