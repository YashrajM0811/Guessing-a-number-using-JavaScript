let input = document.getElementById('input');
let btn = document.getElementById("btn");
let wrong = document.getElementById("wrong");
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 1000);
console.log(answer);

let numGuesses = 0;
btn.addEventListener("click", () => {
    guessesNumber();
});

function guessesNumber() {
    if (input.value < 1 || input.value > 1000 || isNaN(input.value)) {
        wrong.innerHTML = "Enter between 1 to 999";
    } else {
        numGuesses++;
        guesses.innerHTML = "Number of Guesses you took: " + numGuesses;
        if(input.value > answer){
            wrong.innerHTML = "You guessed it to High!";
            input.value = "";
        }
        else if(input.value < answer){
            wrong.innerHTML = "You guessed it to Low!";
            input.value = "";
        }
        else{
            wrong.innerHTML = "Congratulations you gessed the correct answer";
            setTimeout(() =>{
                resetGame();
            }, 5000)
        }
    }
}


function resetGame(){
    numGuesses = 0;
    answer = Math.floor(Math.random()*1000);
    input.value = "";
    guesses.innerHTML = "Number of Guess: 0";
}