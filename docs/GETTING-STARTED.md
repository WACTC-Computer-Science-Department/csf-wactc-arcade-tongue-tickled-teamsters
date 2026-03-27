# Getting Started — Arrays & Loops Arcade Game Project

## Step 1: Choose Your Game

As a team, review the 4 game options below. Discuss which one excites your team the most and best fits your strengths. **Everyone must agree before moving on.**

| Game | Description | Difficulty |
|------|-------------|-----------|
| **Pac-Man** | Navigate a maze, eat dots, avoid ghosts | Medium |
| **Frogger** | Cross lanes of traffic and floating logs to reach safety | Medium |
| **Wave Survival Arena** (2P co-op) | Two players survive waves of enemies, shooting together | Medium-Hard |
| **Breakout** (2P variant) | Bounce a ball off paddles to break bricks | Medium |

Open `GAME-OPTIONS.md` in your repo for detailed array structures and file assignments for each option.

Once you've decided:
1. Open `README.md`
2. Replace `[Your Game Name]` with your game's name
3. Replace the `[Name]` placeholders with your team members
4. Commit this change

---

## Step 2: Open Your Project

### Option A: Codespaces (recommended — nothing to install)
1. Go to your team's repo on GitHub
2. Click the green **Code** button
3. Click the **Codespaces** tab
4. Click **"Create codespace on main"**
5. Wait for VS Code to load in your browser (about 1 minute)
6. To preview the game: right-click `index.html` → **Open with Live Server**

### Option B: VS Code on your computer
1. Open VS Code
2. Press `Ctrl+Shift+P` → type **"Git: Clone"**
3. Paste your team repo URL and choose where to save it
4. Install the **Live Server** extension if you don't have it
5. Right-click `index.html` → **Open with Live Server**

---

## Step 3: Explore the Template

Before changing anything, **read every file** and understand how they connect.

### File Map
```
index.html          ← Opens in browser, loads all scripts
sketch.js           ← Game loop: setup(), draw(), input handlers — DO NOT EDIT
game.js             ← Settings: colors, speeds, sizes, difficulty
player.js           ← Player variables + functions
enemies.js          ← Enemy array + spawning/updating/drawing functions
bullets.js          ← Bullet array + firing/updating/drawing functions
collisions.js       ← Collision checking between all objects
ui.js               ← Menu, HUD, and game over screens
```

### How it works
1. `sketch.js` calls `setup()` once, then calls `draw()` 60 times per second
2. Inside `draw()`, it calls functions from **every other file** in order:
   - `updatePlayer()` → `updateEnemies()` → `updateBullets()` → `checkAllCollisions()`
   - `drawPlayer()` → `drawEnemies()` → `drawBullets()` → `drawHUD()`
3. Each file manages its own **arrays** (enemies array, bullets array, etc.)
4. Files share data through **global variables** (playerX, score, gameState, etc.)

### Try it now
1. Open the game in your browser (Live Server or just open `index.html`)
2. Press Space to start — you'll see a green circle (the player) on a dark background
3. Nothing else happens yet — that's your job!

---

## Step 4: Plan Your Components

Open `GAME-OPTIONS.md` and find your chosen game. Look at the **File assignments** table.

### As a team, answer these questions:
1. **What arrays do you need?** List every array and what objects go in it.
2. **What variables are shared?** (score, gameState, playerX, playerY, etc.)
3. **What functions does each file need?** List them out.
4. **How do files talk to each other?** (e.g., collisions.js reads from enemies.js and player.js)

### Example for Pac-Man:
```
player.js     → playerX, playerY, playerDirection, playerSpeed
                 resetPlayer(), updatePlayer(), drawPlayer()

ghosts.js     → ghosts[] array, each ghost has {x, y, speed, color, mode}
                 resetGhosts(), spawnGhosts(), updateGhosts(), drawGhosts()

dots.js       → dots[] array, powerPellets[] array
                 createDots(), checkDotCollision(), drawDots()

collisions.js → checkAllCollisions(), checkGhostCollision(), checkDotPickup()

ui.js         → drawMenu(), drawHUD(), drawGameOver(), drawMaze()
```

Write this plan down — you'll use it to divide the work.

---

## Step 5: Divide the Work

Each team member owns specific **files**. Decide who builds what.

### Example split for a 3-person team:
| Person | Files | Responsibility |
|--------|-------|---------------|
| Person A | `player.js` | Player movement, controls, lives, collision response |
| Person B | `enemies.js` | Enemy array, spawning, movement, AI patterns |
| Person C | `bullets.js` + `collisions.js` + `ui.js` | Shooting, all collision checks, menus, HUD |

### Example split for a 2-person team:
| Person | Files | Responsibility |
|--------|-------|---------------|
| Person A | `player.js` + `bullets.js` | Player controls + shooting mechanics |
| Person B | `enemies.js` + `collisions.js` + `ui.js` | Enemies, collision logic, all UI |

### Shared files (edit together carefully):
- `game.js` — Anyone can change settings, but talk about it first
- `sketch.js` — **DO NOT EDIT** unless the whole team agrees

Update your `README.md` with who owns which files.

---

## Step 6: Write Your Stub Functions

Before writing real code, each person fills in their functions with **stubs** — the function exists and maybe draws a placeholder shape, but doesn't have real logic yet.

### Example stub (Person B fills in enemies.js):
```javascript
function spawnEnemy() {
  // TODO: Create enemy with random position
  enemies.push({
    x: random(width),
    y: -ENEMY_SIZE,
    speedX: 0,
    speedY: ENEMY_SPEED,
    size: ENEMY_SIZE
  });
}

function updateEnemies() {
  spawnTimer++;
  if (spawnTimer >= ENEMY_SPAWN_RATE) {
    spawnEnemy();
    spawnTimer = 0;
  }

  // TODO: Move each enemy
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].y += enemies[i].speedY;
  }

  // Remove off-screen enemies (backward loop!)
  for (let i = enemies.length - 1; i >= 0; i--) {
    if (enemies[i].y > height + enemies[i].size) {
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
```

### After writing stubs:
1. Save your file
2. Open the game — it should run without errors
3. Commit: `Added stub functions to enemies.js`
4. Push: click Sync in VS Code (or `git push`)

---

## Step 7: First Team Merge

This is your **integration checkpoint**. Everyone should:

1. **Push** your stubs to GitHub
2. **Pull** to get everyone else's code: click Sync (or `git pull`)
3. **Test** — open the game in the browser
4. Verify:
   - No errors in the console (press F12 → Console tab)
   - The game loop runs
   - You can see placeholder shapes on screen
   - Game state machine works (menu → playing → game over)

If you get a **merge conflict**:
1. VS Code will highlight the conflict in the file
2. Look at both versions and choose which to keep (or combine them)
3. Save, commit, and push

---

## Step 8: Build!

Now the real work begins. Each person implements their functions for real.

### Focus order:
1. **Core mechanics** — Player moves, enemies spawn and move, bullets fire
2. **Interactions** — Collisions work, score updates, lives decrease
3. **Game flow** — Menu → Playing → Game Over works, restart works
4. **Polish** — Difficulty ramp, visual effects, better shapes, sound

### Git workflow:
- **Commit often** — every time something works, commit it
- **Push before you leave** — so your teammate can pull your work
- **Pull before you start** — so you have the latest code
- **Message format**: `Add [feature] to [file]` (e.g., "Add ghost AI to enemies.js")

### If something breaks after a pull:
1. Check the browser console for errors (F12)
2. The error will tell you which file and line number
3. Common issue: two files using different variable names for the same thing
4. Fix it together, agree on the variable name, commit, push

---

## Quick Reference

### Key p5.js functions you'll use:
```javascript
// Drawing
fill(color)                    // Set fill color
ellipse(x, y, width, height)  // Draw circle/oval
rect(x, y, width, height)     // Draw rectangle
text(string, x, y)            // Draw text
textSize(size)                 // Set text size
textAlign(CENTER, CENTER)      // Align text

// Input (use in updatePlayer)
keyIsDown(LEFT_ARROW)          // Arrow keys
keyIsDown(65)                  // 'A' key (WASD)
keyIsDown(87)                  // 'W' key
keyIsDown(83)                  // 'S' key
keyIsDown(68)                  // 'D' key

// Math
dist(x1, y1, x2, y2)          // Distance between two points
random(min, max)               // Random number in range
constrain(val, min, max)       // Keep value in range
floor(number)                  // Round down

// Canvas
width                          // Canvas width (800)
height                         // Canvas height (500)
mouseX, mouseY                 // Mouse position
frameCount                     // Frames since start
```

### The array patterns you'll use:

```javascript
// ADD to an array
enemies.push({ x: 100, y: 0, speed: 2, size: 15 });

// LOOP through an array
for (let i = 0; i < enemies.length; i++) {
  enemies[i].y += enemies[i].speed;  // Move each enemy
}

// REMOVE from an array (BACKWARD loop — critical!)
for (let i = enemies.length - 1; i >= 0; i--) {
  if (enemies[i].y > height) {
    enemies.splice(i, 1);  // Remove off-screen enemy
  }
}

// CHECK COLLISION between two objects
if (dist(playerX, playerY, enemies[i].x, enemies[i].y) < PLAYER_SIZE + enemies[i].size) {
  // They're touching!
  playerHit();
  enemies.splice(i, 1);
}

// NESTED LOOP — check every bullet against every enemy
for (let i = bullets.length - 1; i >= 0; i--) {
  for (let j = enemies.length - 1; j >= 0; j--) {
    if (dist(bullets[i].x, bullets[i].y, enemies[j].x, enemies[j].y) < bullets[i].size + enemies[j].size) {
      enemies.splice(j, 1);
      bullets.splice(i, 1);
      score += 10;
      break;  // This bullet is gone, move to next bullet
    }
  }
}
```

### Game state pattern:
```javascript
// In game.js:
let gameState = 'menu';  // 'menu', 'playing', 'gameover'

// sketch.js already handles this — just make sure your
// functions only run when gameState === 'playing'
```

---

## Renaming Files for Your Game

Some games need different file names. For example, Pac-Man doesn't have bullets — it has dots and ghosts.

**It's OK to rename files!** Just make sure to:
1. Rename the file (e.g., `enemies.js` → `ghosts.js`)
2. Update `index.html` to load the new filename:
   ```html
   <script src="ghosts.js"></script>  <!-- was enemies.js -->
   ```
3. Update `sketch.js` to call the new function names:
   ```javascript
   updateGhosts();   // was updateEnemies()
   drawGhosts();     // was drawEnemies()
   ```
4. Tell your teammates so they update their function calls too

---

## Checklist

Use this to track your progress:

- [ ] Chose a game as a team
- [ ] Updated README with team name, game name, and file owners
- [ ] Each person read all template files
- [ ] Planned out arrays, variables, and functions for each file
- [ ] Each person wrote stub functions in their files
- [ ] First merge — game runs with all stubs, placeholder shapes visible
- [ ] Core mechanics working (player moves, enemies spawn)
- [ ] Collisions and scoring working
- [ ] Game state machine works (menu → play → game over → restart)
- [ ] Difficulty increases over time
- [ ] Polish added (better visuals, effects, UI)
- [ ] Final merge — game runs clean, no console errors
- [ ] README updated with controls and game description
- [ ] Presented to class
