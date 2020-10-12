const sideText = document.getElementById('flip-text');
const flipButton = document.getElementById('flip');
const textBox = document.getElementById('front-card');
const nextButton = document.getElementById('next-button');
let frontCounter = 0;
let backCounter = 0;

const info = {
	front: ['Hi', 'How are you?', 'Food', 'Table'],
	back: ['Holla', 'Como estas?', 'Comida', 'Messa'],
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

// let submitText = document.getElementById('set-name');
// let submitButton = document.getElementById('submit-button');

// submitButton.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	submitText.value = {};
// 	submitText.front = "PLEAE WORK"
// 	console.log(submitText);
// })

// // const text = document.querySelector('textarea');
// // const button = document.getElementById('save-button');
// // const flipButton = document.getElementById('flip');
// // const flipText = document.querySelector('h4');
// // const studyButton = document.getElementById('study');
// // const body = document.querySelector('body');
// // // const hey = 'hey';
// // let frontCard = [];
// // let backCard = [];
// // let please = {
// // 	front: frontCard,
// // 	back: backCard,
// // };

// // button.addEventListener('click', (event) => {
// // 	event.preventDefault();
// // 	if (text.value != '') {
// // 		if (flipText.innerText == 'front') {
// // 			frontCard.push(text.value);
// // 		} else if (flipText.innerText == 'back') {
// // 			backCard.push(text.value);
// // 		}
// // 	}
// // });

// // flipButton.addEventListener('click', (event) => {
// // 	event.preventDefault();
// // 	text.value = '';
// // 	if (flipText.innerText == 'front') {
// // 		flipText.innerText = 'back';
// // 	} else {
// // 		flipText.innerText = 'front';
// // 	}
// // });

// // function sad(){
// // 	for (let i = 0; i < frontCard.length; i++) {
// // 		const workPlease = document.createElement('textarea');
// // 		const maybe = document.createElement('textarea');
// // 		// workPlease.setAttribute('class', 'square');
// // 		workPlease.value = please.front[i];
// // 		maybe.value = please.back[i];
// // 		body.appendChild(workPlease);
// // 		body.appendChild(maybe);
// // 	}
// // };

// // studyButton.addEventListener('click', (event) => {
// // 	event.preventDefault();
// // 	sad();

// // });

// // //  class Card {
// // // 		constructor(front, back) {
// // // 			this.front = front;
// // // 			this.back = back;
// // // 		}

// // // 		hey(){
// // // 			return console.log(hey);
// // // 		}
// // //  }

// // //  console.loc(Card.hey());
