// ============================================
// UI — Sam
// Menus, HUD, and game over (FINAL)
// ============================================

function drawMenu() {
  fill('#ffffff');
  textAlign(CENTER, CENTER);
  textSize(32);
  text('WAVE SURVIVAL', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 4);
  textSize(18);
  fill('#ff4444');
  text('A R E N A', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 4 + 30);

  fill('#00ff88');
  textSize(13);
  text('Player 1 (green): WASD to move, Space/Click to shoot', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20);
  fill('#00d4ff');
  text('Player 2 (blue): Arrow keys to move, Enter to auto-aim', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 10);

  fill('#ffffff');
  textSize(16);
  let alpha = map(sin(frameCount * 0.05), -1, 1, 100, 255);
  fill(255, 255, 255, alpha);
  text('Press SPACE or ENTER to start', CANVAS_WIDTH / 2, CANVAS_HEIGHT * 3 / 4);

  if (highScore > 0) {
    fill('#ffc107');
    textSize(14);
    text('High Score: ' + highScore, CANVAS_WIDTH / 2, CANVAS_HEIGHT * 3 / 4 + 30);
  }
}

function drawHUD() {
  textAlign(LEFT, TOP);
  textSize(14);

  // Score and wave
  fill('#ffffff');
  text('Score: ' + score, 10, 10);
  text('Wave: ' + currentWave, 10, 30);

  // Enemies remaining
  let remaining = enemiesPerWave - enemiesSpawnedThisWave + enemies.length;
  fill('#aaaaaa');
  text('Enemies left: ' + max(remaining, enemies.length), 10, 50);

  // Player 1 health (top-left area)
  fill(player1.color);
  textSize(12);
  text('P1', CANVAS_WIDTH / 2 - 100, 10);
  let bar1Width = 80;
  let hp1 = player1.health / player1.maxHealth;
  fill(60);
  rect(CANVAS_WIDTH / 2 - 75, 10, bar1Width, 10, 2);
  fill(player1.alive ? player1.color : '#555');
  rect(CANVAS_WIDTH / 2 - 75, 10, bar1Width * hp1, 10, 2);
  if (!player1.alive) {
    fill('#ff4444');
    textSize(10);
    text('DOWN', CANVAS_WIDTH / 2 - 65, 11);
  }

  // Player 2 health
  fill(player2.color);
  textSize(12);
  text('P2', CANVAS_WIDTH / 2 + 20, 10);
  let bar2Width = 80;
  let hp2 = player2.health / player2.maxHealth;
  fill(60);
  rect(CANVAS_WIDTH / 2 + 45, 10, bar2Width, 10, 2);
  fill(player2.alive ? player2.color : '#555');
  rect(CANVAS_WIDTH / 2 + 45, 10, bar2Width * hp2, 10, 2);
  if (!player2.alive) {
    fill('#ff4444');
    textSize(10);
    text('DOWN', CANVAS_WIDTH / 2 + 55, 11);
  }

  // Wave complete banner
  if (waveComplete) {
    fill(0, 0, 0, 120);
    rect(CANVAS_WIDTH / 4, CANVAS_HEIGHT / 2 - 25, CANVAS_WIDTH / 2, 50, 8);
    fill('#ffc107');
    textAlign(CENTER, CENTER);
    textSize(20);
    text('WAVE ' + currentWave + ' COMPLETE!', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    textAlign(LEFT, TOP);
  }
}

function drawGameOver() {
  fill(0, 0, 0, 150);
  rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  fill('#ff4444');
  textAlign(CENTER, CENTER);
  textSize(36);
  text('GAME OVER', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 3);

  fill('#ffffff');
  textSize(20);
  text('Score: ' + score, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 15);
  text('Waves Survived: ' + (currentWave - 1), CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 15);

  if (score >= highScore && score > 0) {
    fill('#ffc107');
    textSize(16);
    text('NEW HIGH SCORE!', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 50);
  }

  fill('#aaaaaa');
  textSize(14);
  text('Press R to return to menu', CANVAS_WIDTH / 2, CANVAS_HEIGHT * 3 / 4);
}
