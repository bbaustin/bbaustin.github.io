console.log('Hello, I am working.');


//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\/\/\/\/\/\/\/   Global Variable & Object Declarations   /\/\///\/\/\\\/\/
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

// function Player (name, score, turn) { //name needed?
// 	this.name  = name;
// 	this.score = score;
//   this.turn = turn;
// }
// var player1 = new Player("", 0, true);
// var player2 = new Player("", 0 , false);

var counter = 0;
var keyPressPermission = false;
var word = ""; //eventually an API call, or something from an array/object of words
var hiddenWord = ""; 
var pointAmount = 0;
var body = document.body;
var guessed = [];
for (var i = 0; i < 97; i++){ //a is 97 [65 + 32]
  guessed.push(i); // (i + 32)?
}
for (var i = 122; i < 300; i++){ //z is 122 [91 + 32]
  guessed.push(i);
}


var hiddenWordPlace = document.getElementsByClassName('wordHolder');


//hiddenWordPlace[0].appendChild(hiddenWord); //why don't u work


//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\\\/\/\/\/\/\/\/\\\/\/   HIDE the word     \\\//\/\///\/\/\\\/\/\\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\
word = "i <3 javascript";
 
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
    if (word.indexOf(String.fromCharCode(charCode)) === -1) { ///not in the word
      return false;
    }
    else {
      return true;
    }
  }
}

var updateWord = function() {
hiddenWord = "";     
  for (var i = 0; i < word.length; i++) { ////////
    if (!alreadyGuessed(word.charCodeAt(i))){
      hiddenWord += ".";
    }
    else {
      hiddenWord += word[i];
    }
  }
  hiddenWordPlace[0].textContent = hiddenWord;
}
updateWord();

//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\
//\\//\\//\\/\\//\\//\\/////\   Determine Turn   \\///\\//\\//\\/\\//\\//\\/
//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\

var tellWhoseTurn = function () {
   if (counter % 2 === 0) {  //use object prototype?
     console.log("It's Player 1's Turn");
     //underline 
   }
   else {
     console.log("It's Player 2's Turn");
     //underline
   }
}
tellWhoseTurn();


//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\\\/\/\/\/\/\/\/\\\/\/   GUESS the word     \\\//\/\///\/\/\\\/\/\\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\
//Player.prototype.guess = function() {

  document.addEventListener("keydown", function(event) {
    if (!alreadyGuessed((event.which + 32))) {  //makes it so u can't guess the same letter twice. 
        guessed.push((event.which + 32));
        keyPressPermission = false; 
        if (!inTheWord((event.which + 32))) {
          counter++;
          tellWhoseTurn();
          keyPressPermission = false;
        }
        else {
          tellWhoseTurn();
          keyPressPermission = false;
          //score += score or whatever
        }
    }
    else {
      console.log("Please guess a letter than hasn't been guessed");
    }
    updateWord();  
  })

//win condition  
  if(hiddenWord===word) {
  alert("Winner");
  }


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

var pointButton = document.querySelector('button[name="pointAmount"]');

var pointsPlace = document.getElementsByClassName('pointHolder'); //this is an ARRAY!!!


pointButton.addEventListener('click', function(){
  if (keyPressPermission === false) { 
    pointAmount = Math.round(1000 * Math.random());
    console.log(pointAmount);
    pointsPlace[0].innerHTML = pointAmount; 
    keyPressPermission = true;

    //return pointAmount;
  }
  else {
    console.log("Please guess a letter before spinning again");
  }
})




//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\
////\\\\//\/\/\//\\/   API STUFF TO FIGURE OUT LATER   \\/\\\///\//\/\/\/\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

// $(document).ready(function(){
// 	//$.ajax(ajaxArgument1);
// 	$.ajax(ajaxArgument2);
// 	$.ajax(ajaxArgument3);
// })


// $.ajax({
// 	//everything goes here. Cleaner than variables, ostensibly.
// })


// var ajaxArgument1 = {
// 	  type: 'get',
//     url: 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=pizza&format=json',
//     //data: queryData,
//     dataType: 'json',
//     //Access-Control-Allow-Origin: *,
//     headers: { 'user': 'Ben Austin Student Project <benjaminboydaustin@gmail.com>' },
//     success: function(data) {
//     	console.log(data);
//     },
//     error: function(err){
//     	console.log(err);
//     }
// };

// var ajaxArgument2 = {
// 	  url: 'http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=pizza&format=json',
//     dataType: 'jsonp',
//     jsonp: 'callback',
//    // // data: { action: 'opensearch',
//    //          search: search_term,
//    //          limit: 5,
//    //          format: 'json' },
//     success: function(response) {  //strangely this works
//       console.log(response);
//       var newH2 = document.createElement('h2');
//       newH2.innerHTML += response.query.pages['24768'].revisions[0].title; //how to get around number? 
//       console.log('LOOK HERE');
//       console.log(response.query.pages['24768'].title);
//     },
//     error: function(err) {
//        console.log(err);
//     }
// };

// var ajaxArgument3 = {
// 	url: 'https://en.wikipedia.org/w/api.php?action=query&titles=Red&prop=revisions&rvprop=content&format=json',
//     dataType: 'jsonp',
//     jsonp: 'callback',
//    // // data: { action: 'opensearch',
//    //          search: search_term,
//    //          limit: 5,
//    //          format: 'json' },
//     success: function(response) {
//       console.log(response);
//     },
//     error: function(err) {
//        console.log(err);
//     }
// 	};



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