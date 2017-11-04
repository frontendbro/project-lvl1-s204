import readlineSync from 'readline-sync';

export const welcome = () => {
 console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".');
};

export const meetUser = () => {
	const userName = readlineSync.question('May I have your name?: ');
	console.log(`Hello, ${userName}! \n`);
};

export const question = () => {
	let numRandom = Math.random();
	console.log(`Question: ${numRandom}! \n`);
}

