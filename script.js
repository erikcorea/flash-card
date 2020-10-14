//Variables that are get from the html files
const sideText = document.getElementById('flip-text');
const textBox = document.getElementById('front-card');
const correctCounterText = document.getElementById('correct-number');
const wrongCounterText = document.getElementById('wrong-number');
const correctNumbCounter = document.getElementById('correct-number');
const wrongNumbCounter = document.getElementById('wrong-number');

//Getting the button that will change the side of the card
const flipButton = document.getElementById('flip');
//Gets the button that will change the to the next card
const nextButton = document.getElementById('next-button');
//Gets the button that will mark if you were correct
const correctButton = document.getElementById('correct-button');
//Gets the button that will mark if you were wrong
const wrongButton = document.getElementById('wrong-button');
//Gets the button that will reset the game
const resetButton = document.getElementById('reset-button');

//Array containing the english words that will be translated to spanish
const english = ['Hello','Goodbye','Thank You','Please','Excuse Me','Im Sorry','Yes','No','food',
'Car','Train','Bus','Nice to meet you','My name is ...','I dont understand','That was delicious',
'You\'re welcome','What is your name?','How far is...?','Can you write that down?'];

//Array containing the spanish words that were translated
const spanish = ['Hola','Adiós','Gracias','Por favor','Perdóneme','Lo siento','Si','No','Comida',
'Carro','El tren','Autobús','Gusto en conocerlo','Me llamo','No entiendo','Eso estuvo delicioso',
'De nada','Cuál es su nombre','Que tan lejos esta','Puedes escribir eso'];

//Counters that tells you what place in the array you are in
let frontCounter = 0;
let backCounter = 0;
//Counter fo how many you have correct and wrong
let correctCounterNumber = 0;
let wrongCounterNumber = 0;

//Object containing the arrays
const info = {
	front: english,
	back: spanish,
};

//Setting the first  card when the page is loaded
textBox.innerText = info.front[frontCounter];

//When the button is flipped change the side text and 
//The corresponding text side
flipButton.addEventListener('click', (event) => {
	event.preventDefault();
	if (sideText.innerText == 'FRONT') {
		sideText.innerText = 'BACK';
		textBox.innerText = info.back[backCounter];
	} else {
		sideText.innerText = 'FRONT';
		textBox.innerText = info.front[frontCounter];
	}
});

//When the next button is clicked it changes to the next card
//This means that you either got it wrong or are
//Skipping the word
nextButton.addEventListener('click', (event) => {
	event.preventDefault();
	if (frontCounter < info.front.length - 1) {
		console.log('??');
		frontCounter++;
		backCounter++;
		sideText.innerText = 'FRONT';
		textBox.innerText = info.front[frontCounter];
	} else {
		frontCounter = 0;
		backCounter = 0;
		sideText.innerText = 'FRONT';
		textBox.innerText = info.front[frontCounter];
	}
});

//When the correct button is clicked it adds it to the correct score
//When you get all of them correct it resets the cards for you
correctButton.addEventListener('click', (event) => {
	event.preventDefault();
	correctCounterNumber++;
	correctCounterText.innerText = `${correctCounterNumber}`;
	info.front.splice(frontCounter,1);
	info.back.splice(backCounter,1);
	textBox.innerText = info.back[backCounter];
	textBox.innerText = info.front[frontCounter];

	if(correctCounterNumber > 19){
		location.reload();
	}
});

//When the wrong button is clicked it add it to the wrong score
wrongButton.addEventListener('click', (event) => {
	event.preventDefault();
	wrongCounterNumber++;
	wrongCounterText.innerText = `${wrongCounterNumber}`;
});

//Resets the cards and score
resetButton.addEventListener('click', (event) => {
	event.preventDefault();
	location.reload();
});


const openButton = document.getElementById('openModal');

const modal = document.getElementById('modal');

const closeButton = document.getElementById('close');

const openModal = () => {
	modal.style.display = 'block';
};

const closeModal = () => {
	modal.style.display = 'none';
};

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

//My failed attempts at strech goals
// const sideText = document.getElementById('flip-text');
// const flipButton = document.getElementById('flip');
// const textBox = document.getElementById('front-card');
// const nextButton = document.getElementById('next-button');
// const correctButton = document.getElementById('correct-button');
// const wrongButton = document.getElementById('wrong-button');
// const correctCounterText = document.getElementById('correct-number');
// const wrongCounterText = document.getElementById('wrong-number');
// let english = [
// 	'Hello',
// 	'Goodbye',
// 	'Thank You',
// 	'Please',
// 	'Excuse Me',
// 	'Im Sorry',
// 	'Yes',
// 	'No',
// 	'food',
// ];

// let frontCounter = 0;
// let backCounter = 0;
// let correctCounterNumber = 0;
// let wrongCounterNumber = 0;

// const info = {
// 	front: ['Hello', ''],
// 	back: ['Hola', 'Como estas?', 'Comida', 'Mesa', 'korean'],
// };

// textBox.value = info.front[frontCounter];

// flipButton.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	if (sideText.innerText == 'front') {
// 		sideText.innerText = 'back';
// 		textBox.value = info.back[backCounter];
// 	} else {
// 		sideText.innerText = 'front';
// 		textBox.value = info.front[frontCounter];
// 	}
// });

// nextButton.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	if (frontCounter < info.front.length - 1) {
// 		console.log('??');
// 		frontCounter++;
// 		backCounter++;
// 		sideText.innerText = 'front';
// 		textBox.value = info.front[frontCounter];
// 	} else {
// 		frontCounter = 0;
// 		backCounter = 0;
// 		sideText.innerText = 'front';
// 		textBox.value = info.front[frontCounter];
// 	}
// });

// correctButton.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	correctCounterNumber++;
// 	correctCounterText.innerText = `${correctCounterNumber}`;
// });

// wrongButton.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	wrongCounterNumber++;
// 	wrongCounterText.innerText = `${wrongCounterNumber}`;
// });

















































// const form = document.querySelector('form');
// const input = document.querySelector('input[type=text]');
// const apiKey = '7f904d33847f4dda96f4d436c4a12e65';

// form.addEventListener('submit', (event) => {
// 	event.preventDefault();

// 	let url = ``
// })


// const sideText = document.getElementById('flip-text');
// const frontTextBox = document.getElementById('front-card');
// const backTextBox = document.getElementById('back-card');
// const flipButton = document.getElementById('flip');
// const nextButton = document.getElementById('next-button');
// const titleText = document.getElementById('set-name');
// const form = document.querySelector('form');

// // const newSet = {title: 'Spanish', cards: []}
// // localStorage.setItem('Spanish', newSet)

// form.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	const newTitle = titleText.value;
// 	const newSet = {title: newTitle, cards: []};
// 	localStorage.setItem(newTitle, JSON.stringify(newSet));
// 	// console.log(JSON.parse(localStorage.getItem(newTitle)));
// 	const set = JSON.parse(localStorage.getItem(newTitle));
// 	console.log(set.cards);
// });
