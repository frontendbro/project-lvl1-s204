import readlineSync from 'readline-sync';

const randomNumb = Math.random();

console.log('Welcome to Brain Games! \nAnswer "yes" if number even otherwise answer "no".');

const actual = readlineSync.question('May I have your name? ');

console.log('Hello ' + actual);
