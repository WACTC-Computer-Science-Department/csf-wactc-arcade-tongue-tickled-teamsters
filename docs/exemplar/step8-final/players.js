// ============================================
// PLAYERS — Alex
// Two-player co-op controls (FINAL)
// ============================================

let player1 = { x: 0, y: 0, health: 100, maxHealth: 100, speed: PLAYER_SPEED, color: '#00ff88', alive: true, flashTimer: 0 };
let player2 = { x: 0, y: 0, health: 100, maxHealth: 100, speed: PLAYER_SPEED, color: '#00d4ff', alive: true, flashTimer: 0 };

function resetPlayers() {
  player1.x = CANVAS_WIDTH / 3;
  player1.y = CANVAS_HEIGHT / 2;
  player1.health = 100;
  player1.alive = true;
  player1.flashTimer = 0;
  player2.x = CANVAS_WIDTH * 2 / 3;
  player2.y = CANVAS_HEIGHT / 2;
  player2.health = 100;
  player2.alive = true;
  player2.flashTimer = 0;
}

function updatePlayers() {
  // Player 1 — WASD
  if (player1.alive) {
    if (keyIsDown(87)) player1.y -= player1.speed;  // W
    if (keyIsDown(83)) player1.y += player1.speed;  // S
    if (keyIsDown(65)) player1.x -= player1.speed;  // A
    if (keyIsDown(68)) player1.x += player1.speed;  // D
    player1.x = constrain(player1.x, PLAYER_SIZE, CANVAS_WIDTH - PLAYER_SIZE);
    player1.y = constrain(player1.y, PLAYER_SIZE, CANVAS_HEIGHT - PLAYER_SIZE);
    if (player1.flashTimer > 0) player1.flashTimer--;
  }

  // Player 2 — Arrow keys
  if (player2.alive) {
    if (keyIsDown(UP_ARROW)) player2.y -= player2.speed;
    if (keyIsDown(DOWN_ARROW)) player2.y += player2.speed;
    if (keyIsDown(LEFT_ARROW)) player2.x -= player2.speed;
    if (keyIsDown(RIGHT_ARROW)) player2.x += player2.speed;
    player2.x = constrain(player2.x, PLAYER_SIZE, CANVAS_WIDTH - PLAYER_SIZE);
    player2.y = constrain(player2.y, PLAYER_SIZE, CANVAS_HEIGHT - PLAYER_SIZE);
    if (player2.flashTimer > 0) player2.flashTimer--;
  }
}

function drawPlayers() {
  // Player 1
  if (player1.alive) {
    if (player1.flashTimer > 0 && frameCount % 4 < 2) {
      // Flash effect — skip drawing every other frame
    } else {
      fill(player1.color);
      ellipse(player1.x, player1.y, PLAYER_SIZE * 2);
      fill(0, 100, 50);
      ellipse(player1.x, player1.y, PLAYER_SIZE * 0.8);
    }
    // Health bar
    drawHealthBar(player1.x, player1.y + PLAYER_SIZE + 5, player1.health, player1.maxHealth, player1.color);
    // Label
    fill(player1.color);
    textAlign(CENTER);
    textSize(10);
    text('P1', player1.x, player1.y - PLAYER_SIZE - 5);
  }

  // Player 2
  if (player2.alive) {
    if (player2.flashTimer > 0 && frameCount % 4 < 2) {
    } else {
      fill(player2.color);
      rect(player2.x - PLAYER_SIZE, player2.y - PLAYER_SIZE, PLAYER_SIZE * 2, PLAYER_SIZE * 2, 4);
      fill(0, 50, 100);
      rect(player2.x - PLAYER_SIZE * 0.4, player2.y - PLAYER_SIZE * 0.4, PLAYER_SIZE * 0.8, PLAYER_SIZE * 0.8, 2);
    }
    drawHealthBar(player2.x, player2.y + PLAYER_SIZE + 5, player2.health, player2.maxHealth, player2.color);
    fill(player2.color);
    textAlign(CENTER);
    textSize(10);
    text('P2', player2.x, player2.y - PLAYER_SIZE - 5);
  }
}

function drawHealthBar(x, y, health, maxHealth, color) {
  let barWidth = 26;
  let healthPercent = health / maxHealth;
  fill(60);
  rect(x - barWidth / 2, y, barWidth, 3);
  if (healthPercent > 0.5) fill(color);
  else if (healthPercent > 0.25) fill(255, 200, 0);
  else fill(255, 50, 50);
  rect(x - barWidth / 2, y, barWidth * healthPercent, 3);
}

function player1Hit() {
  player1.health -= 20;
  player1.flashTimer = 30;
  if (player1.health <= 0) {
    player1.health = 0;
    player1.alive = false;
    if (!player2.alive) {
      if (score > highScore) highScore = score;
      gameState = 'gameover';
    }
  }
}

function player2Hit() {
  player2.health -= 20;
  player2.flashTimer = 30;
  if (player2.health <= 0) {
    player2.health = 0;
    player2.alive = false;
    if (!player1.alive) {
      if (score > highScore) highScore = score;
      gameState = 'gameover';
    }
  }
}

function handlePlayerKeyPress() {
  // Player 1 shoots with space toward mouse
  if (key === ' ' && player1.alive) {
    fireBullet(player1.x, player1.y, mouseX, mouseY, 1);
  }
  // Player 2 shoots with Enter toward nearest enemy
  if (keyCode === ENTER && player2.alive) {
    let nearest = findNearestEnemy(player2.x, player2.y);
    if (nearest) {
      fireBullet(player2.x, player2.y, nearest.x, nearest.y, 2);
    } else {
      fireBullet(player2.x, player2.y, player2.x, player2.y - 100, 2);
    }
  }
}

function findNearestEnemy(px, py) {
  let closest = null;
  let closestDist = Infinity;
  for (let i = 0; i < enemies.length; i++) {
    let d = dist(px, py, enemies[i].x, enemies[i].y);
    if (d < closestDist) {
      closestDist = d;
      closest = enemies[i];
    }
  }
  return closest;
}

function handlePlayerClick() {
  if (player1.alive) {
    fireBullet(player1.x, player1.y, mouseX, mouseY, 1);
  }
}
