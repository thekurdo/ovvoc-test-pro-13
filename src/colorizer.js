import chalk from 'chalk';

function colorize(text, style) {
  switch (style) {
    case 'rainbow':
      return text.split('').map((char, i) => {
        const colors = [chalk.red, chalk.yellow, chalk.green, chalk.cyan, chalk.blue, chalk.magenta];
        return colors[i % colors.length](char);
      }).join('');
    case 'success':
      return chalk.green.bold('✓ ') + chalk.green(text);
    case 'failure':
      return chalk.red.bold('✗ ') + chalk.red(text);
    case 'highlight':
      return chalk.bgYellow.black(text);
    case 'muted':
      return chalk.gray.italic(text);
    default:
      return chalk.hex('orange')(text);
  }
}

function createTheme(colors) {
  return {
    primary: chalk.hex(colors.primary || '#3498db'),
    secondary: chalk.hex(colors.secondary || '#2ecc71'),
    accent: chalk.hex(colors.accent || '#e74c3c'),
    muted: chalk.gray,
  };
}

export {  colorize, createTheme  };
export default {  colorize, createTheme  };