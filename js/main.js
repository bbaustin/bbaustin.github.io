var webCounter   = 0, 
    musicCounter = 0; 

//web
$('.web .arrow').on('click', ()=> {
  amountAdd($('.web'));
  amountLogic();
  $('.web .wideContainer').animate({
    'margin-left': "-=100vw"       // why does left work but not right lol 
  }, 500 );
});

//music
$('.music .arrow').on('click', ()=> {
  amountAdd($('.music'));
  amountLogicMusic();
  $('.music .wideContainer').animate({
    'margin-left': "-=100vw"
  }, 500 );
});


//web
$('.web .backArrow').on('click', ()=> {
  amountSub($('.web'));
  amountLogic();
  $('.web .wideContainer').animate({
    'margin-left': "+=100vw"       // why does left work but not right lol 
  }, 500 );
});

//music
$('.music .backArrow').on('click', ()=> {
  amountSub($('.music'));
  amountLogicMusic();
  $('.music .wideContainer').animate({
    'margin-left': "+=100vw"
  }, 500 );
});


var amountAdd = (container)=> {
  if (container.hasClass('web')) {
    webCounter++;
  }
  else if (container.hasClass('music')) {
    musicCounter++;
  }
}

var amountSub = (container)=> {
  if (container.hasClass('web')) {
    webCounter--;
  }
  else if (container.hasClass('music')) {
    musicCounter--;
  }
}
var amountLogic = ()=> {
  if (webCounter === 0) {
    $('.web .backArrow').hide();  // hide back at beginning
  }
  else if (webCounter === 3) {
    $('.web .arrow').hide()  // hide forward at end
  }
  else {
    $('.web .backArrow').show(); // show both arrows all other times
    $('.web .arrow').show();
  }
}
amountLogic(); 

var amountLogicMusic = ()=> {
  if (musicCounter === 0) {
    $('.music .backArrow').hide();
  }
  else if (musicCounter === 4) {
    $('.music .arrow').hide()
  }
  else {
    $('.music .backArrow').show();
    $('.music .arrow').show()
  }
}
amountLogicMusic();




console.log(webCounter);


//dry --> move functions
//arrow functions
//parent to do the dryness
//arrow appears to go back when possible
//stops when at uhhhh end of container container child count
