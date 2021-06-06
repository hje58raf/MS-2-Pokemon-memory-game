var brands = [
	 
    "https://pokeres.bastionbot.org/images/pokemon/9.png",
    "https://pokeres.bastionbot.org/images/pokemon/10.png",
    "https://pokeres.bastionbot.org/images/pokemon/11.png",
    "https://pokeres.bastionbot.org/images/pokemon/12.png",
    "https://pokeres.bastionbot.org/images/pokemon/13.png",
    "https://pokeres.bastionbot.org/images/pokemon/14.png",
    "https://pokeres.bastionbot.org/images/pokemon/15.png",
    "https://pokeres.bastionbot.org/images/pokemon/16.png",
    "https://pokeres.bastionbot.org/images/pokemon/17.png",
    "https://pokeres.bastionbot.org/images/pokemon/18.png",
    "https://pokeres.bastionbot.org/images/pokemon/19.png",
    "https://pokeres.bastionbot.org/images/pokemon/20.png",
    "https://pokeres.bastionbot.org/images/pokemon/21.png",
    "https://pokeres.bastionbot.org/images/pokemon/22.png",
    "https://pokeres.bastionbot.org/images/pokemon/23.png",
    "https://pokeres.bastionbot.org/images/pokemon/24.png",
    "https://pokeres.bastionbot.org/images/pokemon/25.png",
    "https://pokeres.bastionbot.org/images/pokemon/26.png",
    "https://pokeres.bastionbot.org/images/pokemon/27.png",
    "https://pokeres.bastionbot.org/images/pokemon/28.png",
    "https://pokeres.bastionbot.org/images/pokemon/29.png",
    "https://pokeres.bastionbot.org/images/pokemon/30.png",
    "https://pokeres.bastionbot.org/images/pokemon/31.png",
    "https://pokeres.bastionbot.org/images/pokemon/32.png",
    "https://pokeres.bastionbot.org/images/pokemon/33.png",
    "https://pokeres.bastionbot.org/images/pokemon/34.png",
    "https://pokeres.bastionbot.org/images/pokemon/35.png",
    "https://pokeres.bastionbot.org/images/pokemon/36.png",
    "https://pokeres.bastionbot.org/images/pokemon/37.png",
    "https://pokeres.bastionbot.org/images/pokemon/38.png",
    "https://pokeres.bastionbot.org/images/pokemon/39.png",
    "https://pokeres.bastionbot.org/images/pokemon/40.png",
    "https://pokeres.bastionbot.org/images/pokemon/41.png",
    "https://pokeres.bastionbot.org/images/pokemon/42.png",
    "https://pokeres.bastionbot.org/images/pokemon/43.png",
    "https://pokeres.bastionbot.org/images/pokemon/44.png",
    "https://pokeres.bastionbot.org/images/pokemon/45.png",
    "https://pokeres.bastionbot.org/images/pokemon/46.png",
    "https://pokeres.bastionbot.org/images/pokemon/47.png",
    "https://pokeres.bastionbot.org/images/pokemon/48.png",
    "https://pokeres.bastionbot.org/images/pokemon/49.png",
    "https://pokeres.bastionbot.org/images/pokemon/50.png",
    "https://pokeres.bastionbot.org/images/pokemon/51.png",
    "https://pokeres.bastionbot.org/images/pokemon/52.png",
    "https://pokeres.bastionbot.org/images/pokemon/53.png",
    "https://pokeres.bastionbot.org/images/pokemon/54.png",
    "https://pokeres.bastionbot.org/images/pokemon/55.png",
    "https://pokeres.bastionbot.org/images/pokemon/56.png",
    "https://pokeres.bastionbot.org/images/pokemon/57.png",
    "https://pokeres.bastionbot.org/images/pokemon/58.png",
    "https://pokeres.bastionbot.org/images/pokemon/59.png",
    "https://pokeres.bastionbot.org/images/pokemon/60.png",
    "https://pokeres.bastionbot.org/images/pokemon/61.png",
    "https://pokeres.bastionbot.org/images/pokemon/62.png",
    "https://pokeres.bastionbot.org/images/pokemon/63.png",
    "https://pokeres.bastionbot.org/images/pokemon/64.png",
    "https://pokeres.bastionbot.org/images/pokemon/65.png",
    "https://pokeres.bastionbot.org/images/pokemon/66.png",
    "https://pokeres.bastionbot.org/images/pokemon/67.png",
    "https://pokeres.bastionbot.org/images/pokemon/68.png",
    "https://pokeres.bastionbot.org/images/pokemon/69.png",
    "https://pokeres.bastionbot.org/images/pokemon/70.png",
    "https://pokeres.bastionbot.org/images/pokemon/71.png",
    "https://pokeres.bastionbot.org/images/pokemon/72.png",
    "https://pokeres.bastionbot.org/images/pokemon/73.png",
    "https://pokeres.bastionbot.org/images/pokemon/74.png",
];


const startGame = () => {
    const gameContainer = document.getElementById("gameContainer");
 

    if (level == "easy") {deifficulty = 4;
    } else if (level == "medium") {
        deifficulty = 6;
    } else if (level == "hard") {
        deifficulty = 8;
    } else if (level == "expert") {
        deifficulty = 10;
    };

 
 //Game section is referred from https://marina-ferreira.github.io/tutorials/js/memory-game/ 
// variable to select card on game
var cards = document.querySelectorAll(".memory-card");
// variable for card status and stop cards being flipped again once matched
var hasFlippedCard = false;
var lockBoard = false;
// card variables
var firstCard,
    secondCard;
//moves and count variables
var moves = 0;
var count = 0;
var counter = document.querySelector(".moves-counter");
var counter2 = document.querySelector(".count-counter");
// Star variable defined
var stars = document.querySelectorAll(".fa-star");
//Variable for Modal when game is complete
var closeicon = document.querySelector(".close");
var modal = document.getElementById("popup1");
//Sound variable
var music = document.getElementById("myAudio");
//Timer variable
var timerOn = true;
var musicOff = false;
//Function when the card is flipped, checks to see if the card has already been flipped, if its the first card and adds the class flip.
//then runs the match againest the second card flip and increase the move counter which are both separate function that are called

function flipCard(){
     if (timerOn === true) {
  startTimer();
  timerOn = false;
}
if(musicOff === false){  
music.play();
    music.loop = true;
}
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("flip");
    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    checkForMatch();
    moveCounter();
}

//check both cards for match
function checkForMatch(){
    var isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards(); //cards can not be flip again
}
function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    countCounter(); //increase the match counter
     resetBoard(); //disable both cards
    localStorage.setItem = ("moves")+1;  //sets stored in local storage
    congrats(); //when 8 matches have been completed bring up congrats modal
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    },1200);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
(function shuffle() {
    cards.forEach(card => {
        var ramdomPos = Math.floor(Math.random() * 16); //math for shuffling the card
        card.style.order = ramdomPos;
    });
})();
cards.forEach(card => card.addEventListener("click", flipCard));

//music function
function pauseAudio(){
    music.pause();
    musicOff = true;
}

//moves counter by one for each match
//star ratings
// code accredited to a fellow student which has been modified https://github.com/MattMoore050783/Dinosaurs-MS2/blob/master/assets/js/main.js
function moveCounter(){ 
    moves++;
    counter.innerHTML = moves;
    var i;
    if(moves > 14 && moves < 22){  
         for (i = 0; i < 3; i++){
            if(i > 1){
                stars[i].style.visibility = "collapse";
            }
        }
     }else if (moves > 23){
         for (i =0; i < 3; i++){
             if(i > 0){
                 stars[i].style.visibility = "collapse";
             }
         }
     }
}

//count the matches
function countCounter(){ 
      count++;
      counter2.innerHTML = count;
}

//count the time with timer
//Function from stack overflow
var time = 0;
var timer;
var minutes;
var seconds;
function startTimer() {
  timer = setInterval(function () {
    time++;
    minutes = ("0" + Math.floor(time / 60)).slice(-2);
    seconds = ("0" + (time % 60)).slice(-2);
    document.querySelector(".timer").innerHTML = minutes + ":" + seconds;
  }, 1000);
}

// congrats modal displays when matches = 8
function congrats(){
    if (count == 8){
        modal.classList.add("show");
 var starRating = document.querySelector(".stars").innerHTML;
 var timerDisplay = document.querySelector(".timer").innerHTML;

 document.getElementById("finalMove").innerHTML = moves+1;
 document.getElementById("starRating").innerHTML = starRating;
 document.getElementById("timerDisplay").innerHTML = timerDisplay;

closeModal();
  }
}

// close modal button
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        restart();
    });
}

//reloads the page to reset every thing
function restart(){
    location.reload();
    return false;
}
cards.forEach(card => {
    return card.addEventListener("click", flipCard);
});
    /*   function showCards(deifficulty) {
        var el = document.getElementById("cards");
        el.innerHTML = "";
        var imagesArray = [];
    
        getCards(deifficulty, function (data) {
            data = data.message;
    
            var backCard = '<div class = "back-side card-side"><img src="..//..//assets/images/pokemon.jpg"></div>';
    
            data.forEach(function (item) {
                var frontCard = '<div class = "front-side card-side " ><img src="' + item + '"></div>';
                imagesArray.push(frontCard);
                imagesArray.push(frontCard);
            });
    
            imagesArray = shuffle(imagesArray);
    
            var row = "";
            for (var i = 0; i < imagesArray.length; i++) {
                row += backCard + imagesArray[i];
                var row_counter = parseInt(i) + 1;
                if (row_counter % 4 == 0) {
                    el.innerHTML += "<div>" + row + "</div>";
                    row = "";
                }
            }
        });
    }
    
    /* Function Shuffle the cards from external source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array*/
    
/*    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return array;
    }
}*/
}