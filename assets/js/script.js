var timerEl = document.getElementById('countdown');
var buttonEl = document.getElementById("start-btn");
var hsViewScore = document.getElementById("hs-stats");
var hsButtonEl = document.getElementById("high-score");

//This is the parent that will hold my quiz childs
var quizContainerParent = document.getElementById("quiz-content") 
 

//Starts quiz and removes welcome screen element
var createQuizQuestionEl = function(){
 
  //Creating div element
  var quizPopulatedDivEl = document.createElement("div");
  quizPopulatedDivEl.className = "quiz-container";
  
  //creating h2 element
  var quizH2el = document.createElement("h2");
  quizH2el.textContent = quizQuestion[0].Topic;
  quizH2el.className = "quiz-title";
  
  quizPopulatedDivEl.appendChild(quizH2el);

  //creating h3 element
  var quizH3El = document.createElement("h3");
  quizH3El.textContent = quizQuestion[0].Question;
  quizH3El.className = "quiz-prompt";
  quizPopulatedDivEl.appendChild(quizH3El);

  //creating radio container
  var quizButtonHolderEl = document.createElement("span")
  quizButtonHolderEl.className = "button-holder";
  quizPopulatedDivEl.appendChild(quizButtonHolderEl);

  //creating radio buttons
  var quizButtonAEl = document.createElement("button");
  quizButtonAEl.type ="radio"
  quizButtonAEl.className = "quiz-radio-btn";
  quizButtonAEl.textContent = quizQuestion[0].A;
  quizButtonHolderEl.appendChild(quizButtonAEl);

  var quizButtonBEl = document.createElement("button");
  quizButtonBEl.type ="radio"
  quizButtonBEl.className = "quiz-radio-btn";
  quizButtonBEl.textContent = quizQuestion[0].B;
  quizButtonHolderEl.appendChild(quizButtonBEl);

  var quizButtonCEl = document.createElement("button");
  quizButtonCEl.type ="radio"
  quizButtonCEl.className = "quiz-radio-btn";
  quizButtonCEl.textContent = quizQuestion[0].C;
  quizButtonHolderEl.appendChild(quizButtonCEl);

  var quizButtonDEl = document.createElement("button");
  quizButtonDEl.type ="radio"
  quizButtonDEl.className = "quiz-radio-btn";
  quizButtonDEl.textContent = quizQuestion[0].D;
  quizButtonHolderEl.appendChild(quizButtonDEl);





  quizContainerParent.prepend(quizPopulatedDivEl);
};

//Create or add to code above that removes and cycles through questions
//like if 

//Countdown function
function countdown() {
  var timeLeft = 60;
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




//Question object array
// Key: Value needs to be stringified
var quizQuestion = [

{
  Topic: "JavaScript",
  Question: "Question 1", 
  A: "Answer 1",
  B: "Answer 2",
  C: "Answer 3",
  D: "Answer 3"
},

{
  Topic: "Second question", 
  A: "An1",
  B: "An2",
  C: "An3",
  D: "An4"
}]

