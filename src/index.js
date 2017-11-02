import readlineSync from 'readline-sync';

export const welcome = () => {
 console.log('Welcome to the Brain Games! \n');
};

export const meetUser = () => {
	const userName = readlineSync.question('May I have your name?: ');
	console.log(`Hello, ${userName}! \n`);
};

