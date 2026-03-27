// ============================================
// COLLISIONS — Sam
// All collision detection (FINAL)
// ============================================

function checkAllCollisions() {
  checkBulletEnemyCollisions();
  checkPlayerEnemyCollisions();
}

function checkBulletEnemyCollisions() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    for (let j = enemies.length - 1; j >= 0; j--) {
      if (dist(bullets[i].x, bullets[i].y, enemies[j].x, enemies[j].y) < bullets[i].size + enemies[j].size) {
        enemies[j].health--;
        bullets.splice(i, 1);
        if (enemies[j].health <= 0) {
          enemies.splice(j, 1);
          score += 10;
        }
        break;  // Bullet is gone, stop checking enemies
      }
    }
  }
}

function checkPlayerEnemyCollisions() {
  for (let i = enemies.length - 1; i >= 0; i--) {
    // Check player 1
    if (player1.alive && dist(player1.x, player1.y, enemies[i].x, enemies[i].y) < PLAYER_SIZE + enemies[i].size) {
      player1Hit();
      enemies.splice(i, 1);
      continue;
    }
    // Check player 2
    if (player2.alive && dist(player2.x, player2.y, enemies[i].x, enemies[i].y) < PLAYER_SIZE + enemies[i].size) {
      player2Hit();
      enemies.splice(i, 1);
    }
  }
}
