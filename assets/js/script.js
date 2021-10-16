var timerEl = document.getElementById('countdown');
var buttonEl = document.getElementById("start-btn");

var hsViewScore = document.getElementById("hs-stats");
var hsButtonEl = document.getElementById("high-score");
var questionNum = 0;
var timeLeft = 100;


var hsScoreKeep = 0;
var hsSavedScore = JSON.parse(localStorage.getItem('userSave')) || [];
var userInitials;

//This is the parent that will hold my quiz childs
var quizContainerParent = document.getElementById("quiz-content") 
var getScore = localStorage.getItem();

// for(var i = 0; i );

//Starts quiz and removes welcome screen element
var createQuizQuestionEl = function(){

  if(questionNum >= quizQuestion.length){
    //Display score function
    userInitials = window.prompt("");
    saveHS();
    
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
  removeWelcome.style.display = "none";

  var removeStartBtn = document.getElementById("start-btn")
  removeStartBtn.style.display = "none";
}

//Removes and replaces quiz container elements
var removeReplace = function(){

  if(questionNum < quizQuestion.length){
    questionNum++;
    document.getElementById("quiz-container").remove();
    createQuizQuestionEl();
  }
  else{
    document.getElementById("quiz-container").remove()
    console.log("Thanks for Playing")
  }
};

// function getHighScoreList(){
//   var hsList = document.getElementById("hs-list");
  
//   var hsSavedName = document.createElement("li");
//   hsSavedName.textContent = userInitials;

//   var hsSavedScoreEl = document.createElement("p");
//   hsSavedScoreEl.textContent = (hsObject.Initials);
//   hsSavedName.appendChild(hsSavedScoreEl);
  
//   hsList.appendChild(hsSavedName);
// }

//When game is over user writes in score
//This function saves into HTML and pushes to local storage
function saveHS(){

  var hsList = document.getElementById("hs-list");
  
  var hsSavedName = document.createElement("li");
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

  //Fix this 
  localStorage.setItem('userSave', JSON.stringify(hsSavedScore));
 
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
  
//Only runs once when quiz is started
buttonEl.addEventListener("click", countdown);
buttonEl.addEventListener("click", quizBegin);
buttonEl.addEventListener("click", createQuizQuestionEl);


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

