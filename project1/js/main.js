console.log('Hello, I am working.');

//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\/\/\/\/\/\/\/   Global Variable & Object Declarations   /\/\///\/\/\\\/\/
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\

var word = ""; //eventually an API call, or something from an array/object of words
var hiddenWord = ""; 
var guessedLetters = [];
var keyPressPermission = false;


var putPoints = document.createElement('div');
document.body.appendChild(putPoints);


//\\//\\/\\/\/\\/\/\\/\/\/\/\\\/\/\\/\/\\\/////\/\/\/\\\/\/\/\/\/\/\/\/\/\\/\
//\\\/\/\/\/\/\/\/\\\/\/   HIDE the word     \\\//\/\///\/\/\\\/\/\\\
//\/\/\\\\/\\\/\/\/\/\\\/\/\/\/\/\/\\/\/\/\/\/\/\/\\\/\//////\\/\/\/\\\\\/\/\
word = "who's on that 95-96 bulls' jersey?";
// for (var i = 0; i < word.length; i++) {      
//   console.log(word.charCodeAt(i));  //+32 da fuk
// }

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



document.addEventListener("keydown", function(event) {
  hiddenWord = "";
  guessedLetters.push(event.which);
  for (var i = 0; i < word.length; i++) {
    for (var arrInd = 0; arrInd < guessedLetters.length; arrInd++) {
      if ((word.charCodeAt(i) === (event.which + 32)) || (word.charCodeAt(i) === (guessedLetters[arrInd] + 32))|| (((event.which + 32) <= 65) && ((event.which + 32) >= 90))) {   
        hiddenWord += word[i];
      }
      else {
        hiddenWord[i] += "."; //or else replace it with the character
      }
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




