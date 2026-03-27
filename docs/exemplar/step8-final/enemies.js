// ============================================
// ENEMIES — Jordan
// Wave-based enemy spawning (FINAL)
// ============================================

let enemies = [];
let spawnTimer = 0;
let currentSpawnRate = ENEMY_SPAWN_RATE;
let currentEnemySpeed = ENEMY_SPEED;
let currentWave = 1;
let enemiesPerWave = 10;
let enemiesSpawnedThisWave = 0;
let waveComplete = false;
let wavePauseTimer = 0;

function resetEnemies() {
  enemies = [];
  spawnTimer = 0;
  currentSpawnRate = ENEMY_SPAWN_RATE;
  currentEnemySpeed = ENEMY_SPEED;
  currentWave = 1;
  enemiesPerWave = 10;
  enemiesSpawnedThisWave = 0;
  waveComplete = false;
  wavePauseTimer = 0;
}

function spawnEnemy() {
  let side = floor(random(4));
  let x, y;
  if (side === 0) { x = random(CANVAS_WIDTH); y = -ENEMY_SIZE; }
  else if (side === 1) { x = CANVAS_WIDTH + ENEMY_SIZE; y = random(CANVAS_HEIGHT); }
  else if (side === 2) { x = random(CANVAS_WIDTH); y = CANVAS_HEIGHT + ENEMY_SIZE; }
  else { x = -ENEMY_SIZE; y = random(CANVAS_HEIGHT); }

  let size = ENEMY_SIZE;
  let speed = currentEnemySpeed;
  let health = 1;
  let color = COLOR_ENEMY;

  // Tougher enemies in later waves
  if (currentWave >= 3 && random() < 0.2) {
    size = ENEMY_SIZE * 1.5;
    speed = currentEnemySpeed * 0.7;
    health = 3;
    color = '#ff8800';
  }
  if (currentWave >= 5 && random() < 0.1) {
    size = ENEMY_SIZE * 2;
    speed = currentEnemySpeed * 0.5;
    health = 5;
    color = '#cc00cc';
  }

  enemies.push({ x, y, speedX: 0, speedY: 0, speed, size, health, color });
  enemiesSpawnedThisWave++;
}

function updateEnemies() {
  if (waveComplete) {
    wavePauseTimer++;
    if (wavePauseTimer > 120) {
      startNextWave();
    }
    return;
  }

  // Spawn enemies
  spawnTimer++;
  if (spawnTimer >= currentSpawnRate && enemiesSpawnedThisWave < enemiesPerWave) {
    spawnEnemy();
    spawnTimer = 0;
  }

  // Move each enemy toward nearest alive player
  for (let i = 0; i < enemies.length; i++) {
    let target = getNearestPlayer(enemies[i].x, enemies[i].y);
    if (target) {
      let dx = target.x - enemies[i].x;
      let dy = target.y - enemies[i].y;
      let d = dist(enemies[i].x, enemies[i].y, target.x, target.y);
      if (d > 0) {
        enemies[i].x += (dx / d) * enemies[i].speed;
        enemies[i].y += (dy / d) * enemies[i].speed;
      }
    }
  }

  // Check if wave is done
  if (enemiesSpawnedThisWave >= enemiesPerWave && enemies.length === 0) {
    waveComplete = true;
    wavePauseTimer = 0;
  }
}

function getNearestPlayer(ex, ey) {
  let d1 = player1.alive ? dist(ex, ey, player1.x, player1.y) : Infinity;
  let d2 = player2.alive ? dist(ex, ey, player2.x, player2.y) : Infinity;
  if (d1 <= d2 && player1.alive) return player1;
  if (player2.alive) return player2;
  return null;
}

function drawEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    fill(enemies[i].color);
    ellipse(enemies[i].x, enemies[i].y, enemies[i].size * 2);
    // Small health pips for tough enemies
    if (enemies[i].health > 1) {
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(8);
      text(enemies[i].health, enemies[i].x, enemies[i].y);
    }
  }
}

function increaseDifficulty() {
  currentEnemySpeed = min(currentEnemySpeed + 0.2, MAX_ENEMY_SPEED);
  currentSpawnRate = max(currentSpawnRate - 3, 15);
}

function startNextWave() {
  currentWave++;
  enemiesPerWave = 10 + currentWave * 3;
  enemiesSpawnedThisWave = 0;
  waveComplete = false;
  increaseDifficulty();
}
