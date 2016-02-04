var natural = require('natural'),
    pos = require('pos');

var theLittleEngine = "A little railroad engine was employed about a station yard for such work as it was built for, pulling a few cars on and off the switches. One morning it was waiting for the next call when a long train of freight-cars asked a large engine in the roundhouse to take it over the hill. 'I can't; that is too much a pull for me', said the great engine built for hard work. Then the train asked another engine, and another, only to hear excuses and be refused. In desperation, the train asked the little switch engine to draw it up the grade and down on the other side. 'I think I can', puffed the little locomotive, and put itself in front of the great heavy train. As it went on the little engine kept bravely puffing faster and faster, 'I think I can, I think I can, I think I can.' As it neared the top of the grade, which had so discouraged the larger engines, it went more slowly. However, it still kept saying, 'I—think—I—can, I—think—I—can.' It reached the top by drawing on bravery and then went on down the grade, congratulating itself by saying, 'I thought I could, I thought I could.'";

var aLittleFable = "‘Alas,' said the mouse, 'the whole world is growing smaller every day. At the beginning it was so big that I was afraid, I kept running and running, and I was glad when I saw walls far away to the right and left, but these long walls have narrowed so quickly that I am in the last chamber already, and there in the corner stands the trap that I must run into.’ 'You only need to change your direction,' said the cat, and ate it up.";


var lp5 = "As each day passed I would learn, in our talk, something about the little prince's planet, his departure from it, his journey. The information would come very slowly, as it might chance to fall from his thoughts. It was in this way that I heard, on the third day, about the catastrophe of the baobabs. This time, once more, I had the sheep to thank for it. For the little prince asked me abruptly--as if seized by a grave doubt--'It is true, isn't it, that sheep eat little bushes?'";
 
 var lp8 = "The shrub soon stopped growing, and began to get ready to produce a flower. The little prince, who was present at the first appearance of a huge bud, felt at once that some sort of miraculous apparition must emerge from it. But the flower was not satisfied to complete the preparations for her beauty in the shelter of her green chamber. She chose her colors with the greatest care. She dressed herself slowly. She adjusted her petals one by one. She did not wish to go out into the world all rumpled, like the field poppies. It was only in the full radiance of her beauty that she wished to appear. Oh, yes! She was a coquettish creature! And her mysterious adornment lasted for days and days.";

 var lp10 = "He found himself in the neighborhood of the asteroids 325, 326, 327, 328, 329, and 330. He began, therefore, by visiting them, in order to add to his knowledge. The first of them was inhabited by a king. Clad in royal purple and ermine, he was seated upon a throne which was at the same time both simple and majestic. 'Ah! Here is a subject, exclaimed the king, when he saw the little prince coming. And the little prince asked himself: 'How could he recognize me when he had never seen me before?' He did not know how the world is simplified for kings. To them, all men are subjects. 'Approach, so that I may see you better,' said the king, who felt consumingly proud of being at last a king over somebody.";

//I. Tokenize if necessary. 
function tokenize(sentence) {
    tokenizer = new natural.WordPunctTokenizer();
    return toAdd = tokenizer.tokenize(sentence);
};


//POS.
var pos = require('pos');
//Pass in story here.
var words = new pos.Lexer().lex(theLittleEngine);
var tagger = new pos.Tagger();
var taggedWords = tagger.tag(words);

//Globals for varibles passed through POS iteration.
var word;
var tag;
var checkedText = [];

//POS tagging.
function checkPOS(word, tag) {
    //Tagging nouns, setting to variables.
    if(tag == 'NN' || tag == 'NNP' || tag == 'NNPS' || tag == 'PP$' || tag == 'PRP') {
      word = 'var = ' + word + ';'; 
    }
    //Tagging verbs, setting to functions.
    if(tag == 'VB' || tag == 'VBD' || tag == 'VBG' || tag == 'VBN' || tag == 'VBP' || tag == 'VBZ') {
      word = '  function ' + word + '() {};';
    }
/*
    }
    //Tagging predeterminers and conjuctions for loops...'while' for now.
    if(tag == 'PDT' || tag == 'CC' ) {
      word = 'while( ' + word + ') {};';
    }
    //Taging modal verbs for conditionals.
    //https://en.wikipedia.org/wiki/English_modal_verbs 
    if(tag == 'MD') {
      word = 'for(' + word + ') {};';
*/ 
};

for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    word = taggedWord[0];
    tag = taggedWord[1];
    //Tagging nouns, setting to variables.
    if(tag == 'NN' || tag == 'NNP' || tag == 'NNPS') {
      word = 'var = ' + word + ';'; 
    }
    //Tagging verbs, setting to functions.
    if(tag == 'VB' || tag == 'VBD' || tag == 'VBG' || tag == 'VBN' || tag == 'VBP' || tag == 'VBZ') {
      word = 'function ' + word + '() {};';   
    }

/*
    //Tokenizing.
    var tokenizedStory = [];
    tokenizedStory.push(tokenize(word));
;*/    
    checkedText.push(word);


    console.log(word + " /" + tag);
}

/*console.log(checkedText.join(" "));

console.log(lp5);*/


/* 
NOUNS 
NN Noun, sing. or mass      dog
NNP Proper noun, sing.      Edinburgh
NNPS Proper noun, plural    Smiths
NNS Noun, plural            dogs
PP$ Possessive pronoun      my,one�s
PRP Personal pronoun         I,you,she

VERBS
VB verb, base form          eat
VBD verb, past tense        ate
VBG verb, gerund            eating
VBN verb, past part         eaten
VBP Verb, present           eat
VBZ Verb, present           eats

CONDITIONALS/LOOPS
PDT Predeterminer           all, both
CC Coord Conjuncn           and,but,or

ITERATIONS(?)
MD Modal                    can,should

*/
