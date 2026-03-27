# Step 4 Exemplar: Component Map — Wave Survival Arena

## Game Overview
Two players (WASD + Arrow keys) survive waves of enemies. Both can shoot. Enemies come from all sides and get harder each wave.

## Arrays Per File

| File | Arrays | Purpose |
|------|--------|---------|
| players.js | `player1`, `player2` (objects, not arrays) | Two player objects with x, y, health, speed |
| enemies.js | `enemies[]` | Array of enemy objects, each has x, y, speed, health, size |
| bullets.js | `bullets[]` | Array of bullet objects, each has x, y, velX, velY, owner |
| collisions.js | (none — reads from other files) | Checks bullets vs enemies, enemies vs players |
| ui.js | (none — reads from other files) | Draws score, health bars, wave number, menus |

## Shared Variables (in game.js)
- `gameState` — 'menu', 'playing', 'gameover'
- `score` — shared between both players
- `wave` — current wave number
- `frameCounter` — for timing
- `highScore` — persists between games

## Functions Per File

### players.js (Alex)
- `resetPlayers()` — set both players to starting positions and health
- `updatePlayers()` — read keyboard input, move both players, constrain to canvas
- `drawPlayers()` — draw both player shapes and health bars
- `player1Hit()` / `player2Hit()` — reduce health, check game over
- `handlePlayerKeyPress()` — one-time presses (not covered by keyIsDown)

### enemies.js (Jordan)
- `resetEnemies()` — clear enemy array
- `spawnEnemy()` — create enemy at random edge position, push to array
- `updateEnemies()` — move all enemies toward nearest player, spawn on timer
- `drawEnemies()` — draw all enemies
- `increaseDifficulty()` — faster spawn rate, faster enemies each wave
- `startNextWave()` — increment wave, set new parameters

### bullets.js (Sam)
- `resetBullets()` — clear bullet array
- `fireBullet(x, y, targetX, targetY, owner)` — create aimed bullet
- `updateBullets()` — move all bullets, remove off-screen (backward splice)
- `drawBullets()` — draw all bullets

### collisions.js (Sam)
- `checkAllCollisions()` — calls the two functions below
- `checkBulletEnemyCollisions()` — nested backward loop, remove both on hit, add score
- `checkPlayerEnemyCollisions()` — check each enemy vs both players

### ui.js (Sam)
- `drawMenu()` — title, instructions, high score
- `drawHUD()` — score, wave, both players' health bars
- `drawGameOver()` — final score, restart instructions
