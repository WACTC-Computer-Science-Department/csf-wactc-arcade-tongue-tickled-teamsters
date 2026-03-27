# Game Options — Arrays & Loops

Choose ONE game. Then customize `game.js` and your file stubs to match.

---

## Option A: Pac-Man

**Core concept:** Navigate a 2D grid maze, eat dots, avoid ghosts.

**Key arrays:**
- `maze[][]` — 2D array: 0=path, 1=wall, 2=dot, 3=power-pellet
- `ghosts[]` — array of ghost objects: `{ x, y, gridX, gridY, speed, color, mode }`
- `dots[]` — array of dot positions (or track in the maze grid)

**File assignments:**
| File | Responsibility |
|------|---------------|
| player.js | Pac-Man position, grid-based movement (move one tile at a time), direction |
| enemies.js → rename to `ghosts.js` | Ghost array, ghost AI (random, chase, scatter modes) |
| bullets.js → rename to `dots.js` | Dot tracking, power pellet effects |
| collisions.js | Ghost-player collision, dot collection |
| ui.js | Score, lives, maze rendering from 2D array |

**game.js changes:**
```javascript
const TILE_SIZE = 25;
const GRID_COLS = 32;
const GRID_ROWS = 20;
const GHOST_COUNT = 4;
const GHOST_COLORS = ['#ff0000', '#ffb8ff', '#00ffff', '#ffb851'];
```

---

## Option B: Frogger

**Core concept:** Cross lanes of traffic and floating logs to reach the top.

**Key arrays:**
- `lanes[]` — array of lane objects: `{ y, speed, direction, type, objects[] }`
- `obstacles[]` — cars, trucks per lane
- `platforms[]` — logs, turtles per water lane

**File assignments:**
| File | Responsibility |
|------|---------------|
| player.js | Frog position, hop movement (grid snapping), death/respawn |
| enemies.js → rename to `lanes.js` | Lane configuration, obstacle/platform spawning and movement |
| bullets.js → rename to `vehicles.js` | Vehicle and log array management, push/splice for spawning/removing |
| collisions.js | Vehicle-frog collision (death), log-frog collision (ride), goal zone detection |
| ui.js | Score, lives, time remaining, lane rendering |

**game.js changes:**
```javascript
const LANE_COUNT = 10;
const HOP_SIZE = 40;
const TIME_LIMIT = 30;  // seconds
const SAFE_ZONE_Y = [0, 200, 480];  // y positions of safe zones
```

---

## Option C: Wave Survival Arena (2P Co-op)

**Core concept:** Two players survive waves of enemies, shooting together.

**Key arrays:**
- `enemies[]` — enemy objects with positions and health
- `bullets[]` — bullet objects from both players
- `waves[]` — wave definitions: `{ enemyCount, spawnRate, types }`

**File assignments:**
| File | Responsibility |
|------|---------------|
| player.js → rename to `players.js` | Two player objects (WASD + arrows), health bars |
| enemies.js | Enemy spawning per wave, different movement patterns |
| bullets.js | Bullet array for both players, directional shooting |
| collisions.js | Bullet-enemy, enemy-player collisions |
| ui.js | Wave counter, both players' health, score |

**game.js changes:**
```javascript
const PLAYER1_KEYS = { up: 87, down: 83, left: 65, right: 68, shoot: 32 };  // WASD + space
const PLAYER2_KEYS = { up: UP_ARROW, down: DOWN_ARROW, left: LEFT_ARROW, right: RIGHT_ARROW, shoot: ENTER };
const WAVE_DEFINITIONS = [
  { count: 5, spawnRate: 120 },
  { count: 8, spawnRate: 90 },
  { count: 12, spawnRate: 60 }
];
```

---

## Option D: Breakout (2P Variant)

**Core concept:** Bounce a ball off paddles to break bricks. 2 paddles = 2 players.

**Key arrays:**
- `bricks[][]` — 2D array of bricks: `{ alive, color, points, hits }`
- `balls[]` — ball objects with velocity (start with 1, power-ups add more)
- `powerUps[]` — falling power-up objects

**File assignments:**
| File | Responsibility |
|------|---------------|
| player.js → rename to `paddles.js` | Two paddles (top and bottom, or both at bottom) |
| enemies.js → rename to `bricks.js` | 2D brick grid, brick types (1-hit, 2-hit, unbreakable) |
| bullets.js → rename to `balls.js` | Ball physics (velocity, wall bouncing, paddle bouncing with angle) |
| collisions.js | Ball-brick collisions (nested loop), ball-paddle collisions |
| ui.js | Score, level display, brick grid rendering |

**game.js changes:**
```javascript
const BRICK_ROWS = 6;
const BRICK_COLS = 12;
const BRICK_WIDTH = 60;
const BRICK_HEIGHT = 20;
const BALL_SPEED = 5;
const PADDLE_WIDTH = 80;
```
