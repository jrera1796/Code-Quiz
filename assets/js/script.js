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
  quizH2el.textContent = "This will be iterated somehow";
  quizH2el.className = "quiz-title";
  
  quizPopulatedDivEl.appendChild(quizH2el);

  //creating p element
  var quizPEl = document.createElement("p");
  quizPEl.textContent = "This will be another var";
  quizPEl.className = "quiz-prompt";
  quizPopulatedDivEl.appendChild(quizPEl);

  quizContainerParent.appendChild(quizPopulatedDivEl);
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
buttonEl.addEventListener("click", createQuizQuestionEl);
buttonEl.addEventListener("click", countdown);



//Question object array
// Key: Value needs to be stringified
var quizQuestion = {

  Question: "First question", 
  A: "",
  B: "",
  C: ""
  
};