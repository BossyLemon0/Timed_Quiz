var wordsHolder = document.querySelector(".wordsHolder");
var secondsleft = document.querySelector(".timer span");
var butt = document.querySelector("button");
var words = ["javascript","html","css","querySelector","react","terminal","function","local strorage","DOM","conditionals","Arrays",
"objects","scope","console.log","media query","flex","pseudo code","typography","pseudo classes","pseudo elements","wireframing",
"selector","variables","git","attributes","box-model","eventlistener","symantic tags","loops","this"]
var startingwords = null;
var startingtimetrigger = true;
var resetvalue = true;
var secondsleft = 10;
var ammofwords = 30;

console.log(words.length);


butt.addEventListener("click", reset);

function reset() {
    resetvalue = false;
    newWords();
    
    // console.log(resetvalue);
}


function newWords() {

    var i = 0
    while(resetvalue == false && i<30){
        i++
            var newWords = words[Math.floor(Math.random()*ammofwords)];
            if(ammofwords == 0){
                console.log("no more")
            }
            else{
            ammofwords--;
            console.log(ammofwords);
            resetvalue = true;
            var charArray = newWords.split('');
            console.log(charArray);

            //trying divs for the length of each word
            // for(var o = 0; o<charArray.length;o++){
            //     var divs = document.createElement("div");
            //     divs.textContent = charArray[i];
            // }
            // wordsHolder.append(divs);
            wordsHolder.textContent = newWords;
            }
    }

    
    console.log(newWords);
}
    // pull a random word at start
    //that words length is turned into a line of hidden dashes
    //when the person clicks on the empty void they can type a letter
    //if wrong the timer loses a certain ammount of time
    // 
    // wordsHolder.textContent = "59";


// function timer {
    
// }

// if(resetvalue == false){
// for (var i = 0; i < 30; i++){
//     var pew = words[Math.floor(Math.random()*ammofwords)];
//     ammofwords--;
//     // console.log(pew);
//     resetvalue = true;

//     }   
// }