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

var pointAmount = 0;
var body = document.body;


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