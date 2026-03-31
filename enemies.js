// ============================================
// ENEMIES — Your name here!
// This file manages the enemy array.
// ============================================

// Enemy array — each enemy is an object: { x, y, speedX, speedY, size }
let enemies = [];
let spawnTimer = 0;
let enemiesX;
let enemiesY;
// TODO: Add any additional enemy variables you need

function resetEnemies() {
  enemies = [];
  spawnTimer = 0;
  // TODO: Reset any additional enemy variables
}

function spawnEnemy() {
  // TODO: Create a new enemy object and push it into the enemies array
  // Example:
  // enemies.push({
  //   x: random(width),
  //   y: -ENEMY_SIZE,
  //   speedX: 0,
  //   speedY: ENEMY_SPEED,
  //   size: ENEMY_SIZE
  // });
}

function updateEnemies() {
  // Spawn new enemies on a timer
  spawnTimer++;
  if (spawnTimer >= ENEMY_SPAWN_RATE) {
    spawnEnemy();
    spawnTimer = 0;
  

  // TODO: Update each enemy's position
  // Loop through the enemies array and move each one
  for (let i = 0; i < enemies.length; i++) {
    // TODO: Move enemies[i]
  }

  // TODO: Remove enemies that are off-screen
  // Use splice() with a backward loop!
  for (let i = enemies.length - 1; i >= 0; i--) {
    // if (enemies[i] is off screen) { enemies.splice(i, 1); }
    
  }
}

function drawEnemies() {
  // TODO: Draw each enemy
  fill(COLOR_ENEMY);
  for (let i = 0; i < enemies.length; i++) {
    // TODO: Draw enemies[i]


    // ellipse(enemies[i].x, enemies[i].y, enemies[i].size * 2);
    
  }
}

function increaseDifficulty() {
  // TODO: Make the game harder over time


  // Ideas: faster enemies, more frequent spawning, new enemy types


}
