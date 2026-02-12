const chalk = require('chalk');
const { formatLog, formatTable } = require('./formatter');
const { colorize } = require('./colorizer');

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

module.exports = { main };

if (require.main === module) {
  main();
}
