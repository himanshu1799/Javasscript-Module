# LeaderBoard Project

## Example of creating a leaderboard using vanilla JavaScript.

- HTML Code:

```
<div id="leaderboard">
  <h2>Leaderboard</h2>
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody id="leaderboard-body"></tbody>
  </table>
</div>

<div id="add-player">
  <h2>Add Player</h2>
  <form>
    <label for="player-name">Name:</label>
    <input type="text" id="player-name" required>
    <label for="player-score">Score:</label>
    <input type="number" id="player-score" required>
    <button type="submit">Add</button>
  </form>
</div>
```

- JavaScript Code: 

```
const leaderboardBody = document.getElementById('leaderboard-body');
const addPlayerForm = document.querySelector('#add-player form');

// Sample leaderboard data
let players = [
  { name: 'Player 1', score: 100 },
  { name: 'Player 2', score: 75 },
  { name: 'Player 3', score: 50 },
  { name: 'Player 4', score: 25 },
];

// Function to render the leaderboard
function renderLeaderboard(players) {
  // Sort the players by score in descending order
  players.sort((a, b) => b.score - a.score);

  // Clear the current leaderboard
  leaderboardBody.innerHTML = '';

  // Loop through the players and add them to the leaderboard
  players.forEach((player, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${player.name}</td>
      <td>${player.score}</td>
    `;
    leaderboardBody.appendChild(row);
  });
}

// Event listener for the add player form
addPlayerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const playerName = document.getElementById('player-name').value.trim();
  const playerScore = parseInt(document.getElementById('player-score').value.trim());
  if (playerName && playerScore) {
    // Add the new player to the array and render the updated leaderboard
    players.push({ name: playerName, score: playerScore });
    renderLeaderboard(players);

    // Clear the form inputs
    document.getElementById('player-name').value = '';
    document.getElementById('player-score').value = '';
  }
});

// Initial render of the leaderboard
renderLeaderboard(players);
```

In this example, we create a simple leaderboard with a table displaying the player's rank, name, and score. We also include a form to add new players to the leaderboard. The renderLeaderboard() function sorts the players by score in descending order and then adds them to the table. The addPlayerForm event listener adds a new player to the players array and then re-renders the leaderboard with the updated data.
