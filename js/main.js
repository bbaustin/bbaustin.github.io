
// Variables and Initial Loading Stuff
var everything = document.getElementsByClassName('everything');
var holders    = document.getElementsByClassName('container-entire-example');
var nav        = document.getElementsByClassName('main-nav');
var sub        = document.getElementsByClassName('sub-nav');

for (var i = 1; i < holders.length; i++) {
  holders[i].style.display = "none";
}
sub[1].style.display = "none";
everything[1].style.display = "none";
nav[0].style.fontWeight = "700";
$('.sub-nav li')[0].style.fontWeight = "700";

console.log(sub[0]);

// Main Navigation Clicks

$(nav[0]).click(function() {
  everything[0].style.display = "initial";
  everything[0].setAttribute("style", "margin-top:" + 140 + "px");
  everything[1].style.display = "none";
  sub[0].style.display = "initial";
  sub[1].style.display = "none";
  $('.sub-nav li')[0].style.fontWeight = "700";
  nav[0].style.fontWeight = "700";
  nav[1].style.fontWeight = "400";
  for (var i = 0; i < holders.length; i++) {
    holders[i].style.display = "none";
  }
  holders[0].style.display = "initial";
  $('html, body').animate({ scrollTop: 0 }, 'fast');

})

$(nav[1]).click(function() {
  everything[0].style.display = "none";
  everything[1].setAttribute("style", "margin-top:" + 140 + "px");
  everything[1].style.display = "flex";
  sub[0].style.display = "none";
  sub[1].style.display = "initial";
  $('.sub-nav li')[3].style.fontWeight = "700";
  $('.sub-nav li')[4].style.fontWeight = "300";
  nav[0].style.fontWeight = "400";
  nav[1].style.fontWeight = "700";
  for (var i = 0; i < holders.length; i++) {
    holders[i].style.display = "none";
  }
  holders[3].style.display = "initial";
  $('html, body').animate({ scrollTop: 0 }, 'fast');
})


// Clicking Sub Navigation Options
$('.sub-nav li').click(function() {
  for (var i = 0; i <= 5; i++) {
    $('.sub-nav li')[i].style.fontWeight = 300;
  }
  this.style.fontWeight = 700;

  for (var i = 0; i < holders.length; i++) {
    holders[i].style.display = "none";
  }
  holders[$("li").index(this) - 2].style.display = "initial";
  $('html, body').animate({ scrollTop: 0 }, 'fast');

})
