const container = document.querySelector('#container');
const input = document.querySelector('#guess');
const submitButton = document.querySelector('#submit');
const resetButton = document.querySelector('#reset');

let counter = 0;
let random = Math.floor(Math.random() * 100) + 1;

resetButton.style.display = 'none';

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        guessNumber();
    }
})

function guessNumber(){
    let guess = parseInt(input.value.trim());

    document.querySelectorAll('.feedback').forEach((el) => el.remove());

    let attempt = document.createElement('p');
    let message = document.createElement('span');
    message.classList.add('feedback');

    if (isNaN(guess)){
        message.textContent = 'Please insert a number.';
        container.appendChild(message);
        return;
    }
    if (guess < 0 || guess > 100){
        message.textContent = 'Please insert a number between 0 and 100.'
        container.appendChild(message);
        return;
    }
    if (guess < random){
        counter++;
        message.textContent = `Secret number is higher. ${attemptMessage(counter)}`
        attempt.textContent = `You guessed: ${guess}`;
        container.appendChild(attempt);
    }
    else if (guess > random){
        counter++;
        message.textContent = `Secret number is lower. ${attemptMessage(counter)}`;
        attempt.textContent = `You guessed: ${guess}`;
        container.appendChild(attempt);
    }
    else if (guess === random){
        counter++;
        message.textContent = `Congratulations! You guessed it in ${attemptMessage(counter)}`;
        attempt.textContent = `You guessed: ${guess}`;
        container.appendChild(attempt);

        resetButton.style.display = 'inline';
        submitButton.style.display = 'none';
    }
    container.appendChild(message);
}

function resetGame(){
    container.querySelectorAll('p').forEach((element) => {
        element.remove();
    })

    document.querySelectorAll('.feedback').forEach((el) => el.remove());

    input.value = '';
    counter = 0;
    submitButton.style.display = 'inline';
    resetButton.style.display = 'none';
    random = Math.floor(Math.random() * 100) + 1;
}

function attemptMessage(counter){
    if (counter === 1){
        return `${counter} try.`
    } else {
        return `${counter} tries.`
    }
}

submitButton.addEventListener('click', guessNumber);
resetButton.addEventListener('click', resetGame);
