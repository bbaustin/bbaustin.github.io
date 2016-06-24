#Wheel of Fortune
![Wheel of Fortune](http://www.slate.com/content/dam/slate/articles/arts/culturebox/2014/03/140326_CBOX_WheelofFortune.jpg.CROP.promo-mediumlarge.jpg)

##Introduction
This was a five-day project created for General Assembly's Web Development Immersive. Our task was to create a browser game. I was interested in creating a game that would involve augmenting Strings, so I made something similar to Hangman or Wheel of Fortune. 

##Technologies Used
This game was built with HTML, CSS, and JavaScript. jQuery was used to access the [Wikimedia API](https://www.mediawiki.org/wiki/API:Main_page), which generates the words players guess as well a short description of the hidden word after successfully completing the puzzle.  

##Wireframes & User Stories
![wireframe](http://i.imgur.com/JNgCxRz.png?2)
The game interface does not have many moving parts, so it did not stray too far from the initial wireframe. User stories were "organized" in a continually expanding TextEdit document.

##Problems 
The largest problem during this project luckily happened very early on, when I realized that JavaScript Strings are immutable. I was planning on simply replacing letters in the *hidden word* String as they were guessed, but I quickly discovered that this was not possible. Instead, every time a correct letter is guessed, the text content of the *hidden word* is reset, then rebuilt with the newly-guessed letters added in.

##Things to Add
Overall, improving the design would be a priority. The messages on the bottom do not adequately communicate the steps to the player. Changing the border of the spin button, or making it flash when you're supposed to spin might help. 
Relatedly, mobile use was not considered at all during this project, so redesigning for mobile devices would be a high priority.
Other user stories that were written up but not implemented were:
  + creating/choosing player names and/or icons upon starting a new game  
  + alternative effects from spun scores; for instance, getting a "Bankrupt" if you spin 666 or something  
  + one player mode, creating a simple AI that would randomly guess un-guessed letters  
  + vowels costing the spun amount; multiple letters multiplying the spun amount
  
  ##What's Next
  I was interested in creating an app that affects Strings, because I am interested in creating a translation/vocab study app in the future. It might involve hiding vocab words and replacing them with words in another language. I believe that I can use ideas and strategies from this project to help create those functionalities.  
