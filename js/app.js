console.log("You're doing great!")




const game = {
    //timer set to 30
    timer: 30,
    //starts at round 1
    round: 1,
    //empty card array
    cardDeck: [],
    //cards to be moved to grid for the round
    cardsForRound: [],
    //container for the cards to go into


getCards : function() {
    for (i=1; i < 29; i++) {
    //creating the img element
    let card = document.createElement('img')
    //set source attribute so the actual image is pulled
    card.setAttribute('src', 'cards/Card-' + [i] + '.jpg')
    card.setAttribute('id', [i])
    card.setAttribute('value', [i])
    this.cardDeck.push(card)
    }
    //don't double the cards here to make sure all matching cards get pulled together
    },

    //Randomizing the cards that will be pulled
shuffleCards : function() {
    for (let i = this.cardDeck.length - 1; i > 0; i--) {
        //this is the shuffle, figuring out the new position that where each card will go
        let newPos = Math.floor(Math.random() * (i+1));
        //temporary holding spot for the card
        let temp = this.cardDeck[i]
        this.cardDeck[i] = this.cardDeck[newPos]
        this.cardDeck[newPos] = temp
    }
},
    //assigning the cards that will go into the game
getCardsForRound : function() {
    if (this.round == 1){
        //5 card images will go into the game, making 10 total
        for(let i = 0; i < 5; i++) {
            //takes first card
            let temp2 = this.cardDeck.shift()
            //pushes it to new array TWICE - to be able to match cards
            this.cardsForRound.push(temp2)
            this.cardsForRound.push(temp2)
        } 
    } else if (this.round == 2) {
        for(let i=0; i < 10; i++){
            temp2 = this.cardDeck.shift()
            this.cardsForRound.push(temp2)
            this.cardsForRound.push(temp2)
        }

    } else if (this.round == 3){
        for(let i=0; i < 15; i++){
            temp2 = this.cardDeck.shift()
            this.cardsForRound.push(temp2)
            this.cardsForRound.push(temp2)
        }
    } else if (this.round == 4){
        for(let i=0; i < 20; i++){
            temp2 = this.cardDeck.shift()
            this.cardsForRound.push(temp2)
            this.cardsForRound.push(temp2)
        }
    } else {
        console.log('game over')
    }
},

shuffleCards2 : function () {
    for (let i = this.cardsForRound.length - 1; i > 0; i--) {
        //this is the shuffle, figuring out the new position that where each card will go
        let newPos2 = Math.floor(Math.random() * (i+1));
        //temporary holding spot for the card
        let temp2 = this.cardsForRound[i]
        this.cardsForRound[i] = this.cardDeck[newPos2]
        this.cardsForRound[newPos2] = temp2
    }
},
    //create divs and assign 
startGame : function() {
    game.getCards()
    game.shuffleCards()
    game.getCardsForRound()
    game.shuffleCards2()
    
    //make the amount of divs needs per round
    //can be done in two ways - if/else for each round, or loop through length of array
    //need to be able to randomize assigning elements of the array to the div
    for(i = 0; i < this.cardsForRound.length; i++) {
        let img = document.createElement('img')
        img.setAttribute('class','card')
        img.setAttribute('src','cards/card-back.jpg')
        document.querySelector('#cardContainer').appendChild(img)
    }


}
}

    //create back of cards into a grid

    //



//FUNCTION - set up cards

    //depending on round number, how many cards are pulled?
    //put the cards in the array
    //do I make two images? do I double it? It's going to be easier if you just make two files


//FUNCTION - timer
    //does this work??????
function setUpTimer (whateverTime) {
    const timerInterval = setInterval (() => {
        timer = whateverTime
        //what do we do each second
        if (timer === 0) {
            clearInterval(timerInterval)
        } else {
            timer--
        }
        //get it to show up in the DOM
        document.getElementById('timer').innerHTML = `timer: ${timer}s`
    }, 1000)
}



const startButton = document.querySelector('#start');
const restartButton = document.querySelector('#reset');

startButton.addEventListener('click',game.startGame())


//FUNCTION - matching cards?
    //by value? by class?
    //add event listeners to cards through this function?



//Problems to solve
    //how do you end the game??
    //rounds completed?



//event-listener button 
    //what happens when you press the 
    
    //event-listener cards