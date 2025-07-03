import chalk from 'chalk';
import logSymbols from 'log-symbols';


console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.black.bgWhite.italic('My name is Gustavo!'));
console.log(logSymbols.success, chalk.green.italic('Servidor iniciado com sucesso!'));

console.log(logSymbols.error, chalk.red.bgBlack("Servidor com erro"))