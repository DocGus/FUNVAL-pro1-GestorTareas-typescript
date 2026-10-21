
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Código del lunes: variables y banner

const systemName: string = 'FUNVAL Developer Platform';
const version: number = 1.0;
const userName: string = 'Gus';

const nextVersion: number = version + 0.1;

console.log('==================================');
console.log('  ' + systemName + ' v' + nextVersion);
console.log('  ¡Bienvenido, ' + userName + '!');
console.log('  Cálculo de versión: ' + version + ' + 0.1 = ' + nextVersion);
console.log('==================================');

// Interfaz para definir la estructura de una tarea
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Arreglo tipado para almacenar objetos Task
const tasks: Task[] = [];

// Contador para generar identificadores únicos
let nextTaskId: number = 1;

// Función flecha para agregar una tarea
const addTask = (title: string): void => {
  const newTask: Task = {
    id: nextTaskId,
    title: title,
    completed: false
  };

  tasks.push(newTask);
  nextTaskId++;

  console.log('Tarea agregada: ' + newTask.title + ' (ID: ' + newTask.id + ')');
};

// Función flecha para listar las tareas
const listTasks = (): void => {
  console.log('\n===== LISTA DE TAREAS =====');

  if (tasks.length === 0) {
    console.log('No hay tareas registradas.');
    return;
  }

  for (const task of tasks) {
    const status: string = task.completed ? 'completed' : 'pending';

    console.log('[' + task.id + '] ' + task.title + ' - ' + status);
  }
};

// Función flecha para eliminar la última tarea
const removeTask = (): void => {
  const removedTask = tasks.pop();

  if (removedTask !== undefined) {
    console.log('Tarea eliminada: ' + removedTask.title);
  } else {
    console.log('No hay tareas para eliminar.');
  }
};

// Menú interactivo
async function main(): Promise<void> {
  let option: string = '';

  while (option !== '4') {
    console.log('\n===== MENÚ DE TAREAS =====');
    console.log('1. Agregar tarea');
    console.log('2. Eliminar última tarea');
    console.log('3. Listar tareas');
    console.log('4. Salir');

    option = await rl.question('Selecciona una opción: ');

    if (option === '1') {
      const title = await rl.question('Escribe el título de la tarea: ');

      if (title.trim() !== '') {
        addTask(title.trim());
      } else {
        console.log('El título no puede estar vacío.');
      }
    } else if (option === '2') {
      removeTask();
    } else if (option === '3') {
      listTasks();
    } else if (option === '4') {
      console.log('Saliendo del menú. ¡Hasta pronto, ' + userName + '!');
    } else {
      console.log('Opción no válida. Selecciona del 1 al 4.');
    }
  }
}

// 🚫 No eliminar las líneas de abajo ⬇️
main()
  .catch((error: unknown) => {
    console.error('Error al ejecutar el menú:', error);
  })
  .finally(() => {
    rl.close();
  });
