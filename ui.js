// ============================================
// UI — Your name here!
// This file draws menus, HUD, and game over screen.
// ============================================

function drawMenu() {
  // TODO: Draw the main menu screen
  fill(COLOR_UI);
  textAlign(CENTER, CENTER);
  textSize(32);
  text('YOUR GAME NAME', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 3);
  textSize(16);
  text('Press SPACE or ENTER to start', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

  if (highScore > 0) {
    text('High Score: ' + highScore, CANVAS_WIDTH / 2, CANVAS_HEIGHT * 2 / 3);
  }
}

function drawHUD() {
  // TODO: Draw the heads-up display (score, lives, etc.)
  fill(COLOR_UI);
  textAlign(LEFT, TOP);
  textSize(14);
  text('Score: ' + score, 10, 10);
  textSize(24);
  
  text('Frogs left: ' + playerLives, 10, 450);
}

function drawGameOver() {
  // TODO: Draw the game over screen
  fill(COLOR_UI);
  textAlign(CENTER, CENTER);
  textSize(32);
  text('GAME OVER', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 3);
  textSize(20);
  text('Score: ' + score, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
  textSize(14);
  text('Press R to return to menu', CANVAS_WIDTH / 2, CANVAS_HEIGHT * 2 / 3);
}
