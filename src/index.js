import chalk from 'chalk';
import {  formatLog, formatTable  } from './formatter.js';
import {  colorize  } from './colorizer.js';

function main() {
  const logs = [
    { level: 'info', message: 'Server started on port 3000', timestamp: new Date().toISOString() },
    { level: 'warn', message: 'Memory usage above 80%', timestamp: new Date().toISOString() },
    { level: 'error', message: 'Database connection failed', timestamp: new Date().toISOString() },
    { level: 'debug', message: 'Processing request /api/users', timestamp: new Date().toISOString() },
  ];

  console.log(chalk.bold.underline('=== Log Output ===\n'));

  for (const log of logs) {
    console.log(formatLog(log));
  }

  console.log('\n' + formatTable(logs));
  console.log('\n' + colorize('Custom styled output', 'rainbow'));
}

export {  main  };
export default {  main  };
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
