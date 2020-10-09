console.log("You're doing great!")




const game = {
    //timer set to 30
    timer: 60,
    //starts at round 1
    round: 1,
    //empty card array
    cardDeck: [],
    //cards to be moved to grid for the round
    cardsForRound: [],
    //container for the cards to go into
    selectedCards: [],
    //points?
    matchedCards: 0,
    //if matchedCards = 10 before timer = 0, you win!


getCards : function() {
    for (i=1; i < 29; i++) {
    //creating the img element
    let card = document.createElement('img')
    //set source attribute so the actual image is pulled
    card.setAttribute('src-value', 'cards/Card-' + [i] + '.jpg')
    card.setAttribute('id', [i])
    this.cardDeck.push(card)
    }
    console.log(this.cardDeck)
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
    //if (this.round == 1){
        //5 card images will go into the game, making 10 total
        for(let i = 0; i < 10; i++) {
            //takes first card
            let temp2 = this.cardDeck.shift()
            //set value as the same
            temp2.setAttribute('value', [i])
            //pushes it to new array TWICE - to be able to match cards
            this.cardsForRound.push(temp2)
            this.cardsForRound.push(temp2)
        }
    //} else if (this.round == 2) {
    //    for(let i=0; i < 10; i++){
    //        temp2 = this.cardDeck.shift()           
    //        temp2.setAttribute('value', [i])
    //        this.cardsForRound.push(temp2)
    //        this.cardsForRound.push(temp2)
    //    }
//
    //} else if (this.round == 3){
    //    for(let i=0; i < 15; i++){
    //        temp2 = this.cardDeck.shift()
    //        temp2.setAttribute('value', [i])
    //        this.cardsForRound.push(temp2)
    //        this.cardsForRound.push(temp2)
    //    }
    //} else if (this.round == 4){
    //    for(let i=0; i < 20; i++){
    //        temp2 = this.cardDeck.shift()
    //        this.cardsForRound.push(temp2)
    //        this.cardsForRound.push(temp2)
    //    }
    //} else {
    //    console.log('game over')
    //} 

},

shuffleCards2 : function () {
    for (let i = this.cardsForRound.length - 1; i > 0; i--) {
        //this is the shuffle, figuring out the new position that where each card will go
        let newPos2 = Math.floor(Math.random() * (i+1));
        //temporary holding spot for the card
        let temp2 = this.cardsForRound[i]
        this.cardsForRound[i] = this.cardsForRound[newPos2]
        this.cardsForRound[newPos2] = temp2
    }
},

//this function doesnt work - debug later
setUpTimer : function () {
    game.timer = 60
    startButton.removeEventListener('click', game.startGame)
    let timerInterval = setInterval (() => {
        if (game.timer === 0) {
            clearInterval(timerInterval)
            if (this.matchedCards !== 10){
                game.endGame()
            }
        } else {
            game.timer--
        }

        //get it to show up in the DOM
        document.getElementById('timer').innerHTML = `Timer: ${game.timer}s`
    }, 1000)
},

//GamePlay Function
gamePlay : function() {
    document.onclick = function(e) {
        let clickedCard = e.target
        let cardBack = e.target.getAttribute('src-value', clickedCard)
        clickedCard.setAttribute('src', cardBack)
        game.selectedCards.push(clickedCard)
        //move selected card to new array
        if (game.selectedCards.length == 2){
            //compare src instead of whole target
            if (game.selectedCards[0].currentSrc == game.selectedCards[1].currentSrc){
                //game.selectedCards[0].removeEventListener('click', game.gamePlay)
                //game.selectedCards[1].removeEventListener('click', game.gamePlay)
                game.selectedCards.shift();
                game.selectedCards.shift();
                console.log('you got a match!')
                //remove event listener
                game.matchedCards++
                document.getElementById('matchedCards').innerHTML = `Matched Cards: ${game.matchedCards}`
                console.log(game.matchedCards)
            } else if (game.selectedCards[0].currentSrc !== game.selectedCards[1].currentSrc) {
                console.log('these are not a match')
                setTimeout(function() {
                    game.selectedCards[0].setAttribute('src', 'cards/card-back.jpg')
                    game.selectedCards[1].setAttribute('src', 'cards/card-back.jpg')
                    game.selectedCards.shift();
                    game.selectedCards.shift();
                }, 500)
            } else {
                console.log ('error')
            }
            }
        if (game.matchedCards == 10){
            game.winGame()
        }
        }
},

winGame: function(){
    console.log('You win!')
    game.timer = 0
    let allCards = document.querySelectorAll('img')
    for (i=0; i < allCards.length; i++){
        let card1 = allCards[i]
        card1.remove()
    }
    let youWin = document.createElement('p')
    youWin.setAttribute('class','youWin')
    document.querySelector('.cardContainer').append(youWin)
    youWin.innerHTML = "You win! Press start to play again.";
    startButton.addEventListener('click',game.startGame)
    //if (document.querySelector)
},

endGame : function() {
    if (game.timer == 0 && this.matchedCards < 10){
        let allCards = document.querySelectorAll('img')
        for (i=0; i < allCards.length; i++){
            let card1 = allCards[i]
            card1.remove()
        }
        console.log('try again')
        let tryAgain = document.createElement('p')
        tryAgain.setAttribute('class','tryAgain')
        document.querySelector('.cardContainer').append(tryAgain)
        tryAgain.innerHTML = "Let's try again! Press the start button to begin.";
        startButton.addEventListener('click',game.startGame)
        //clear arrays
    } else {
        let allCards = document.querySelectorAll('img')
        for (i=0; i < allCards.length; i++){
            let card1 = allCards[i]
            card1.remove()
        }
            let tryAgain = document.createElement('p')
            tryAgain.setAttribute('class','tryAgain')
            document.querySelector('.cardContainer').append(tryAgain)
            tryAgain.innerHTML = "Let's try again! Press the start button to begin.";
            startButton.addEventListener('click',game.startGame)
        //clear arrays
    }

},

trial : function() {
    for(i = 0; i < game.cardsForRound.length; i++) {
        let img = document.createElement('img')
        let srcValue = this.cardsForRound[i].getAttribute('src-value')
        img.setAttribute('src-value', srcValue)
        img.setAttribute('class','card')
        img.setAttribute('src','cards/card-back.jpg')
        img.addEventListener('click', game.gamePlay)
        document.querySelector('.cardContainer').append(img)
    }
},

startGame : function() {
    //clean out arrays
    game.matchedCards = 0
    game.cardDeck = []
    game.cardsForRound = []
    game.selectedCards = []

    game.getCards()
    game.shuffleCards()
    game.getCardsForRound()
    game.shuffleCards2()
    game.setUpTimer()
    game.trial()

    //update matched cards HTML
    document.getElementById('matchedCards').innerHTML = `Matched Cards: ${game.matchedCards}`

    //removing p tags from previous games
    let p = document.querySelector('.tryAgain')
    if (p !== null){
        p.remove()
    }
    let p2 = document.querySelector('.youWin')
    if (p2 !== null){
        p2.remove()
    }
    }
}





// Making start and reset button
const startButton = document.getElementById('start');
const restartButton = document.getElementById('reset');

//need to fix restart button
restartButton.addEventListener('click', game.endGame)
startButton.addEventListener('click', game.startGame)

