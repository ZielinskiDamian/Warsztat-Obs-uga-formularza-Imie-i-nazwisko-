let form = document.getElementById('form');
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let sub = document.getElementById('sub');

// let aaa = document.querySelector('name="fname"');
// console.log(sub);

const subform = (event) => {
	event.preventDefault();
	let fName = document.getElementById('fName');
	let lName = document.getElementById('lName');
	console.log(`Imię ${fName.value} Nazwisko ${lName.value}`);
};

form.addEventListener('submit', subform);
