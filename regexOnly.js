//RegEx: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

//The string.
var str = 'hello...';

//Look for any and only words with a-z chars.
function nonWords(str) {
  var words = new RegExp(/([a-zA-Z])/g);
  if (words.test(str)) {
    return string = 'var ' + str;
  } else {
    return str;
  }
}

console.log(nonWords(str));