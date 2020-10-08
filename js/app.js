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
    selectedCards: [],


getCards : function() {
    console.log("this function is working")
    for (i=1; i < 29; i++) {
    //creating the img element
    let card = document.createElement('img')
    //set source attribute so the actual image is pulled
    card.setAttribute('src-value', 'cards/Card-' + [i] + '.jpg')
    //card.setAttribute('id', [i])
    this.cardDeck.push(card)
    }
    //don't double the cards here to make sure all matching cards get pulled together
    },

    //Randomizing the cards that will be pulled
shuffleCards : function() {
    console.log("this function is working")
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
    console.log("the getCardsForRound function works")
    if (this.round == 1){
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
    }
},

shuffleCards2 : function () {
    console.log("shuffleCards2 works")
    for (let i = this.cardsForRound.length - 1; i > 0; i--) {
        //this is the shuffle, figuring out the new position that where each card will go
        let newPos2 = Math.floor(Math.random() * (i+1));
        //temporary holding spot for the card
        let temp2 = this.cardsForRound[i]
        this.cardsForRound[i] = this.cardsForRound[newPos2]
        this.cardsForRound[newPos2] = temp2
    }
    console.log(this.cardsForRound)
},

//this function doesnt work - debug later
setUpTimer : function () {
    let timerInterval = setInterval (() => {
        timer = 30
        //what do we do each second
        if (timer === 0) {
            clearInterval(timerInterval)
        } else {
            timer--
        }
        //get it to show up in the DOM
        document.getElementById('timer').innerHTML = `timer: ${timer}s`
    }, 1000)
},

//GamePlay Function
gamePlay : function() {
    console.log("you clicked a card!")
    document.onclick = function(e) {
        let clickedCard = e.target.getAttribute('src-value')
        e.target.setAttribute('src', clickedCard)
        game.selectedCards.push(clickedCard)
        //move selected card to new array
        console.log(game.selectedCards)
        if (game.selectedCards.length == 2){
            if (game.selectedCards[0] == game.selectedCards[1]){
                game.selectedCards.shift();
                game.selectedCards.shift();
                console.log('you got a match!')
            //move out of array
            //change class to completed
            } else if (game.selectedCards[0] !== game.selectedCards[1]) {

                let changeBack = document.getAttribute('src', game.selectedCards[0])
                changeBack.setAttribute('src','cards/card-back.jpg')
                game.selectedCards.shift();
                game.selectedCards.shift();
                console.log('these are not a match')
            } else {
                console.log ('error')
            }

            }


        }

},

trial : function() {
    console.log(game.cardsForRound.length)
    for(i = 0; i < game.cardsForRound.length; i++) {
        console.log(i)
        //let img = this.cardsForRound[i]
        let img = document.createElement('img')
        let srcValue = this.cardsForRound[i].getAttribute('src-value')
        img.setAttribute('src-value', srcValue)
        img.setAttribute('class','card')
        img.setAttribute('src','cards/card-back.jpg')
        img.addEventListener('click', game.gamePlay)
        document.querySelector('.cardContainer').append(img)

        //because there's two of the same with image value???
        //should I create a new element still but set the src-value to this.cardsforround[i].src-value
    }
},


    //create divs and assign 
startGame : function() {
    game.getCards()
    game.shuffleCards()
    game.getCardsForRound()
    game.shuffleCards2()
    game.setUpTimer()
    game.trial()
    }
}





// Making start and reset button
const startButton = document.getElementById('start');
const restartButton = document.querySelector('#reset');

startButton.addEventListener('click', game.startGame)

