const input = document.querySelector('#guess');
const buttonInput = document.querySelector('#submit');
let container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");
let random = Math.floor(Math.random() * 100) + 1;
let counter = 0;
let isGameOver = false;


resetButton.style.display = 'none';

buttonInput.addEventListener('click', checkGuess);
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        checkGuess();
    }
})

function checkGuess(){
    let userGuess = parseInt(input.value.trim());
    
    document.querySelectorAll(".feedback").forEach(el => el.remove());

    let message = document.createElement('p');
    message.classList.add('feedback');

    if (isNaN(userGuess) || input.value.trim() === '') {
        message.textContent = 'Please enter a number.';
        container.appendChild(message);
        return;
    }
    if (userGuess < random) {
        counter++;
        message.textContent = `Secret number is higher. ${counter} tries.`;
    } else if (userGuess > random) {
        counter++;
        message.textContent = `Secret number is lower. ${counter} tries.`;
    } else {
        counter++;
        message.textContent = `Congratulations! You guessed it in ${counter} tries.`;
        input.disabled = true;
        buttonInput.disabled = true;
        resetButton.style.display = 'inline';
        isGameOver = true;
    }

    container.appendChild(message);
}

resetButton.addEventListener('click', resetGame);

function resetGame(){
    input.disabled = false;
    buttonInput.disabled = false;
    counter = 0;
    document.querySelectorAll(".feedback").forEach(el => el.remove());
    input.value = '';
    random = Math.floor(Math.random() * 100) + 1;
    resetButton.style.display = 'none';
    isGameOver = false;
}