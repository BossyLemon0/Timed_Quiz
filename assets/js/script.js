var wordsHolder = document.querySelector(".wordsHolder");
var secondsleft = document.querySelector(".timer span");
var butt1 = document.querySelector("button"); //functionality wired someowhere else
var buttonGame = document.querySelector(".buttonGame");
var buttonScore = document.querySelector(".buttonScore");
var buttonreset = document.querySelector(".buttonReset");
var retry = document.querySelector(".retry")
var questions = ["javascript","html","css","querySelector","react","terminal","function","local strorage"]
var startingwords = null;
var startingtimetrigger = true;
var resetvalue = true;
var secondsleft = 10;
var ammofquestions = 10;




document.querySelector(".start").style.display = "block";






console.log(questions.length);

buttonGame.addEventListener("click", start);


function start(){
    document.querySelector(".start").style.display = "none";
    document.querySelector(".game").style.display = "block";
}
function retry1(){
document.querySelector(".Score").style.display = "none";
document.querySelector(".game").style.display = "block";
}



butt1.addEventListener("click", reset);

function reset() {
    resetvalue = false;
    newQuestions();
    
    // console.log(resetvalue);
}


function newQuestions() {

    var i = 0;
    while(resetvalue == false && i<10){
        i++
            var newQuestions = questions[Math.floor(Math.random()*ammofquestions)];
            if(ammofquestions == 0){
                console.log("no more")
                wordsHolder.textContent = '';
                toscores();

            }
            else{
            ammofquestions--;
            console.log(ammofquestions);
            resetvalue = true;
            var charArray = newQuestions.split('');
            console.log(charArray);

            //trying divs for the length of each word
            // for(var o = 0; o<charArray.length;o++){
            //     var divs = document.createElement("div");
            //     divs.textContent = charArray[i];
            // }
            // wordsHolder.append(divs);
            wordsHolder.textContent = newQuestions;
            }
    }

    
    console.log(newQuestions);
}

function toscores(){
    document.querySelector(".game").style.display = "none";
    document.querySelector(".Score").style.display = "block";
    if(ammofquestions == 0){
    ammofquestions += 10;
    }
}

// buttonGame.addEventListener("click", start);
// buttonGame.addEventListener("click", start);
retry.addEventListener("click", retry1);




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