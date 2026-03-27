// ============================================
// PLAYER — Your name here!
// This file manages the player character.
// ============================================

// Player variables
let playerX;
let playerY;
let playerLives;

// TODO: Add any additional player variables you need
// Examples: playerVelX, playerVelY, playerDirection, etc.

function resetPlayer() {
  playerX = CANVAS_WIDTH / 2;
  playerY = CANVAS_HEIGHT / 2;
  playerLives = PLAYER_LIVES;
  // TODO: Reset any additional player variables
}

function updatePlayer() {
  // TODO: Move the player based on keyboard input
  // Use keyIsDown(LEFT_ARROW), keyIsDown(RIGHT_ARROW), etc.
  // Or use keyIsDown(65) for 'A', keyIsDown(68) for 'D', etc.
  // Don't forget to keep the player inside the canvas!
}

function drawPlayer() {
  // TODO: Draw the player on the canvas
  // Use fill(), ellipse(), rect(), or any p5.js shape
  fill(COLOR_PLAYER);
  ellipse(playerX, playerY, PLAYER_SIZE * 2);
}

function handlePlayerKeyPress() {
  // TODO: Handle one-time key presses (like shooting)
  // This is called once when a key is pressed (not held)
  // Example: if (key === ' ') { fireBullet(playerX, playerY); }
}

function handlePlayerClick() {
  // TODO: Handle mouse clicks (if your game uses them)
}

function playerHit() {
  // Called when the player is hit by an enemy
  playerLives--;
  if (playerLives <= 0) {
    if (score > highScore) highScore = score;
    gameState = 'gameover';
  }
  // TODO: Add visual feedback (flash, knockback, etc.)
}
