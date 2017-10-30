import readlineSync from 'readline-sync';

console.log("$ src/bin/brain-games.js \nWelcome to the Brain Games!");

const actual = readlineSync.question('May I have your name? ');
console.log("Hello " + actual);