var timerEl = document.getElementById('countdown');
var buttonEl = document.getElementById("start-btn");
var hsListEl = document.getElementById("hs-save");
var hsViewScore = document.getElementById("hs-stats");
var hsButtonEl = document.getElementById("high-score");
var hsClearButton = document.getElementById("clear-btn");
var questionNum = 0;
var timeLeft = 100;


var hsScoreKeep = 0;
var hsSavedScore = JSON.parse(localStorage.getItem('userSave')) || [];
var userInitials;

//This is the parent that will hold my quiz childs
var quizContainerParent = document.getElementById("quiz-content") 

//Starts quiz and removes welcome screen element
var createQuizQuestionEl = function(){

  if(questionNum >= quizQuestion.length){
    //Display score function
    userInitials = window.prompt("");
    saveHS();
    timeLeft = 0;
    questionNum = 0;
    hsScoreKeep = 0;
    quizBegin();
  }
  else{

  //Creating div element
  var quizPopulatedDivEl = document.createElement("div");
  quizPopulatedDivEl.id = "quiz-container";
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
  quizButtonAEl.id = "A";
  quizButtonAEl.className = "quiz-radio-btn";
  quizButtonAEl.textContent = quizQuestion[questionNum].A;
  quizButtonHolderEl.appendChild(quizButtonAEl);

  var quizButtonBEl = document.createElement("button");
  quizButtonBEl.type ="submit"
  quizButtonBEl.id = "B";
  quizButtonBEl.className = "quiz-radio-btn";
  quizButtonBEl.textContent = quizQuestion[questionNum].B;
  quizButtonHolderEl.appendChild(quizButtonBEl);

  var quizButtonCEl = document.createElement("button");
  quizButtonCEl.type ="submit"
  quizButtonCEl.id = "C";
  quizButtonCEl.className = "quiz-radio-btn";
  quizButtonCEl.textContent = quizQuestion[questionNum].C;
  quizButtonHolderEl.appendChild(quizButtonCEl);

  var quizButtonDEl = document.createElement("button");
  quizButtonDEl.type ="submit"
  quizButtonDEl.id = "D";
  quizButtonDEl.className = "quiz-radio-btn";
  quizButtonDEl.textContent = quizQuestion[questionNum].D;
  quizButtonHolderEl.appendChild(quizButtonDEl);

  quizContainerParent.prepend(quizPopulatedDivEl);

  //button listeners/answer holder
  var answerHolder = "";

  selectButtonA = document.getElementById("A").onclick = function(){
    answerHolder = "A";
    checkAnswer();
  };
  selectButtonB = document.getElementById("B").onclick = function(){
    answerHolder = "B";
    checkAnswer();
  };
  selectButtonC = document.getElementById("C").onclick = function(){
    answerHolder = "C";
    checkAnswer();
  };
  selectButtonD = document.getElementById("D").onclick = function(){
    answerHolder = "D";
    checkAnswer();
  };

  //Answer check
  checkAnswer = function(){
    
if(answerHolder == quizQuestion[questionNum].Answer){
  hsScoreKeep = hsScoreKeep + 5;
  console.log("This answer is correct!" + "Current Score " + hsScoreKeep);
  removeReplace();
}
else{
  console.log("This answer is wrong");
  timeLeft = timeLeft - 10;
  removeReplace();
}
}
}
};

//Removes quiz welcome screen and starts quiz
var quizBegin = function(){

  var removeWelcome = document.getElementById("welcomeDiv")
  var removeStartBtn = document.getElementById("start-btn")

  if (removeWelcome.style.display === "block"){
  removeWelcome.style.display = "none";
  removeStartBtn.style.display = "none";
  }
  else{
    removeWelcome.style.display = "block"
    removeStartBtn.style.display = "block"
  }
  
};

//Removes and replaces quiz container elements
var removeReplace = function(){
  
  if(questionNum < quizQuestion.length){
    questionNum++;
    document.getElementById("quiz-container").remove();
    createQuizQuestionEl();
  }
  else{
    console.log("Thanks for Playing")
    document.getElementById("quiz-container").remove();

  }
};

//Populates High Score HTML element from local storage
function getScore(){

  for(var i = 0; i < hsSavedScore.length; i++) {
  
    var hsList = document.getElementById("hs-list");
    
    var hsSavedName = document.createElement("li");
    hsSavedName.className = "hs-save";
    hsSavedName.id = "hs-save";
    hsSavedName.textContent = hsSavedScore[i].Initials;
  
    var hsSavedScoreEl = document.createElement("p");
    hsSavedScoreEl.textContent = hsSavedScore[i].Score;
    hsSavedName.appendChild(hsSavedScoreEl);
    hsList.appendChild(hsSavedName);
  }
  };

//Saves high score into visible HTML elements and local storage
function saveHS(){

  var hsList = document.getElementById("hs-list");
  
  var hsSavedName = document.createElement("li");
  hsSavedName.className = "hs-save";
  hsSavedName.id = "hs-save";
  hsSavedName.textContent = userInitials;

  var hsSavedScoreEl = document.createElement("p");
  hsSavedScoreEl.textContent = (hsScoreKeep);
  hsSavedName.appendChild(hsSavedScoreEl);
  
  hsList.appendChild(hsSavedName);

  var hsObject = {
    Initials: userInitials,
    Score: hsScoreKeep
  };

  hsSavedScore.push(hsObject);
  localStorage.setItem('userSave', JSON.stringify(hsSavedScore));
}


//Question object array
var quizQuestion = [

{
  Topic: "Start",
  Question: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?", 
  A: "anchor()",
  B: "big()",
  C: "blink()",
  D: "bold()",
  Answer: "D"
},

{
  Topic: "HTML",
  Question: "Which of the following function of Array object removes the first element from an array and returns that element?", 
  A: "reverse()",
  B: "shift()",
  C: "slice()",
  D: "some()",
  Answer: "B"
},

{
  Topic: "CSS",
  Question: "Which of the following function of Array object removes the first element from an array and returns that element?", 
  A: "reverse()",
  B: "shift()",
  C: "slice()",
  D: "some()",
  Answer: "B"
},

{
  Topic: "End",
  Question: "Which of the following function of Array object removes the first element from an array and returns that element?", 
  A: "reverse()",
  B: "shift()",
  C: "slice()",
  D: "some()",
  Answer: "B"
}
];

//Countdown function
function countdown() {
  timeLeft = 100;
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

var clearList = function(){
  localStorage.clear('userSave');

  for(var i = 0; i < hsSavedScore.length; i++){
  document.getElementById("hs-save").remove();
  
}
};

//High Score button listener and populate function
hsButtonEl.addEventListener("click", hsHandler);
getScore();

//High score clear button
hsClearButton.addEventListener("click", clearList);


//Only runs once when quiz is started
buttonEl.addEventListener("click", countdown);
buttonEl.addEventListener("click", quizBegin);
buttonEl.addEventListener("click", createQuizQuestionEl);


