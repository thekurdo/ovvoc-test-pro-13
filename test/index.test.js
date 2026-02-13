import chalk from 'chalk';
import {  formatLog, formatTable, LEVEL_COLORS  } from '../src/formatter.js';
import {  colorize, createTheme  } from '../src/colorizer.js';
import {  main  } from '../src/index.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(chalk.green(`  ✓ ${message}`));
  } else {
    failed++;
    console.log(chalk.red(`  ✗ ${message}`));
  }
}

console.log('Testing formatter...');

// Test formatLog
const entry = { level: 'info', message: 'test', timestamp: '2024-01-01T12:00:00Z' };
const formatted = formatLog(entry);
assert(typeof formatted === 'string', 'formatLog returns string');
assert(formatted.length > 0, 'formatLog output is not empty');

// Test all levels
for (const level of ['info', 'warn', 'error', 'debug']) {
  const result = formatLog({ level, message: `${level} test`, timestamp: '2024-01-01T00:00:00Z' });
  assert(typeof result === 'string', `formatLog handles ${level} level`);
}

// Test formatTable
const entries = [
  { level: 'info', message: 'msg1', timestamp: '2024-01-01T12:00:00Z' },
  { level: 'error', message: 'msg2', timestamp: '2024-01-01T12:01:00Z' },
];
const table = formatTable(entries);
assert(table.includes('Level'), 'formatTable has header');
assert(table.split('\n').length >= 4, 'formatTable has rows');

// Test LEVEL_COLORS
assert(typeof LEVEL_COLORS.info === 'function', 'info color is a function');
assert(typeof LEVEL_COLORS.error === 'function', 'error color is a function');

console.log('\nTesting colorizer...');

// Test colorize styles
const styles = ['rainbow', 'success', 'failure', 'highlight', 'muted'];
for (const style of styles) {
  const result = colorize('test', style);
  assert(typeof result === 'string', `colorize handles ${style} style`);
  assert(result.length > 0, `colorize ${style} output not empty`);
}

// Test default style (keyword)
const defaultResult = colorize('test', 'unknown');
assert(typeof defaultResult === 'string', 'colorize handles default style');

// Test createTheme
const theme = createTheme({ primary: '#ff0000' });
assert(typeof theme.primary === 'function', 'theme.primary is a function');
assert(typeof theme.secondary === 'function', 'theme.secondary is a function');
assert(typeof theme.accent === 'function', 'theme.accent is a function');
assert(typeof theme.muted === 'function', 'theme.muted is a function');

// Test main doesn't throw
assert(typeof main === 'function', 'main is exported');

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
