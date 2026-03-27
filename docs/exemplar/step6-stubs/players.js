// ============================================
// PLAYERS — Alex
// Two-player co-op controls
// ============================================

// Player 1 (WASD)
let player1 = { x: 0, y: 0, health: 100, speed: PLAYER_SPEED, color: '#00ff88' };
// Player 2 (Arrow keys)
let player2 = { x: 0, y: 0, health: 100, speed: PLAYER_SPEED, color: '#00d4ff' };

function resetPlayers() {
  player1.x = CANVAS_WIDTH / 3;
  player1.y = CANVAS_HEIGHT / 2;
  player1.health = 100;
  player2.x = CANVAS_WIDTH * 2 / 3;
  player2.y = CANVAS_HEIGHT / 2;
  player2.health = 100;
}

function updatePlayers() {
  // TODO: Player 1 movement (WASD)
  // TODO: Player 2 movement (Arrow keys)
  // TODO: Keep both players inside canvas
}

function drawPlayers() {
  // Player 1
  fill(player1.color);
  ellipse(player1.x, player1.y, PLAYER_SIZE * 2);
  // Player 2
  fill(player2.color);
  ellipse(player2.x, player2.y, PLAYER_SIZE * 2);
}

function player1Hit() {
  player1.health -= 20;
  // TODO: Check if dead, trigger game over if both dead
}

function player2Hit() {
  player2.health -= 20;
  // TODO: Check if dead, trigger game over if both dead
}

function handlePlayerKeyPress() {
  // TODO: Player 1 shoots with Space, Player 2 shoots with Enter
}
