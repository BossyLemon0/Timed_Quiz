var wordsHolder = document.querySelector(".wordsHolder");
var secondsleft = document.querySelector(".timer span");
var butt1 = document.querySelector("button"); //functionality wired someowhere else
var buttonGame = document.querySelector(".buttonGame");
var buttonScore = document.querySelector("#buttonS");
var buttonScore2 = document.querySelector("#lastscores")
var buttonreset = document.querySelector(".buttonReset");
var retry = document.querySelector(".retry")
var buttonHome = document.querySelector(".buttonHome");
var back = document.querySelector(".back")
//changes my orignal array to an array of objects
var arrayOfQuestions = [
    {
      question: "where does this tag come from? <script>",
      answer1: "Javascript",
      answer2: "HTML",
      answer3: "CSS",
      answer4: "Python",
      answer: "Javascript"
    },
    {
      question: " Which of the following function of String object combines the text of two strings and returns a new string?",
      answer1: "concat()",
      answer2: "Add()",
      answer3: "merge()",
      answer4: "append()",
      answer: "concat()"
  
    },
    {
      question: "Which of the following function of Array object removes the last element from an array and returns that element?",
      answer1: "join()",
      answer2: "map()",
      answer3: "push()",
      answer4: "pop()", 
      answer: "pop()"
  
    },
    {
      question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
      answer1: "spice()",
      answer2: "replace()",
      answer3: "split()",
      answer4: "slice()",   
      answer: "split()"
    },
    {
      question: "Which of the following type of variable is visible only within a function where it is defined?",
      answer1: "local variable",
      answer2: "global variable",
      answer3: "Both answers",
      answer4: "None are correct",
      answer: "local variable"
    }
  ]


//from here to line 131 is the creation of the local storage system. It stores the values from the html
//into variables, it takes the value from the form on submit stores it into a readable string and makes
//available on the page.


var scoreInput = document.querySelector("#initials");
var scoreForm = document.querySelector("#scoreForm");
var scoreList = document.querySelector("#scoreList");
var scoreSpan = document.querySelector("#Num");




var scoreArr=[];


//I think I need a prevent default here
function renderScores(){
   
scoreList.textContent="";

for (var i=0; i < scoreArr.length; i++){
    var scorePair = scoreArr[i];

    var li = document.createElement("li");
    li.textContent = scorePair;
    li.setAttribute("data-index",i);

    var erase = document.createElement("button");
    erase.textContent = "erase";

    li.appendChild(erase);
    scoreList.append(li);
    }
}

function Init(){
var storedScores = JSON.parse(localStorage.getItem("scoreArr"));

if(storedScores !== null){
    scoreArr = storedScores;
    }
    renderScores;
}

function storeScores(){
localStorage.setItem("scoreArr", JSON.stringify(scoreArr))
}

scoreForm.addEventListener("submit", function(event){
    event.preventDefault();

//find a way to attach the score along with the intials

    var initialText = scoreInput.value.trim();

    if(initialText===""){
        return;
    }

    scoreArr.push(initialText+":"+score);
    scoreInput.value="";

    storeScores();
    renderScores();
});

scoreList.addEventListener("click", function(event){
    var clack = event.target;

    if (clack.matches("button")===true){
        var index = clack.parentElement.getAttribute("data-index");
        scoreArr.splice(index,1);

        storeScores();
        renderScores();

    }
});

Init();




document.querySelector(".start").style.display = "grid";


buttonGame.addEventListener("click", start);



function start(){
    document.querySelector(".start").style.display = "none";
    document.querySelector(".game").style.display = "block";
    // resetvalue = false;
    secondsLeft+=40;
    setTime();
    score = 0;
}

function retry1(){
    document.querySelector(".Score").style.display = "none";
    document.querySelector(".game").style.display = "block";
    secondsLeft+=40;
    shuffle(arrayOfQuestions);
    setTime();
    score = 0;


}

function home(){
    document.querySelector(".Score").style.display = "none";
    document.querySelector(".start").style.display ="grid";
    document.querySelector(".scoreViewer").style.display = "none";
}




// butt1.addEventListener("click", reset);

// function reset() {
//     resetvalue = false;
//     newQuestions();
//         // console.log(resetvalue);
// }


//this function shuffles the array and outputs a new array

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
//   console.log(array);
    return array;
  }
  
  //DECLARING WHAT THE QUESTIONS/ANSWERS WILL BE
  var shuffledArray = shuffle(arrayOfQuestions)

  //this takes the divs and buttons and stores them into a variable
  var questionEle = document.querySelector(".questionContainer")
  var answer1Ele = document.querySelector(".answerOne")
  var answer2Ele = document.querySelector(".answerTwo")
  var answer3Ele = document.querySelector(".answerThree")
  var answer4Ele = document.querySelector(".answerFour")
  
  //THE ORDER IS DETERMINED EARLIER, SO WERE STARTING WITH INDEX 0
  var index = 0
  
  questionEle.textContent = shuffledArray[index].question
  answer1Ele.textContent = shuffledArray[index].answer1
  answer2Ele.textContent = shuffledArray[index].answer2
  answer3Ele.textContent = shuffledArray[index].answer3
  answer4Ele.textContent = shuffledArray[index].answer4
  
  
  var score = 0



  //this adds the value of getting a question right if the text within the button matches the key 
  function buttonOne(){
    if(answer1Ele.textContent === arrayOfQuestions[index].answer){
      console.log("correct")
      score += 1
    } else {
        secondsLeft-=10;
      console.log("wrong")
    }
    addIndexNumber()
  
  }
  
  function buttonTwo(){
    if(answer2Ele.textContent === arrayOfQuestions[index].answer){
      console.log("correct")
      score += 1
    } else {
        secondsLeft-=10;
      console.log("wrong")
    }
    addIndexNumber()
  }
  
  function buttonThree(){
    if(answer3Ele.textContent === arrayOfQuestions[index].answer){
      console.log("correct")
      score += 1
    } else {
        secondsLeft-=10;
      console.log("wrong")
    }
    addIndexNumber()
  }
  
  function buttonFour(){
    if(answer4Ele.textContent === arrayOfQuestions[index].answer){
      console.log("correct")
      score += 1
    } else {
        secondsLeft-=10;
      console.log("wrong")
    }
    addIndexNumber()
  }


  //this function adds one to the index so that the shuffled array can move along in sequence
  //the index is reset to 0 so that when played again a new item can be taken out of the array.
  // after reseting the timer as well, the code goes to the score menu throuch toscores().

  function addIndexNumber() {
    index += 1
    if (index <= shuffledArray.length - 1 ){
      questionEle.textContent = shuffledArray[index].question
      answer1Ele.textContent = shuffledArray[index].answer1
      answer2Ele.textContent = shuffledArray[index].answer2
      answer3Ele.textContent = shuffledArray[index].answer3
      answer4Ele.textContent = shuffledArray[index].answer4
    } else {
        index = 0;
        console.log(index);
        secondsLeft=0;
      
      toscores();
        
      //1. hold the newest score
      //2. get the list of scores from localstorage (USE .PUSH)
      //3. add newest score to the localstorage we got
      //4. set the new combined array to localstorage
    }
  }
  



    // var i = 0;
    // while(resetvalue == false && i<10){
    //     i++
    //         var newQuestions = questions[Math.floor(Math.random()*ammofquestions)];
    //         if(ammofquestions == 0){
    //             console.log("no more")
    //             wordsHolder.textContent = '';
    //             toscores();

    //         }
    //         else{
    //         ammofquestions--;
    //         console.log(ammofquestions);
    //         resetvalue = true;
    //         var charArray = newQuestions.split('');
    //         console.log(charArray);

    //         //trying divs for the length of each word
    //         // for(var o = 0; o<charArray.length;o++){
    //         //     var divs = document.createElement("div");
    //         //     divs.textContent = charArray[i];
    //         // }
    //         // wordsHolder.append(divs);
    //         wordsHolder.textContent = newQuestions;
            
    



//displays finishing page with results, navigation, and score saving
function toscores(){
    document.querySelector(".game").style.display = "none";
    document.querySelector(".Score").style.display = "block";
    console.log(score);
    scoreSpan.textContent = score;

}

function nameScore(){
    document.querySelector(".start").style.display = "none";
    document.querySelector(".Score").style.display = "none";
    document.querySelector(".scoreViewer").style.display = "grid";
}



//allows the game to flip between menus

// buttonGame.addEventListener("click", start);
buttonHome.addEventListener("click",home);
retry.addEventListener("click", retry1);
buttonScore.addEventListener("click", nameScore);
buttonScore2.addEventListener("click",nameScore);
back.addEventListener("click", home);


//adds the timer function

// Selects element by class
var timeEl = document.querySelector(".timer");

var secondsLeft = 0;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {


    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
      toscores();
      

    }else{
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
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


// I tried to create a filler for if people entered the score section without having a score entered yet
// var nope = document.querySelector(".nope");
// if (nope == 0){
//     var nop = document.createElement("p");
//     nop.textContent ="No scores yet";

//     nope.appendChild(nop);
// }
// else{
//     nope.textContent="";
// }