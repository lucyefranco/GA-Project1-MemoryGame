console.log("You're doing great!")


const game = {
    timer: 60,
    round: 1,
    cardDeck: [],
    cardsForRound: [],
    selectedCards: [],
    matchedCards: 0,


getCards : function() {
    for (i=1; i < 29; i++) {
    let card = document.createElement('img')
    card.setAttribute('src-value', 'cards/Card-' + [i] + '.jpg')
    card.setAttribute('id', [i])
    this.cardDeck.push(card)
    }
    console.log(this.cardDeck)
    },

shuffleCards : function() {
    for (let i = this.cardDeck.length - 1; i > 0; i--) {
        let newPos = Math.floor(Math.random() * (i+1));
        let temp = this.cardDeck[i]
        this.cardDeck[i] = this.cardDeck[newPos]
        this.cardDeck[newPos] = temp
    }
},
getCardsForRound : function() {
    for(let i = 0; i < 10; i++) {
        let temp2 = this.cardDeck.shift()
        temp2.setAttribute('value', [i])
        this.cardsForRound.push(temp2)
        this.cardsForRound.push(temp2)
        }
},

shuffleCards2 : function () {
    for (let i = this.cardsForRound.length - 1; i > 0; i--) {
        let newPos2 = Math.floor(Math.random() * (i+1));
        let temp2 = this.cardsForRound[i]
        this.cardsForRound[i] = this.cardsForRound[newPos2]
        this.cardsForRound[newPos2] = temp2
    }
},

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
        if (game.selectedCards.length == 2){
            if (game.selectedCards[0].currentSrc == game.selectedCards[1].currentSrc){
                game.selectedCards.shift();
                game.selectedCards.shift();
                console.log('you got a match!')
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
    restartButton.removeEventListener('click', game.endGame)
    game.timer = 0
    let allCards = document.querySelectorAll('img')
    for (i=0; i < allCards.length; i++){
        let card1 = allCards[i]
        card1.remove()
    }
    if (document.querySelector('.results') == null){
        let youWin = document.createElement('p')
        youWin.setAttribute('id','youWin')
        youWin.setAttribute('class','results')
        document.querySelector('.cardContainer').append(youWin)
        youWin.innerHTML = "You win! Press start to play again.";
        startButton.addEventListener('click',game.startGame)
    }


},

endGame : function() {
    restartButton.removeEventListener('click', game.endGame)
    if (game.timer == 0 && this.matchedCards < 10){
        let allCards = document.querySelectorAll('img')
        for (i=0; i < allCards.length; i++){
            let card1 = allCards[i]
            card1.remove()
        }
        console.log('try again')
        let tryAgain = document.createElement('p')
        tryAgain.setAttribute('class','results')
        tryAgain.setAttribute('id','tryAgain')
        document.querySelector('.cardContainer').append(tryAgain)
        tryAgain.innerHTML = "Let's try again! Press the start button to begin.";
        startButton.addEventListener('click',game.startGame)
    } else {
        let allCards = document.querySelectorAll('img')
        for (i=0; i < allCards.length; i++){
            let card1 = allCards[i]
            card1.remove()
        }
        if (document.querySelector('.results') == null){
            let tryAgain = document.createElement('p')
            tryAgain.setAttribute('class','results')
            tryAgain.setAttribute('id', 'tryAgain')
            document.querySelector('.cardContainer').append(tryAgain)
            tryAgain.innerHTML = "Let's try again! Press the start button to begin.";
            startButton.addEventListener('click',game.startGame)
        }
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
    game.matchedCards = 0
    game.cardDeck = []
    game.cardsForRound = []
    game.selectedCards = []
    game.timer = 60

    game.getCards()
    game.shuffleCards()
    game.getCardsForRound()
    game.shuffleCards2()
    game.setUpTimer()
    game.trial()

    document.getElementById('matchedCards').innerHTML = `Matched Cards: ${game.matchedCards}`

    let p = document.querySelector('.results')
    if (p !== null){
        p.remove()
    }
}
}





// Making start and reset button
const startButton = document.getElementById('start');
const restartButton = document.getElementById('reset');

//need to fix restart button
restartButton.addEventListener('click', game.endGame)
startButton.addEventListener('click', game.startGame)

