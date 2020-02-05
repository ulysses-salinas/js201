// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors (throw1, throw2){
    let arr = ['rock','paper','scissors']
    if (throw1 === arr[0] & throw2 === arr[1]){
      return 'player 2'
    }
    else if (throw1 === arr[1] && throw2 === arr[2]){
      return 'player 2'
    }
    else if (throw1 === arr[2] && throw2 === arr[0]){
      return 'player 2'
    }
    else if (throw1 === throw2){
      return 'draw'
    }
    else {return 'player 1'
    }
    }
    rockPaperScissors('paper','rock')