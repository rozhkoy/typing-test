const inputText = document.getElementById('inputchar');
//add enter field 

let checkWord = ['word', 'time', 'match'];
// check word
let words;
let checkIndex = 0
let indexWord = 0;
document.addEventListener('keyup', returEnteredWord, false);


function returEnteredWord() {
    words = inputText.value;
    //return value input
    arrayWords = words.split('');
    //divide up value on array
    arrayWordsSize = arrayWords.length - 1;
    //size array
    if (arrayWords[arrayWordsSize] == " ") {
        compareWord();
    }
    return arrayWords, arrayWordsSize;
}


function preparationWord() {
    if (checkWord[indexWord] == undefined) {
        console.log('ended test');
    } else {
        arrayCheckWord = checkWord[indexWord].split('');
    }

}

function compareWord() {
    preparationWord();
    indexWord++;
    document.getElementById('inputchar').value = "";
    if (arrayCheckWord.length == arrayWordsSize) {
        checkIndex = 0;
        for (let i = 0; i <= arrayCheckWord.length; i++) {
            if (arrayCheckWord[checkIndex] == arrayWords[checkIndex]) {
                checkIndex++;
            }
        }
        if (checkIndex == arrayCheckWord.length) {
            console.log('ok');
        } else {
            console.log('no ok');
        }
    } else {
        console.log('no match');
    }
}