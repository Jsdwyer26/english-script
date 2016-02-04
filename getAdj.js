var natural = require('natural'),
    pos = require('pos');

var aLittleFable = "‘Alas,' said the mouse, 'the whole world is growing smaller every day. At the beginning it was so big that I was afraid, I kept running and running, and I was glad when I saw walls far away to the right and left, but these long walls have narrowed so quickly that I am in the last chamber already, and there in the corner stands the trap that I must run into.’ 'You only need to change your direction,' said the cat, and ate it up.";   

var pos = require('pos');
//Pass in story here.
var words = new pos.Lexer().lex(aLittleFable);
var tagger = new pos.Tagger();
var taggedWords = tagger.tag(words);
var checkedText = [];

for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    word = taggedWord[0];
    tag = taggedWord[1];
    //Tagging nouns, setting to variables.
    /*if(tag == 'NN' || tag == 'NNP' || tag == 'NNPS') {
      word = 'var = ' + word + ';'; 
    }
    //Tagging verbs, setting to functions.
    if(tag == 'VB' || tag == 'VBD' || tag == 'VBG' || tag == 'VBN' || tag == 'VBP' || tag == 'VBZ') {
      word = 'function ' + word + '() {};';   
    }*/
    if(tag == 'JJ'|| tag == 'JJR'|| tag == 'JJS'  ){
      checkedText.push([word, tag]);
  }
}
console.log(checkedText);
/*
JJ Adjective                big
JJR Adj., comparative       bigger
JJS Adj., superlative       biggest

*/