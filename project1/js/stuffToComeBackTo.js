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
var player2 = new Player("", 0 , false);

var counter = 1;
var keyPressPermission = false;
var word = ""; //eventually an API call, or something from an array/object of words
var hiddenWord = ""; 
var pointAmount = 0;
var body = document.body;
var guessedLetters = [];

var putPoints = document.createElement('div');
document.body.appendChild(putPoints);


//hiddenWordPlace[0].appendChild(hiddenWord); //why don't u work


//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\\\/\/\/\/\/\/\/\\\/\/   HIDE the word     \\\//\/\///\/\/\\\/\/\\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\
word = "who's on that 95-96 bulls' jersey?";
for (var i = 0; i < word.length; i++) {      
  console.log(word.charCodeAt(i));  //+32 da fuk
}

var updateWord = function(letter) {
hiddenWord = "";
  for (var i = 0; i < word.length; i++) {
    if ( ((word.charCodeAt(i)) >= 65) && (word.charCodeAt(i) <= 90) || ((word.charCodeAt(i) >= 97) && (word.charCodeAt(i) <= 122)) )  {  //if it's a letter, replace it with .
      hiddenWord += ".";
    }
    else {
      hiddenWord += word[i]; //or else replace it with the character

    }
  }
}
updateWord();
var hiddenWordPlace = document.getElementsByClassName('wordHolder');
hiddenWordPlace[0].textContent = hiddenWord;


//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\\\/\/\/\/\/\/\/\\\/\/   GUESS the word     \\\//\/\///\/\/\\\/\/\\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\
//Player.prototype.guess = function() {

  document.addEventListener("keydown", function(event) {
    guessedLetters.push(event.which);
    hiddenWord = "";
    for (var i = 0; i < word.length; i++) {
      if (word.charCodeAt(i) === (event.which + 32)) {
        hiddenWord += word[i];
      }
      else if ( ((word.charCodeAt(i)) >= 65) && (word.charCodeAt(i) <= 90) || ((word.charCodeAt(i) >= 97) && (word.charCodeAt(i) <= 122)) )  {  //if it's a letter, replace it with .
        hiddenWord += ".";
      }
      else {
        hiddenWord += word[i]; //or else replace it with the character
      }
    }
  hiddenWordPlace[0].textContent = hiddenWord;
  })
 //    for (var i = 0; i < word.length; i++) {   //looping thru the word
 //      hiddenWord = "";
 //      if (word.charCodeAt(i) === (event.which + 32)) {    // testing if the letters in the word match the keypress
 //        hiddenWord += word.charAt(i);
        
 //      }  
 //        //updateWord(event.which);
 //        //hiddenWordPlace[0].innerHTML = word.charAt(i); //test to see if it's reading keypress correctly. adding the letter onto the end of the hiddenWord.
 //      else {
 //        hiddenWord += ".";
 //      }

 //    }
 //  hiddenWordPlace[0].textContent = hiddenWord;
 // // console.log(replaceWord); 


  //   console.log(event.which + 32);  
  //   if (keyPressPermission) {
  //     for (var i = 0; i < word.length; i++) {
  //       if (word.charCodeAt(i) === (event.which + 32)) {
  //         this.score += pointAmount;        
  //         keyPressPermission = false; 

  //         console.log(event.which);       
  //         console.log(word[i]); 
  //         console.log(hiddenWord);

  //         hiddenWord[i] = word[i];  //no? 
  //         hiddenWordPlace[0].textContent = hiddenWord;
  //       }
  //       else { 
  //         counter ++;
  //         keyPressPermission = false;
  //       }
  //     }
  //   }
  //   else {
  //     console.log("please spin the wheel before guessing again");
  //   }
  // });
//}

//EXAMPLE 
// //var beautifulStranger = function () {
//   var lis = document.getElementsByTagName('li');
//         //console.log(lis);
//   lis[7].innerHTML = "Aragorn";
// }
// beautifulStranger();

//win condition  
  if(hiddenWord===word) {
  alert("Winner");
  }
//}

//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\\\/\/\/\/\/\/\/\\\/\/   Create Player Names     \\\//\/\///\/\/\\\/\/\\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

var submitButton = document.querySelector('button[name="submit"]');
submitButton.addEventListener('click', function(){
  var player1Name = document.getElementById('p1Name').value;
  var player2Name = document.getElementById('p2Name').value;
  var para = document.createElement('p');

  player1.name = player1Name;
  player2.name = player2Name;

  //also, remove the boxes and button. 

  para.innerHTML += player1Name + " vs " + player2Name;
  document.body.appendChild(para);
})

//this is still reading your typing codes. problem? 

//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\
//\\//\\//\\/\\//\\//\\/  Generate point amount   \\//\\//\\\/\\\/\\\//\\\/\\
//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\

var pointButton = document.querySelector('button[name="pointAmount"]');



pointButton.addEventListener('click', function(){
  if (!keyPressPermission) { 
    pointAmount = Math.round(1000 * Math.random());
    console.log(pointAmount);
    keyPressPermission = true;
    putPoints.innerHTML = pointAmount; 
    //return pointAmount;
  }
  else {
    console.log("Please guess a letter before spinning again");
  }
})


//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\
//\\//\\//\\/\\//\\//\\/////\   Determine Turn   \\///\\//\\//\\/\\//\\//\\/
//\\//\\\/\\\/\\\//\\\/\\//\\//\\//\\/\\//\\//\\///\\//\\//\\/\\//\\//\\/\\/\

  if (counter % 2 !== 0) {  //use object prototype?
    console.log("It's Player 1's Turn");
    //underline 
  }
  else {
    console.log("It's Player 2's Turn");
    //underline
  }
// }


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