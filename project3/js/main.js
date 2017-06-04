$('.terranium img').hover(
  function() {
    $(this).attr('src', changeName($(this)[0].outerHTML));
  }, 
  function() {
    $(this).attr('src', changeBack($(this)[0].outerHTML));

  });

function changeName(input) {
  var beg  = input.slice(10, -6);
      end  = '2.png',
      both = beg + end;
  return both;
}

function changeBack(input) {
  var beg  = input.slice(10, -7);
      end  = '.png',
      both = beg + end;
  return both;
}

/////////////////////////////

$( function() {
    $("#tabs").tabs({
      active: 0
    });
  });

/////////////////////////////

// function underline() {
//   if ($('li').hasClass('ui-tabs-active')) {
//     console.log('hi');
//   }
// }

// underline();
