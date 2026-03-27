# Step-by-Step Checklists

Print these out or check them off as you go. Each step must be complete before moving to the next.

---

## Step 1: Choose Your Game
- [ ] Team reviewed all 4 game options in GAME-OPTIONS.md
- [ ] Team discussed pros/cons of each option
- [ ] Team voted and agreed on one game
- [ ] README.md updated: replaced `[Your Game Name]` with actual name
- [ ] README.md updated: added game description
- [ ] Committed and pushed the README change

**Teacher check:** README has a real game name. All team members agree on the choice.

---

## Step 2: Open Your Project
- [ ] Each team member can access the repo on GitHub
- [ ] Each team member opened the project (Codespace or VS Code)
- [ ] Each team member can see all template files
- [ ] Each team member opened index.html and saw the starter screen

**Teacher check:** Every student has the project open and running.

---

## Step 3: Explore the Template
- [ ] Read `sketch.js` — can explain what `setup()` and `draw()` do
- [ ] Read `game.js` — can explain what the configuration variables control
- [ ] Read `player.js` — found the TODO comments
- [ ] Read `enemies.js` — found the TODO comments
- [ ] Read `collisions.js` — understands how it connects other files
- [ ] Read `ui.js` — found the three screen functions
- [ ] Can answer: "What order does `draw()` call functions in?"
- [ ] Can answer: "Why shouldn't you edit `sketch.js`?"

**Teacher check:** Ask each student to explain one file's purpose.

---

## Step 4: Plan Your Components
- [ ] Listed all arrays needed for your game
- [ ] Listed shared variables (score, gameState, etc.)
- [ ] Listed functions for each file
- [ ] Identified which functions call functions from other files
- [ ] Identified shared variables that multiple files read/write
- [ ] Completed the Component Map planning tool (or wrote it down)

**Teacher check:** Plan covers all files. Students know what arrays they need and what each function does.

---

## Step 5: Divide the Work
- [ ] Each team member knows which file(s) they own
- [ ] Team agreed on shared variable names
- [ ] Team agreed on function names that cross files
- [ ] README.md file ownership table filled in
- [ ] Committed and pushed README changes

**Teacher check:** Work split is roughly even. Each person has real coding work.

---

## Step 6: Write Stub Functions
- [ ] Each person filled in their functions with placeholder code
- [ ] Functions have the right names (match what sketch.js calls)
- [ ] draw functions draw at least a placeholder shape
- [ ] update functions exist (even if empty)
- [ ] Arrays are declared at the top of the file
- [ ] Code has no errors (check browser console — F12)
- [ ] Each person committed and pushed their stubs

**Teacher check:** Open browser console — zero errors. Each file has real function definitions.

---

## Step 7: First Team Merge
- [ ] Everyone pushed their stubs
- [ ] Everyone pulled (Sync) to get all teammates' code
- [ ] Resolved any merge conflicts together
- [ ] Game runs in browser without errors
- [ ] Placeholder shapes appear on screen
- [ ] Game state machine works: menu → playing → game over
- [ ] Each file's functions are being called by sketch.js

**Teacher check:** Game runs with all stubs. Shapes are visible. Console is clean.

---

## Step 8: Build — Core Mechanics
- [ ] Player(s) move with keyboard controls
- [ ] Players stay inside canvas bounds
- [ ] Enemies spawn from edges and move (toward player or in a pattern)
- [ ] Bullets fire in the right direction
- [ ] Each person committed and pushed working mechanics

**Teacher check:** Players move, enemies spawn, bullets fly. Each file has real code.

---

## Step 8: Build — Interactions
- [ ] Bullet-enemy collisions work (enemy removed, score increases)
- [ ] Enemy-player collisions work (player takes damage)
- [ ] Backward loops used for splice (no skipped elements)
- [ ] Score updates correctly
- [ ] Dead objects are cleaned up

**Teacher check:** Shoot an enemy — it disappears, score goes up. Touch an enemy — player loses health.

---

## Step 8: Build — Game Flow
- [ ] Menu screen shows game name and instructions
- [ ] HUD shows score, lives/health, and wave/level
- [ ] Game over triggers when player dies (or both players in co-op)
- [ ] Game over screen shows final score
- [ ] Pressing R restarts
- [ ] Waves/levels advance (new enemies after clearing)

**Teacher check:** Full cycle works: menu → play → die → game over → restart.

---

## Step 8: Build — Polish
- [ ] Difficulty increases over time
- [ ] At least one visual effect (flash, color change, size change)
- [ ] Different enemy types or patterns
- [ ] UI is clean and readable
- [ ] Incorporated playtest feedback
- [ ] Removed leftover TODO comments from implemented code

**Teacher check:** Game feels complete. Difficulty ramps. Multiple enemy types.

---

## Final Submission
- [ ] All code committed and pushed — everyone pulled final version
- [ ] No errors in browser console
- [ ] README.md is complete:
  - [ ] Team members and file ownership
  - [ ] Game description and controls
  - [ ] How to play instructions
- [ ] Game plays start to finish without crashes
- [ ] Prepared 2-3 minute presentation

**Teacher check:** Clone fresh, open index.html — game works. README complete. Git log shows all contributors.

---

## Presentation Day
- [ ] Demonstrated the game live
- [ ] Explained how the team divided work by file
- [ ] Showed how arrays and loops power the game
- [ ] Answered at least one audience question
- [ ] Every team member spoke

**Teacher check:** All members participated. Arrays/loops concepts were explained.
