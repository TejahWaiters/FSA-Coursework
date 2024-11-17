class Sentence {
    data;
    constructor(givenData){
        this.data = givenData
    }
    getWordCount(){}
    if (data) {
       let wordsArray = this.data.split(' ');
       return wordsArray.length;
       return 0;
    }
    
   getLetterCount(letter){
    this.if(!hasLetter(letter));
        return 0;
    }
   }




let givenData = prompt("Enter a sentence")


const mySentence = new Sentence(givenData);
console.log(mySentence.getWordCount());
console.log(mySentence.hasLetter("z"));


