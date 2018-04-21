'use strict';

let numbersMax;
let numbers;
let numberToGuess;

const inputMax = document.querySelector('input[name=max]');
const inputNumberToGuess = document.querySelector('input[name=choice]');
const button = document.querySelector('button');
const inputDiv = document.querySelector('.input');
const resultDiv = document.querySelector('.result');

button.addEventListener('click', getValues);

function getValues() {
    numbersMax = Number(inputMax.value);
    numberToGuess = Number(inputNumberToGuess.value);
    numbers = Array.from(Array(numbersMax), (e, i) => i + 1);

    if (numbersMax < 10 || numbersMax === 0) {
        inputDiv.innerHTML += '<p><strong>Please pick a number larger than 10 to use as maximum<strong></p>';
    } else if (numberToGuess < 1 || numberToGuess > numbersMax) {
        inputDiv.innerHTML += '<p><strong>Please pick a number to guess that is between 1 and your maximum number<strong></p>';
    } else {
        howManyGuesses(numbersMax);
        binarySearchNum(numberToGuess);
    }
}

function howManyGuesses(number) {
    let result = Math.floor(Math.log2(number)) + 1;
    inputDiv.innerHTML = `<p>Thank you for your input: you want to let the computer find the number ${numberToGuess} 
    between 1 and ${numbersMax}!<br>Using binary search, it will take the computer at most ${result} guesses! <br>
    Let's see what the result is...</p>`;
}

function binarySearchNum(target) {
    let min = 0;
    let max = numbersMax - 1;
    let numAttempts = 0;
    let guess = Math.floor((max - min) / 2);

    while (numbers[guess] !== target) {

        guess = Math.floor((max - min) / 2) + min;
        resultDiv.innerHTML += `The computer guesses: ${numbers[guess]}<br>`;

        if (numbers[guess] > target) {
            resultDiv.innerHTML += `No, too high<br>`;
            max = guess - 1;
            numAttempts++;
        } else if (numbers[guess] < target) {
            resultDiv.innerHTML += `No, too low<br>`;
            min = guess + 1;
            numAttempts++;
        }
    }
    resultDiv.innerHTML += `<p><strong>The number to guess was: ${target} and our final (${numAttempts}x) guess was ${numbers[guess]}!</strong></p>`;
}
