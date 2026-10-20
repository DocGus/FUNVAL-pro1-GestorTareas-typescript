
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

const systemName: string = 'FUNVAL Developer Platform';
const version: number = 1.0;
const userName: string = 'Gus';

const nextVersion: number = version + 0.1;

console.log('==================================');
console.log('  ' + systemName + ' v' + nextVersion);
console.log('  ¡Bienvenido, ' + userName + '!');
console.log('  Cálculo de versión: ' + version + ' + 0.1 = ' + nextVersion);
console.log('==================================');

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
