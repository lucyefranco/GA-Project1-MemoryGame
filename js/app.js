console.log("You're doing great!")

const startButton = document.querySelector('.start')
const restartButton = document.querySelector('.reset')

const game = {
    //timer set to 30
    timer: 30,
    //starts at round 1
    round: 1,
    //empty card array
    cardDeck: [],
    //cards to be moved to grid

    //Moving the cards into the array
getCards : function() {
    for (i=1; i < 29; i++) {
    //creating the img element
    let card = document.createElement('img')
    //set source attribute so the actual image is pulled
    card.setAttribute('src', 'cards/Card-' + [i] + '.jpg')
    card.setAttribute('id', [i])
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
moveCardsToGrid : function(){
    if (this.round == 1){
        //5 card images will go into the game, making 10 total
        for(let i = 0; i < 6; i++) {
            //shift function
        } 

    } else if (this.round == 2) {
        for(let i=0; i < 11; i++){
        //shift function
        }

    } else if (this.round == 3){
        for(let i=0; i < 16; i++){
            //shift function
        }
    }
},
    
}

    //shuffle cards here

    //pull out the actual cards that will be used

    //double the cards

    //create back of cards into a grid

    //

}

game.getCards()
console.log(game.cardDeck)
game.shuffleCards()
console.log(game.cardDeck)

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



//FUNCTION - matching cards?
    //by value? by class?
    //add event listeners to cards through this function?



//Problems to solve
    //how do you end the game??
    //rounds completed?



//event-listener button 
    //what happens when you press the 

//event-listener cards