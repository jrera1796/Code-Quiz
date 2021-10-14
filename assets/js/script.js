var timerEl = document.getElementById('countdown');
var buttonEl = document.getElementById("start-btn");

var hsViewScore = document.getElementById("hs-stats");
var hsButtonEl = document.getElementById("high-score");
var questionNum = 0;
var timeLeft = 200;
var selectButton = document.getElementById("quiz-radio-btn");

//When a question is answered correctly/incorrectly check and save answer and delete 


//This is the parent that will hold my quiz childs
var quizContainerParent = document.getElementById("quiz-content") 

//Starts quiz and removes welcome screen element
var createQuizQuestionEl = function(){
 
  //Creating div element
  var quizPopulatedDivEl = document.createElement("div");
  quizPopulatedDivEl.className = "quiz-container";
  
  //creating h2 element
  var quizH2el = document.createElement("h2");
  quizH2el.textContent = quizQuestion[questionNum].Topic;
  quizH2el.className = "quiz-title";
  
  quizPopulatedDivEl.appendChild(quizH2el);

  //creating h3 element
  var quizH3El = document.createElement("h3");
  quizH3El.textContent = quizQuestion[questionNum].Question;
  quizH3El.className = "quiz-prompt";
  quizPopulatedDivEl.appendChild(quizH3El);

  //creating radio container
  var quizButtonHolderEl = document.createElement("span")
  quizButtonHolderEl.className = "button-holder";
  quizPopulatedDivEl.appendChild(quizButtonHolderEl);

  //creating radio buttons
  var quizButtonAEl = document.createElement("button");
  quizButtonAEl.type ="submit"
  quizButtonAEl.id = "quiz-radio-btn";
  quizButtonAEl.className = "quiz-radio-btn";
  quizButtonAEl.textContent = quizQuestion[questionNum].A;
  quizButtonHolderEl.appendChild(quizButtonAEl);

  var quizButtonBEl = document.createElement("button");
  quizButtonBEl.type ="submit"
  quizButtonBEl.id = "quiz-radio-btn";
  quizButtonBEl.className = "quiz-radio-btn";
  quizButtonBEl.textContent = quizQuestion[questionNum].B;
  quizButtonHolderEl.appendChild(quizButtonBEl);

  var quizButtonCEl = document.createElement("button");
  quizButtonCEl.type ="submit"
  quizButtonCEl.id = "quiz-radio-btn";
  quizButtonCEl.className = "quiz-radio-btn";
  quizButtonCEl.setAttribute('onclick', 'checkBtn()');
  quizButtonCEl.textContent = quizQuestion[questionNum].C;
  quizButtonHolderEl.appendChild(quizButtonCEl);

  var quizButtonDEl = document.createElement("button");
  quizButtonDEl.type ="submit"
  quizButtonDEl.id = "quiz-radio-btn";
  quizButtonDEl.className = "quiz-radio-btn";
  quizButtonDEl.setAttribute('onclick', 'checkBtn()');
  quizButtonDEl.textContent = quizQuestion[questionNum].D;
  quizButtonHolderEl.appendChild(quizButtonDEl);

  quizContainerParent.prepend(quizPopulatedDivEl);
  questionNum++;

  return quizButtonDEl;
  
   
    // selectButton.addEventListener("click", console.log("yee"));
};

//Create or add to code above that removes and cycles through questions
//like if 

//Countdown function
function countdown() {
  
  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft;

    if(timeLeft <= 0){
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
    timeLeft--;
   }, 1000);
  };

//Removes quiz welcome screen and starts quiz
var quizBegin = function(){
  var removeWelcome=document.getElementById("welcomeDiv")
  removeWelcome.remove();

  var removeStartBtn = document.getElementById("start-btn")
  removeStartBtn.remove();
}

//High score visibilty handler
var hsHandler = function(){
  if (hsViewScore.style.display === "none"){
    hsViewScore.style.display = "block";
  }
  else {
    hsViewScore.style.display = "none";
  }
};

//High Score button listener
hsButtonEl.addEventListener("click", hsHandler);
  
//Only run once quiz is started
buttonEl.addEventListener("click", countdown);
buttonEl.addEventListener("click", quizBegin);
buttonEl.addEventListener("click", createQuizQuestionEl);

var checkBtn = function(){

if(selectButton == quizQuestion.Answer){
  console.log("Correct");
}
else{
  console.log("Incorrect");
  }
};

//Question object array
var quizQuestion = [

{
  Topic: "JavaScript",
  Question: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?", 
  A: "anchor()",
  B: "big()",
  C: "blink()",
  D: "bold()",
  Answer: "bold()"
},

{
  Topic: "JavaScript",
  Question: "Which of the following function of Array object removes the first element from an array and returns that element?", 
  A: "reverse()",
  B: "shift()",
  C: "slice()",
  D: "some()",
  Answer: "B"
}];

