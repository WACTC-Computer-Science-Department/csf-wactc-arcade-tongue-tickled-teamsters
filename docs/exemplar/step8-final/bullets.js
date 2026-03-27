// ============================================
// BULLETS — Sam
// Dual-player bullet system (FINAL)
// ============================================

let bullets = [];

function resetBullets() {
  bullets = [];
}

function fireBullet(startX, startY, targetX, targetY, owner) {
  let dx = targetX - startX;
  let dy = targetY - startY;
  let d = dist(startX, startY, targetX, targetY);
  if (d === 0) d = 1;

  bullets.push({
    x: startX,
    y: startY,
    speedX: (dx / d) * BULLET_SPEED,
    speedY: (dy / d) * BULLET_SPEED,
    size: BULLET_SIZE,
    owner: owner,
    color: owner === 1 ? '#00ff88' : '#00d4ff'
  });
}

function updateBullets() {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].x += bullets[i].speedX;
    bullets[i].y += bullets[i].speedY;
  }

  // Remove off-screen bullets (backward loop!)
  for (let i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].x < -10 || bullets[i].x > CANVAS_WIDTH + 10 ||
        bullets[i].y < -10 || bullets[i].y > CANVAS_HEIGHT + 10) {
      bullets.splice(i, 1);
    }
  }
}

function drawBullets() {
  for (let i = 0; i < bullets.length; i++) {
    fill(bullets[i].color);
    ellipse(bullets[i].x, bullets[i].y, bullets[i].size * 2);
  }
}
