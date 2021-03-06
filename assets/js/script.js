var timerEl = document.getElementById('countdown');
var buttonEl = document.getElementById("start-btn");
var hsListEl = document.getElementById("hs-save");
var hsViewScore = document.getElementById("hs-stats");
var hsButtonEl = document.getElementById("high-score");
var hsClearButton = document.getElementById("clear-btn");
var questionNum = 0;
var timeLeft = 10;


var hsScoreKeep = 0;
var hsSavedScore = JSON.parse(localStorage.getItem('userSave')) || [];
var userInitials;

//This is the parent that will hold my quiz childs
var quizContainerParent = document.getElementById("quiz-content") 

//Starts quiz and removes welcome screen element
var createQuizQuestionEl = function(){

  if(questionNum >= quizQuestion.length){
    //Display score function
    // PopUpInput();
    
    if(document.getElementById("answer-shown") && !null){
    document.getElementById("answer-shown").remove();
    };
    
    if(document.getElementById("quiz-container") && !null){
      document.getElementById("quiz-container").remove();
    }
    if (hsScoreKeep > 0){
      
      userInitials = window.prompt("Thanks for playing! Your score is " + hsScoreKeep + "! Please enter your initials.").toUpperCase();
      saveHS();
    }
    if (questionNum > 0 && hsScoreKeep <= 0 && !timeLeft == 0){
      
      window.alert("In an effort to save storage space your terrible score will not be recorded. Please try again!");
      
    }
    // userInitials = window.prompt("Thanks for playing! Your score is " + hsScoreKeep + "! Please enter your initials.").toUpperCase();
    
    timeLeft = 0;
    questionNum = 0;
    hsScoreKeep = 0;
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

  if(document.getElementById("answer-shown")){
    document.getElementById("answer-shown").remove()
  }
  
  var answerShown = document.createElement("p");
  answerShown.id = "answer-shown";
  answerShown.style = "font-weight: bolder; font-size: 20px; color: black;"
  answerShown.textContent = "That answer was correct!" + "Current Score " + hsScoreKeep; 
  quizContainerParent.appendChild(answerShown);
  
  removeReplace();
  
}
else{

  if(document.getElementById("answer-shown")){
    document.getElementById("answer-shown").remove()
  }

  var answerShown = document.createElement("p");
  answerShown.id = "answer-shown";
  answerShown.style = "font-weight: bolder; font-size: 20px; color: black;"
  answerShown.textContent = "That answer was wrong." + "Current Score " + hsScoreKeep; 
  quizContainerParent.appendChild(answerShown);

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
    // debugger;
    quizBegin();
    
    // debugger;
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
  Topic: "JavaScript",
  Question: "What is the correct syntax for referring to an external script called 'abc.js'?", 
  A: "<script href= 'abc.js'>",
  B: "<script name= 'abc.js'>",
  C: "<script src=' abc.js'>",
  D: "None of the above",
  Answer: "C"
},

{
  Topic: "JavaScript",
  Question: "Why do JavaScript and Java have similar name?", 
  A: "JavaScript is a stripped-down version of Java",
  B: "JavaScript's syntax is loosely based on Java's",
  C: "They both originated on the island of Java",
  D: "None of the above",
  Answer: "B"
},

{
  Topic: "CSS",
  Question: "If we want to place text around an image, which CSS property should we use?", 
  A: "push",
  B: "float",
  C: "align",
  D: "wrap",
  Answer: "B"
},

{
  Topic: "HTML",
  Question: "An HTML document can contain _____", 
  A: "Attributes",
  B: "Tags",
  C: "Raw text",
  D: "All of the above",
  Answer: "D"
},
{
  Topic: "HTML",
  Question: "A page designed in HTML is called _____", 
  A: "Application",
  B: "Cover page",
  C: "Front-end",
  D: "Web Page",
  Answer: "D"
},
{
  Topic: "CSS",
  Question: "What does CSS stand for?", 
  A: "Cascade style sheets",
  B: "Color and style sheets",
  C: "Cascading style sheets",
  D: "Cascading sheet style",
  Answer: "C"
}
];

//Countdown function
function countdown() {
  timeLeft = 60;
  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft;

    if(timeLeft <= 0){
      timerEl.textContent = '';
      clearInterval(timeInterval);
      questionNum = questionNum + 10;
      removeReplace();
      createQuizQuestionEl();
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


