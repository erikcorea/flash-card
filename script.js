const sideText = document.getElementById('flip-text');
const flipButton = document.getElementById('flip');
const textBox = document.getElementById('front-card');
const nextButton = document.getElementById('next-button');
const correctButton = document.getElementById('correct-button');
const wrongButton = document.getElementById('wrong-button');
const correctCounterText = document.getElementById('correct-number');
const wrongCounterText = document.getElementById('wrong-number');

let frontCounter = 0;
let backCounter = 0;
let correctCounterNumber = 0;
let wrongCounterNumber = 0;

const info = {
	front: ['Hi', 'How are you?', 'Food', 'Table'],
	back: ['Hola', 'Como estas?', 'Comida', 'Mesa'],
};

textBox.value = info.front[frontCounter];

flipButton.addEventListener('click', (event) => {
	event.preventDefault();
	if (sideText.innerText == 'front') {
		sideText.innerText = 'back';
		textBox.value = info.back[backCounter];
	} else {
		sideText.innerText = 'front';
		textBox.value = info.front[frontCounter];
	}
});

nextButton.addEventListener('click', (event) => {
	event.preventDefault();
	if (frontCounter < info.front.length - 1) {
		console.log('??');
		frontCounter++;
		backCounter++;
		sideText.innerText = 'front';
		textBox.value = info.front[frontCounter];
	} else {
		frontCounter = 0;
		backCounter = 0;
		sideText.innerText = 'front';
		textBox.value = info.front[frontCounter];
	}
});

correctButton.addEventListener('click', (event) => {
	event.preventDefault();
	correctCounterNumber++;
	correctCounterText.innerText = `${correctCounterNumber}`;
});

wrongButton.addEventListener('click', (event) => {
	event.preventDefault();
	wrongCounterNumber++;
	wrongCounterText.innerText = `${wrongCounterNumber}`;
});

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
