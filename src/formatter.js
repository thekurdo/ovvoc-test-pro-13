import chalk from 'chalk';

const LEVEL_COLORS = {
  info: chalk.blue,
  warn: chalk.yellow,
  error: chalk.red.bold,
  debug: chalk.gray,
};

function formatLog(entry) {
  const colorFn = LEVEL_COLORS[entry.level] || chalk.white;
  const timestamp = chalk.dim(entry.timestamp);
  const level = colorFn(`[${entry.level.toUpperCase()}]`.padEnd(9));
  const message = entry.level === 'error' ? chalk.red(entry.message) : entry.message;
  return `${timestamp} ${level} ${message}`;
}

function formatTable(entries) {
  const header = chalk.bold('Level'.padEnd(8) + 'Message'.padEnd(40) + 'Time');
  const separator = chalk.dim('-'.repeat(60));
  const rows = entries.map(e => {
    const colorFn = LEVEL_COLORS[e.level] || chalk.white;
    return colorFn(e.level.padEnd(8)) + e.message.padEnd(40) + chalk.dim(e.timestamp.slice(11, 19));
  });
  return [header, separator, ...rows].join('\n');
}

export {  formatLog, formatTable, LEVEL_COLORS  };
export default {  formatLog, formatTable, LEVEL_COLORS  };