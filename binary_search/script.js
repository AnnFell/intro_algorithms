'use strict';

const numbersMax = 1000;
const numbers = Array.from(Array(numbersMax), (e, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * (numbersMax + 1));

console.log(numbers);
console.log(numberToGuess);

function binarySearchNum(target) {
    let min = 0;
    let max = numbersMax - 1;
    let numAttempts = 0;
    let guess = Math.floor((max - min) / 2);

    while (numbers[guess] !== target) {

        guess = Math.floor((max - min) / 2) + min;
        console.log(`The current guess is ${guess}`);

        if (numbers[guess] > target) {
            max = guess - 1;
            console.log(`No, too high`);
            numAttempts++;
        } else {
            min = guess + 1;
            console.log(`No, too low`);
            numAttempts++;
        }
    }
    console.log(`The number to guess was: ${target} and our final (${numAttempts}x) guess was ${numbers[guess]}!`);
}

binarySearchNum(numberToGuess);