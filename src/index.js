import readlineSync from 'readline-sync';

const numRandom = Math.floor(99.9 * Math.random());
const userName = readlineSync.question('May I have your name?: ');

export const welcome = () => {
  console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".');
};

export const meetUser = () => {
  console.log(`Hello, ${userName}! \n`);
};

export const question = () => {
  console.log(`Question: ${numRandom} ! \n`);
};

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');

  if (numRandom % 2 === 1 && answer === 'yes') {
    console.log('Correct!');
  } else if (numRandom % 2 === 0 && answer === 'no') {
    console.log('Correct!');
  } else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName} !`);
  }
};

