// ============================================
// BULLETS — Your name here!
// This file manages the bullet array.
// ============================================

// Bullet array — each bullet is an object: { x, y, speedX, speedY, size }
let bullets = [];

// TODO: Add any additional bullet variables you need

function resetBullets() {
  bullets = [];
}

function fireBullet(startX, startY) {
  // TODO: Create a new bullet and push it into the bullets array
  // Example:
  // bullets.push({
  //   x: startX,
  //   y: startY,
  //   speedX: 0,
  //   speedY: -BULLET_SPEED,
  //   size: BULLET_SIZE
  // });
}

function updateBullets() {
  // TODO: Move each bullet
  for (let i = 0; i < bullets.length; i++) {
    // TODO: Move bullets[i]
  }

  // TODO: Remove bullets that are off-screen (backward loop + splice)
  for (let i = bullets.length - 1; i >= 0; i--) {
    // if (bullets[i] is off screen) { bullets.splice(i, 1); }
  }
}

function drawBullets() {
  // TODO: Draw each bullet
  fill(COLOR_BULLET);
  for (let i = 0; i < bullets.length; i++) {
    // TODO: Draw bullets[i]
  }
}
