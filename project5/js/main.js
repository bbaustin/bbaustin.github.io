console.log('hello');
var counter = 0;

function Piece (file, title, material, size) {
  this.file     = file;
  this.title    = title;
  this.material = material;
  this.size     = size;
}

//painting
var painting1 = new Piece ("painting-1.jpg", "untitled", "mixed media on canvas", "48\" x 60\"");
var painting2 = new Piece ("painting-2.jpg", "untitled", "mixed media on canvas", "30\" x 40\"");
var painting3 = new Piece ("painting-3.jpg", "untitled", "mixed media on canvas", "25\" x 32\"");
var painting4 = new Piece ("painting-4.jpg", "untitled", "mixed media on canvas", "40\" x 60\"");
var painting5 = new Piece ("painting-5.jpg", "untitled", "mixed media on canvas", "16\" x 20\"");
var paintings = [painting1, painting2, painting3, painting4, painting5];

//buttons
$('#next').on('click', function() {
  if (counter === paintings.length-1) {
    counter = 0;
  }
  else {
    counter++;
  }
  $('body').css('background', 'url("images/' + paintings[counter].file + '") no-repeat center center fixed');
  updateInfo();
})

$('#prev').on('click', function() {
  if (counter === 0) {
    counter = paintings.length-1;
  }
  else {
    counter--;
  }
  $('body').css('background', 'url("images/' + paintings[counter].file + '") no-repeat center center fixed');
  updateInfo();
})

function updateInfo() {
  $('.info').html("<li><strong>" + paintings[counter].title + "</strong></li> <li>" + paintings[counter].material + "</li> <li>" + paintings[counter].size + "</li>");
}



updateInfo();
