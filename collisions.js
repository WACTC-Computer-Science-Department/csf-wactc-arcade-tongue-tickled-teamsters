// ============================================
// COLLISIONS — Your name here!
// This file checks for collisions between
// objects from different files.
// ============================================

function checkAllCollisions() {
  // TODO: Check bullet-enemy collisions
  // Loop through bullets AND enemies (nested loop)
  // If a bullet hits an enemy, remove both and add to score
  checkBulletEnemyCollisions();

  // TODO: Check player-enemy collisions
  // If the player touches an enemy, call playerHit()
  checkPlayerEnemyCollisions();
}

function checkBulletEnemyCollisions() {
  // TODO: Nested backward loop — check each bullet against each enemy
  // Use dist() to check if they overlap
  // If dist(bullet.x, bullet.y, enemy.x, enemy.y) < bullet.size + enemy.size
  //   → splice both, score++
  for (let i = bullets.length - 1; i >= 0; i--) {
    for (let j = enemies.length - 1; j >= 0; j--) {
      // TODO: Check collision between bullets[i] and enemies[j]
    }
  }
}

function checkPlayerEnemyCollisions() {
  // TODO: Check if any enemy overlaps with the player
  // Use dist(playerX, playerY, enemy.x, enemy.y) < PLAYER_SIZE + enemy.size
  for (let i = enemies.length - 1; i >= 0; i--) {
    // TODO: Check collision, call playerHit() if hit, remove the enemy
  }
}
