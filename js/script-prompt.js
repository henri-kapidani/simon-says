/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* blocco del main thread (da non fare mai)
setTimeout(myFunction, 3000);
const end = Date.now() + 10 * 1000;
let iterations = 0
while(Date.now() < end) {
	iterations++;
}
console.log(iterations);

console.log('Ciao');
console.log('Ancora un evento sincrono');

function myFunction() {
   console.log('Ciao Asincrono');
}
*/


const eleOutput = document.getElementById('output');

// generare 5 numeri random diversi
const arrRandom = [];
for (let i = 0; i < 5; i++) {
	let randomNumber;
	do {
		randomNumber = getRandomBetween(1, 100);
	} while (arrRandom.includes(randomNumber))

	arrRandom.push(randomNumber)
}
console.log('arrRandom', arrRandom);

// visualizzarli nel dom
eleOutput.innerHTML = arrRandom;

// dopo 30 secondi cancellare il dom
setTimeout(() => {
	eleOutput.innerHTML = '';
}, 3000);

// Continuare il gioco
setTimeout(finishGame, 3100);


function getRandomBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function finishGame() {
	// chiedere i numeri all'utente
	const arrUserNumbers = [];
	for (let i = 0; i < 5; i++) {
		let userNumber;
		let message = 'Inserisci un numero';
		do {
			userNumber = parseInt(prompt(message));
			if (arrUserNumbers.includes(userNumber)) {
				message = "Devi inserire numeri diversi. Questo ce l'avevi già dato";
			}
		} while (arrUserNumbers.includes(userNumber));

		arrUserNumbers.push(userNumber);
	}
	console.log('arrUserNumbers', arrUserNumbers);

	// dire quanti sono i numeri indovinati
	let arrGuessed = [];
	for (let i = 0; i < 5; i++) {
		/* se l'ordine non è importante */
		/*
		if (arrRandom.includes(arrUserNumbers[i])) {
			arrGuessed.push(arrUserNumbers[i]);
		}
		*/

		/* se l'ordine è importante */
		if (arrRandom[i] == arrUserNumbers[i]) {
			arrGuessed.push(arrUserNumbers[i]);
		}
	}
	console.log('You guessed:', arrGuessed.length);
	console.log('arrGuessed', arrGuessed);
}
