console.log("You're doing great!")

const startButton = document.querySelector('.start')
const restartButton = document.querySelector('.reset')

const game = {
    //timer set to 30
    timer = 30,
    //starts at round 1
    round = 1,
    //empty card array
    cards = [],



}


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