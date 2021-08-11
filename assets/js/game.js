// Collect the data of the cards and deck so we can process it

let card = document.getElementsByClassName("card");
let cards = [...card];
let deck = document.getElementById("card-deck");
let moves = 0;
let counter = document.querySelector(".moves");
let matchedCard = document.getElementsByClassName("match");
let openedCards = [];
let totalMatch = 0;

// counting the time 

let second = 0, minute = 0; hour = 0;
let timer = document.querySelector(".timer");
let interval;

// toggle the status of the cards to visible

let displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

// Shuffle the cards
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

document.body.onload = startGame();

// Shuffle the cards and reset all counters once the game get started
function startGame(){
    totalMatch=0;
    openedCards = [];
    cards = shuffle(cards);
    for (let i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    moves = 0;
    counter.innerHTML = moves;
    second = 0;
    minute = 0; 
    hour = 0;
    let timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}

// check if they opened cards were matched or not

function cardOpen() {
    openedCards.push(this);
    let len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].dataset.framework === openedCards[1].dataset.framework){
            matched();
        } else {
            unmatched();
        }
    }
}

//if cards matched 
function matched(){
        openedCards[0].classList.add("match", "disabled");
        openedCards[1].classList.add("match", "disabled");
        openedCards[0].classList.remove("show", "open", "no-event");
        openedCards[1].classList.remove("show", "open", "no-event");
        openedCards = [];
        totalMatch++;
        if(totalMatch == 8)
        congratulations();
}

// if cards not matched

function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedCards = [];
    },1100);
}

// diable the choosen card to compare it

function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

// enable the card and disable the matched cards

function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(let i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}

// increase the counter

function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    if(moves == 1){
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
    }
    
}

// Start the timer and increase the seconds then minutes then hours

function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

for (let i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
}

// Congratulations function

function congratulations(){
    if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;

        // show congratulations alert
        alert('Congratulations you have fininshed the game in '+ finalTime);
       startGame();

    };
}