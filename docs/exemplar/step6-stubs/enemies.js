// ============================================
// ENEMIES — Jordan
// Wave-based enemy spawning
// ============================================

let enemies = [];
let spawnTimer = 0;
let currentWave = 1;

function resetEnemies() {
  enemies = [];
  spawnTimer = 0;
  currentWave = 1;
}

function spawnEnemy() {
  // TODO: Spawn from random edge
  // Pick random side: top, right, bottom, left
  // Push new enemy object into array
}

function updateEnemies() {
  spawnTimer++;
  if (spawnTimer >= ENEMY_SPAWN_RATE) {
    spawnEnemy();
    spawnTimer = 0;
  }

  // TODO: Move each enemy toward nearest player
  for (let i = 0; i < enemies.length; i++) {
    // TODO: Calculate direction to nearest player, move toward them
  }

  // Remove off-screen enemies
  for (let i = enemies.length - 1; i >= 0; i--) {
    if (enemies[i].x < -50 || enemies[i].x > CANVAS_WIDTH + 50 ||
        enemies[i].y < -50 || enemies[i].y > CANVAS_HEIGHT + 50) {
      enemies.splice(i, 1);
    }
  }
}

function drawEnemies() {
  fill(COLOR_ENEMY);
  for (let i = 0; i < enemies.length; i++) {
    ellipse(enemies[i].x, enemies[i].y, enemies[i].size * 2);
  }
}

function increaseDifficulty() {
  // TODO: Reduce spawn rate, increase enemy speed
}

function startNextWave() {
  // TODO: Increment wave, adjust parameters
}
