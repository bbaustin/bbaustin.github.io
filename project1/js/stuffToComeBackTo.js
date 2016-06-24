console.log('Hello, I am working.');


//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\/\/\/\/\/\/\/   Global Variable & Object Declarations   /\/\///\/\/\\\/\/
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

function Player (score, turn) { //hmm 
 	this.name  = name;
  this.score = score;
  this.turn = turn;
}

var player1 = new Player("", 0, true);
var player2 = new Player("", 0, false);

var counter = 0;
var winCounter = 0;
var keyPressPermission = false;
var wordCollection = [];
var word = ""; 
var wordDescription = "";
var hiddenWord = ""; 
var pointAmount = 0;
var scoreP1 = 0;
var scoreP2 = 0; 
var guessed = [];

var body = document.body;
var p1Place = document.getElementsByClassName("p1Info");
var p2Place = document.getElementsByClassName("p2Info");
var messagePlace = document.getElementsByClassName("messageHolder");
var hiddenWordPlace = document.getElementsByClassName('wordHolder');
var pointButton = document.querySelector('button[name="pointAmount"]');
var pointsPlace = document.getElementsByClassName('pointHolder'); //this is an ARRAY
var p1ScorePlace = document.getElementsByClassName('p1Score');
var p2ScorePlace = document.getElementsByClassName('p2Score');
var wordChooseButton = document.querySelector('button[name="choosingButton"]');
var guessesPlace = document.getElementsByClassName('letters');


//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\\\/\/\/\/\/\/\/\\\/\/   HIDE the word     \\\//\/\///\/\/\\\/\/\\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

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

wordChooseButton.addEventListener('click', function(){ //starts new games, both at start and after finishing a game
    startOver();
  })

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
    messagePlace[0].style.display = "none";
    return "Player 1 Won! <br />";
  }
  else if (score2 > score1) {
    pointButton.style.display = "none";
    pointsPlace[0].innerHTML = "";
    messagePlace[0].style.display = "none";   
    return "Player 2 Won! <br />";
  }
  else { 
    pointButton.style.display = "none";
    pointsPlace[0].innerHTML = "";
    messagePlace[0].style.display = "none";     
    return "Tie, or more likely, error. Sorry...";
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

//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\
//\\//\\//\\/\\//\\//\\/////\   Determine Turn   \\///\\//\\//\\/\\//\\//\\/
//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\

var tellWhoseTurn = function () {
   if (counter % 2 === 0) {  //use object prototype?
     messagePlace[0].innerHTML = '<br /> Player one, Click Spin <br /> or dbl-click anywhere';
     //MAKE SPIN BUTTON DO SOMETHING HERE?
     console.log("It's Player 1's Turn");
     player1.turn = true;
     player2.turn = false;
     p1Place[0].style.border = "5px solid";
     p1Place[0].style.borderRadius = "2px";     
     p2Place[0].style.border = "1px dotted";     
     return "p1";
     //underline 
   }
   else {
     messagePlace[0].innerHTML = '<br /> Player two, Click Spin <br /> or dbl-click anywhere';
     //MAKE SPIN BUTTON DO SOMETHING HERE?
     console.log("It's Player 2's Turn");
     player1.turn = false;
     player2.turn = true;
     p2Place[0].style.border = "5px solid ";
     p2Place[0].style.borderRadius = "2px";
     p1Place[0].style.border = "1px dotted";     
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
        //MAKE SPIN BUTTON NOT LOOK CLICKABLE HERE
        messagePlace[0].innerHTML = '<br /> Please guess a letter <br /> that hasn\'t been guessed';
        console.log("Please guess a letter than hasn't been guessed");
      }
      updateWord();  
    }
  else {
    //MAKE SPIN BUTTON DO SOMETHING HERE?
    messagePlace[0].innerHTML = '<br /> Please spin before guessing a letter';    
    console.log(" Please spin before guessing a letter.");
  }
})

//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\
//\\//\\//\\/\\//\\//\\/  Generate point amount   \\//\\//\\\/\\\/\\\//\\\/\\
//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\

document.body.addEventListener('dblclick', function() {
  spin();
})

pointButton.addEventListener('click', function(){
  spin();
})

var spin = function () {
  if (keyPressPermission === false) { 
    pointAmount = Math.round(1000 * Math.random());
    pointsPlace[0].innerHTML = pointAmount; 
    keyPressPermission = true;
    //MAKE SPIN BUTTON NOT LOOK CLICKABLE HERE
    messagePlace[0].innerHTML = '<br /> Now, guess a letter <br /> by pressing a key';
  }
  else {
    //MAKE SPIN BUTTON NOT LOOK CLICKABLE HERE
    messagePlace[0].innerHTML = '<br />Please guess a letter <br /> before spinning again';
    console.log("Please guess a letter before spinning again");
  }
} 

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


var displayGuesses = function () {
  guessesPlace[0].innerHTML = "";
  for (var i = 97; i < 123; i ++) {    // automatically alphabetizes, awesome 
    if (guessed.indexOf(i) !== -1) {
      guessesPlace[0].innerHTML += String.fromCharCode(i) + "...";
    }
  }
}

//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\
////\\\\//\/\/\//\\/\\\  Generate Word Bank via AJAX  \\//\//\\/\\\///\//\/\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

var urlArray = ['current%20world%20leaders', 'Cryptids', 'arnold%20schwarzenegger', 'sarah%20records', 'bassoon', 'rice%20krispies', 'kanban', 'kwaidan', 'greek%20gods', 'tea', 'anomalous%20weather'];

for (var i = 0; i < urlArray.length; i++) {
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?&action=query&generator=search&gsrnamespace=0&gsrlimit=20&prop=pageimages|extracts&pilimit=max&exintro&exsentences=1&exlimit=max&continue&pithumbsize=100&gsrsearch=' + urlArray[i] + '&format=json',
    dataType: 'jsonp',
    jsonp: 'callback',
    success: function(data) {
      var entry = data.query.pages;
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

var themesList = document.getElementsByTagName('ul');
var h1 = document.getElementsByTagName('h1');

var lounge = document.createElement('li');
lounge.innerHTML = "Default";
themesList[0].appendChild(lounge);   
var woods = document.createElement('li');
woods.innerHTML = "Pinetree";
themesList[0].appendChild(woods); 
var sunset = document.createElement('li');
sunset.innerHTML = "Sunrise";
themesList[0].appendChild(sunset);
var movy = document.createElement('li');
movy.innerHTML = "Vanna";
themesList[0].appendChild(movy);

var changeCSS = function (bgColor, bgImage, fontColor) {
  document.body.style.backgroundColor = bgColor;  
  document.body.style.backgroundImage = bgImage; //'linear-gradient(#ff5deb, #f0ff00)';
  h1[0].style.color = fontColor;
  themesList[0].style.color = fontColor;
  messagePlace[0].style.color = fontColor;
  pointsPlace[0].style.color = fontColor;
  hiddenWordPlace[0].style.color = fontColor;
  //$("#hiddenWordPlace[0]:first-child").style.color = '#c9d2d7';
  p1Place[0].style.color = fontColor;
  p2Place[0].style.color = fontColor;
  p1Place[0].style.border = '5px solid  ' + fontColor ;
  p2Place[0].style.border = '2px dotted ' + fontColor ;
  guessesPlace[0].style.color = fontColor;
}

 sunset.addEventListener('click', function(){
   changeCSS('rgba(0,0,0,0)', 'linear-gradient(#ff5deb, #f0ff00)', '#242424');
   console.log('sunset clicked');
 })

lounge.addEventListener('click', function(){
   changeCSS('#c9c9c9', 'none', '#242424');
   console.log('lounge clicked');
})

woods.addEventListener('click', function(){
   changeCSS('rgba(0,0,0,0)', 'url(media/woodsdark-sm.gif)', '#c9d2d7');
   console.log('woods clicked');
})

var movieID = document.getElementById('bgvid');
movy.addEventListener('click', function() {
  changeCSS('rgba(0,0,0,0)', 'none', '#242424');
  movieID.style.display = 'initial';
})


// lounge.addEventListener('click', function(){
//   body.
// })