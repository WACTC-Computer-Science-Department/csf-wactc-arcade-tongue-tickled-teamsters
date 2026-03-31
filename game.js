// ============================================
// GAME CONFIGURATION
// Edit these values to customize your game!
// Will be changed by Mianee
// ============================================

// Canvas
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

// Colors (change these to match your game's theme)
const COLOR_BACKGROUND = '#1a1a2e';
const COLOR_PLAYER = '#00ff88';
const COLOR_ENEMY = '#ff4444';
const COLOR_BULLET = '#ffff00';
const COLOR_UI = '#009751';

// Player settings
const PLAYER_SPEED = 5;
const PLAYER_SIZE = 20;
const PLAYER_LIVES = 3;

// Enemy settings
const ENEMY_SPEED = 2;
const ENEMY_SIZE = 15;
const ENEMY_SPAWN_RATE = 60; // frames between spawns (lower = more enemies)

// Bullet settings
const BULLET_SPEED = 7;
const BULLET_SIZE = 5;

// Difficulty
const DIFFICULTY_INCREASE_INTERVAL = 300; // frames between difficulty increases
const MAX_ENEMY_SPEED = 6;

// Game state
let gameState = 'menu'; // 'menu', 'playing', 'gameover'
let score = 0;
let highScore = 0;
let frameCounter = 0;
