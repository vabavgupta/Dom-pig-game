/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, RoundScore, active;

init();
// var dice =Math.floor(Math.random()*6 +1);
// Dom manupliation

// document.querySelector('#current-' + active).textContent=dice;

// Adding the event
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
  // getting the value;
  var dice = Math.floor(Math.random() * 6 + 1);

  // display the result
  // document.querySelector('.dice').style.display='none';
  var diceD = document.querySelector('.dice');
  diceD.style.display = 'block';
  diceD.src = 'dice-' + dice + '.png';

  if (dice !== 1) {
    RoundScore += dice; // adding to the round score
    document.querySelector('#current-' + active).textContent = RoundScore;

  } else {
    nextPlay();
  }

});

// update the hold funtion

document.querySelector('.btn-hold').addEventListener('click', function() {
  // 1. update the score
  scores[active] += RoundScore;

  // 2. update the UI

  document.querySelector('#score-' + active).textContent = scores[active];

  // 3. after hold switch the turn to next player..
  nextPlay();

  // 4 Check if any one won
  if (scores[active] >= 100) {
    document.querySelector('#name-' + active).textContent = 'Winner!'; //name- is the id of the active player and we display it to be Winner
    document.querySelector('.dice').style.display = 'none'; // .dice is again a class defined in the css file which when any player won will remove the dice from UI
    document.querySelector('.player-' + active + '-panel').classList.add('winner');
    document.querySelector('.player-' + active + '-panel').classList.remove('active');
  } else {
    nextPlay();
  }
});

function nextPlay() {
  active === 0 ? active = 1 : active = 0;
  RoundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active'); // it will toggle between active
  document.querySelector('.player-1-panel').classList.toggle('active'); // players and will switch the panel

  document.querySelector('.dice').style.display = 'none';
}
document.querySelector('btn-new').addEventListener('click', init);

function init() {
  var scores = [0, 0];
  var RoundScore = 0;
  var active = 0;
  // var dice =Math.floor(Math.random()*6 +1);
  // Dom manupliation

  // document.querySelector('#current-' + active).textContent=dice;

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');


}