const sideText = document.getElementById('flip-text');
const flipButton = document.getElementById('flip');
const textBox = document.getElementById('front-card');
const nextButton = document.getElementById('next-button');
const correctButton = document.getElementById('correct-button');
const wrongButton = document.getElementById('wrong-button');
const correctCounterText = document.getElementById('correct-number');
const wrongCounterText = document.getElementById('wrong-number');
const resetButton = document.getElementById('reset-button');
const correctNumbCounter = document.getElementById('correct-number');
const wrongNumbCounter = document.getElementById('wrong-number');

const english = ['Hello','Goodbye','Thank You','Please','Excuse Me','Im Sorry','Yes','No','food',
'Car','Train','Bus','Nice to meet you','My name is ...','I dont understand','That was delicious',
'You\'re welcome','What is your name?','How far is...?','Can you write that down?'];

const spanish = ['Hola','Adiós','Gracias','Por favor','Perdóneme','Lo siento','Si','No','Comida',
'Carro','El tren','Autobús','Gusto en conocerlo','Me llamo','No entiendo','Eso estuvo delicioso',
'De nada','Cuál es su nombre','Que tan lejos esta','Puedes escribir eso'];


let frontCounter = 0;
let backCounter = 0;
let correctCounterNumber = 0;
let wrongCounterNumber = 0;

const info = {
	front: english,
	back: spanish,
};

textBox.innerText = info.front[frontCounter];

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
		frontCounter = 0;
		backCounter = 0;
		sideText.innerText = 'FRONT';
		correctNumbCounter.innerText = '0';
		wrongCounterText.innerText = '0';
		textBox.innerText = info.front[frontCounter];

	}
});

wrongButton.addEventListener('click', (event) => {
	event.preventDefault();
	wrongCounterNumber++;
	wrongCounterText.innerText = `${wrongCounterNumber}`;
});


resetButton.addEventListener('click', (event) => {
	event.preventDefault();
	frontCounter = 0;
	backCounter = 0;
	sideText.innerText = 'FRONT';
	correctNumbCounter.innerText = '0';
	wrongCounterText.innerText = '0';
	textBox.innerText = info.front[frontCounter];
})


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
