alert('welcome to JavaScript!');
let username = prompt('please enter your user name');

document.getElementById('username').textContent = username; 



document.getElementById('rename').addEventListener('click', (e) => {
  username = prompt('Enter your new name');
  document.getElementById('username').textContent = username;
})

document.getElementById('game').addEventListener('click', (e) => { 
  play_rps(); 
})

alert('welcome ' + username + '!');
alert('you are going to play rock paper scissors vs a computer');
alert('if you win, you receive a cake, lose, receive coal!');


function play_rps() {
document.getElementById('rps').innerHTML = "";
let choice = prompt('choose one: rock, paper, or scissors');

while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
  alert('invalid choice!');
  choice = prompt('choose one: rock, paper, or scissors');
}

const computer_choices = ['rock', 'paper', 'scissors'];
const randomIndex = Math.floor(Math.random() * computer_choices.length);
const computer_choice = computer_choices[randomIndex];

let coal = document.createElement('img');
coal.src = './assets/coal.jpg';
coal.width = 200;
coal.height = 200;

let cake = document.createElement('img');
cake.src = './assets/cake_image.jpg';
cake.width = 200;
cake.height = 200;



if (computer_choice === choice) {
  alert(`Player chose ${choice}, Computer chose ${computer_choice} . It's a draw!`);
  document.getElementById('rps').appendChild(coal);
} 
else if (
  (choice === 'rock' && computer_choice === 'scissors') ||
  (choice === 'paper' && computer_choice === 'rock') ||
  (choice === 'scissors' && computer_choice === 'paper')
){
  alert(`Player chose ${choice}, Computer chose ${computer_choice} . You win!`);
  document.getElementById('rps').appendChild(cake);
} 
else {
  alert(`Player chose ${choice}, Computer chose ${computer_choice} . You lose!`);
  document.getElementById('rps').appendChild(coal);
}
}

