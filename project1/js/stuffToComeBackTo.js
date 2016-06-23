console.log('Hello, I am working.');


//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\/\/\/\/\/\/\/   Global Variable & Object Declarations   /\/\///\/\/\\\/\/
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

function Player (name, score, turn) { //name needed?
 	this.name  = name;
  this.score = score;
  this.turn = turn;
}

var player1 = new Player("", 0, true);
var player2 = new Player("", 0, false);

var counter = 0;
var keyPressPermission = false;
var wordCollection = [];
var word = ""; //eventually an API call, or something from an array/object of words
var wordDescription = "";
var hiddenWord = ""; 
var pointAmount = 0;
var body = document.body;
var guessed = [];
// for (var i = 0; i < 97; i++){ //a is 97 [65 + 32]
//   guessed.push(i); // (i + 32)?
// }
// for (var i = 123; i < 300; i++){ //z is 122 [91 + 32]
//   guessed.push(i);
// }


var hiddenWordPlace = document.getElementsByClassName('wordHolder');

var pointButton = document.querySelector('button[name="pointAmount"]');

var pointsPlace = document.getElementsByClassName('pointHolder'); //this is an ARRAY
  



//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\\\/\/\/\/\/\/\/\\\/\/   HIDE the word     \\\//\/\///\/\/\\\/\/\\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

//make like a button show up once wordCollection has reached a certain length

var chooseWord = function() {
  word = "";
  try { 
    var randomize = Math.round(Math.random()*wordCollection.length);
    word = wordCollection[randomize].title.toLowerCase();
    wordDescription = wordCollection[randomize].extract;
  }
  catch (err) {
    console.log(err + "API not loaded yet! Give it a second.");
  }
}

var startOver = function() {
  wordChooseButton.style.display = 'none';
  guessed = [];
  for (var i = 0; i < 97; i++){ //a is 97 [65 + 32]
    guessed.push(i); // (i + 32)?
  }
  for (var i = 123; i < 300; i++){ //z is 122 [91 + 32]
    guessed.push(i);
  }
  chooseWord();
  updateWord();
  guessesPlace[0].innerHTML = "<br />";
  scoreP1 = 0;
  scoreP2 = 0;
  p1ScorePlace[0].innerHTML = scoreP1;
  p2ScorePlace[0].innerHTML = scoreP2;
  pointButton.style.display = 'inline';
  pointsPlace[0].style.display = 'inline'; 
  messagePlace[0].style.display = 'inline'; 
}

var wordChooseButton = document.querySelector('button[name="choosingButton"]');
wordChooseButton.addEventListener('click', function(){
    startOver();
  })

var winCounter = 0;
var didSomeoneWin = function () {
  winCounter = 0;
  for (var i = 0; i < word.length; i++)  
    if (hiddenWord[i] === word[i]) {
      winCounter ++;
    }
    if (winCounter === hiddenWord.length) {
      console.log("someone won");
      hiddenWordPlace[0].innerHTML += wordDescription;
      hiddenWordPlace[0].innerHTML += whoWon(scoreP1, scoreP2);
      hiddenWordPlace[0].appendChild(wordChooseButton);
      wordChooseButton.style.display = 'inline';
      wordChooseButton.textContent = 'Play Again?';
    }
}

var whoWon = function(score1, score2) {
  if (score1 > score2) {
    pointButton.style.display = "none";
    pointsPlace[0].innerHTML = "";
    //pointsPlace[0].style.display = "none";
    messagePlace[0].style.display = "none";
    return "Player 1 Won! <br />";
  }
  else if (score2 > score1) {
    pointButton.style.display = "none";
    pointsPlace[0].innerHTML = "";
   // pointsPlace[0].style.display = "none";
    messagePlace[0].style.display = "none";   
    return "Player 2 Won! <br />";
  }
  else { 
    pointButton.style.display = "none";
    pointsPlace[0].innerHTML = "";
    //pointsPlace[0].style.display = "none";
    messagePlace[0].style.display = "none";     
    return "The chances of a tie are extremely low! Was there really a tie, or is this an error?";
  }
}

var alreadyGuessed = function(charCode) {
  for (var i = 0; i < guessed.length; i++) {
    if (guessed.indexOf(charCode) === -1) { ///not in the array
      return false;
    }
    else {
      return true;
    }
  }
}

var inTheWord = function (charCode) { //you will be passing a charCode via ur keypress.
  for (var i = 0; i < word.length; i++) {
    if (word.indexOf(String.fromCharCode(charCode)) === -1) { ///NTS: why not +32 here? 
      return false;
    }
    else {
      return true;
    }
  }
}
var updateWord = function() {
hiddenWord = "";     
  for (var i = 0; i < word.length; i++) { 
    if (!alreadyGuessed(word.charCodeAt(i))){
      hiddenWord += ".";
    }
    else {
      hiddenWord += word[i];
    }
  }
  hiddenWordPlace[0].textContent = hiddenWord;
  didSomeoneWin();
}
//updateWord();

//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\
//\\//\\//\\/\\//\\//\\/////\   Determine Turn   \\///\\//\\//\\/\\//\\//\\/
//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\
var p1Place = document.getElementsByClassName("p1Info");
var p2Place = document.getElementsByClassName("p2Info");
var messagePlace = document.getElementsByClassName("messageHolder");

var tellWhoseTurn = function () {
   if (counter % 2 === 0) {  //use object prototype?
     messagePlace[0].innerHTML = "It's Player 1's Turn";
     console.log("It's Player 1's Turn");
     player1.turn = true;
     player2.turn = false;
     p1Place[0].style.border = "5px solid black";
     p1Place[0].style.borderRadius = "2px";     
     p2Place[0].style.border = "1px black dotted";     
     return "p1";
     //underline 
   }
   else {
     messagePlace[0].innerHTML = "It's Player 2's Turn";
     console.log("It's Player 2's Turn");
     player1.turn = false;
     player2.turn = true;
     p2Place[0].style.border = "5px solid black";
     p2Place[0].style.borderRadius = "2px";
     p1Place[0].style.border = "1px black dotted";     
     return "p2";
     //underline
   }
}
tellWhoseTurn();


//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\\\/\/\/\/\/\/\/\\\/\/   GUESS the word     \\\//\/\///\/\/\\\/\/\\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

//Player.prototype.guess = function() {
  document.addEventListener("keydown", function(event) {
    if (keyPressPermission) {
      if (!alreadyGuessed((event.which + 32))) {  //makes it so u can't guess the same letter twice. 
        guessed.push((event.which + 32));
        displayGuesses();
        keyPressPermission = false; 
        if (!inTheWord((event.which + 32))) {
          counter++;
          tellWhoseTurn();
          keyPressPermission = false;
        }
        else {
          tellWhoseTurn();
          keyPressPermission = false;
          addPoints();
        }
      }
      else {
        messagePlace[0].innerHTML = "Please guess a letter than hasn't been guessed";
        console.log("Please guess a letter than hasn't been guessed");
      }
      updateWord();  
    }
  else {
    messagePlace[0].innerHTML = "Please spin before guessing a letter";    
    console.log("Please spin before guessing a letter.");
  }
})
//}

//win condition


//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\\\/\/\/\/\/\/\/\\\/\/   Create Player Names     \\\//\/\///\/\/\\\/\/\\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

// var submitButton = document.querySelector('button[name="submit"]');
// submitButton.addEventListener('click', function(){
//   var player1Name = document.getElementById('p1Name').value;
//   var player2Name = document.getElementById('p2Name').value;
//   var para = document.createElement('p');

//   player1.name = player1Name;
//   player2.name = player2Name;

//   //also, remove the boxes and button. 

//   para.innerHTML += player1Name + " vs " + player2Name;
//   document.body.appendChild(para);
// })

//this is still reading your typing codes. problem? 

//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\
//\\//\\//\\/\\//\\//\\/  Generate point amount   \\//\\//\\\/\\\/\\\//\\\/\\
//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\



pointButton.addEventListener('click', function(){
  if (keyPressPermission === false) { 
    pointAmount = Math.round(1000 * Math.random());
    pointsPlace[0].innerHTML = pointAmount; 
    keyPressPermission = true;
    //return pointAmount;
  }
  else {
    messagePlace[0].innerHTML = "Please guess a letter before spinning again";
    console.log("Please guess a letter before spinning again");
  }
})

var p1ScorePlace = document.getElementsByClassName('p1Score');
var p2ScorePlace = document.getElementsByClassName('p2Score');
var scoreP1 = 0;
var scoreP2 = 0; 

var addPoints = function () {
  if (player1.turn === true) {
    scoreP1 += pointAmount;
    p1ScorePlace[0].innerHTML = scoreP1;
    console.log("Player 1's score is " + scoreP1);
  }
  else {
    scoreP2 += pointAmount;
    p2ScorePlace[0].innerHTML = scoreP2;
    console.log("Player 2's score is " + scoreP1);
  }
}

//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\
//\\//\\//\\/\\//\\//\\/  Display Guessed Letters   \\//\\//\\\/\\\/\\\//\\\/\\
//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\

var guessesPlace = document.getElementsByClassName('letters');

var displayGuesses = function () {
  guessesPlace[0].innerHTML = "";
  for (var i = 97; i < 123; i ++) {    // automatically alphabetizes, awesome 
    if (guessed.indexOf(i) !== -1) {
      guessesPlace[0].innerHTML += String.fromCharCode(i) + "...";
    }
  }
}

//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\
////\\\\//\/\/\//\\/   API STUFF TO FIGURE OUT LATER   \\/\\\///\//\/\/\/\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

var urlArray = ['current%20world%20leaders', 'Cryptids', 'arnold%20schwarzenegger', 'sarah%20records', 'bassoon', 'rice%20krispies', 'kanban', 'kwaidan', 'greek%20gods', 'tea',];

for (var i = 0; i < urlArray.length; i++) {
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?&action=query&generator=search&gsrnamespace=0&gsrlimit=20&prop=pageimages|extracts&pilimit=max&exintro&exsentences=1&exlimit=max&continue&pithumbsize=100&gsrsearch=' + urlArray[i] + '&format=json',
    dataType: 'jsonp',
    jsonp: 'callback',
    success: function(data) {
      var entry = data.query.pages;
      console.log(entry);
      for(var prop in entry) {
        if ((entry[prop].title.indexOf("List") === -1) && (entry[prop].title.indexOf("(") === -1)) {
            wordCollection.push(entry[prop]); //this pushes each result object into your array. you can use wordCollection[x].title to get the title, etc. 
        }
      }
    
    },
    error: function(err) {
       console.log(err);
    }
  });
}

//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\\\/\/\/\/\/\/\/\\\/\/   Create color buttons     \\\//\/\///\/\/\\\/\/\\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

// var arcadeSwitch = document.createElement('button');
//     arcadeSwitch.style.backgroundColor = '#ff54b3';
//     arcadeSwitch.style.margin = 'auto';
//     arcadeSwitch.style.width = '15px';
//     arcadeSwitch.style.height = '15px';
//     arcadeSwitch.style.borderRadius = '50%';
//     arcadeSwitch.style.border = 'solid #ff54b3 1px'
//     document.body.appendChild(arcadeSwitch);
// var sketchSwitch = document.createElement('button');
//     sketchSwitch.style.backgroundColor = '#393939';
//     sketchSwitch.style.margin = 'auto';
//     sketchSwitch.style.width = '15px';
//     sketchSwitch.style.height = '15px';
//     sketchSwitch.style.borderRadius = '50%';
//     sketchSwitch.style.border = 'solid #393939 1px'
//     document.body.appendChild(sketchSwitch);    

// arcadeSwitch.addEventListener('click', function(){
// //can i harness the pwr of less to change multiple css properties here?
// })

// sketchSwitch.addEventListener('click', function(){
// //can i harness the pwr of less to change multiple css properties here?
// })