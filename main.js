const inputText = document.getElementById('inputchar');
let checkWord = 'word';
let words;
document.addEventListener('keyup', function() {
    words = inputText.value;
    arrayWords = words.split('');
    arrayWordsSize = arrayWords.length - 1;


    if (arrayWords[arrayWordsSize] == " ") {
        console.log('yes');
        document.getElementById('inputchar').value = "";
        arrayCheckWord = checkWord.split('');
        let checkIndex = 0;
        if (arrayCheckWord.length == arrayWordsSize) {
            console.log('ooohhh');
            for (let i = 0;)


        } else {
            console.log('nooo');
        }


        checkIndex++;




    }




    // console.log(words);
    // console.log(arrayWords);
    // console.log(arrayWordsSize)
})