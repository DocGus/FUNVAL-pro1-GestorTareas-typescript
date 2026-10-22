
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

// Función para listar tareas usando destructuring, map() y forEach()
const listTasks = (): void => {
  console.log('\n===== LISTA DE TAREAS =====');

  if (tasks.length === 0) {
    console.log('No hay tareas registradas.');
    return;
  }

  const formattedTasks: string[] = tasks.map((task) => {
    const { id, title, completed } = task;
    const status: string = completed ? 'completed' : 'pending';

    return '[' + id + '] ' + title + ' - ' + status;
  });

  formattedTasks.forEach((task) => {
    console.log(task);
  });
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

// Función para marcar una tarea como completada usando find()
const markCompleted = (id: number): void => {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    if (task.completed) {
      console.log('La tarea ya estaba completada: ' + task.title);
    } else {
      task.completed = true;
      console.log('Tarea completada: ' + task.title);
    }
  } else {
    console.log('No se encontró una tarea con el ID ' + id);
  }
};

// Función para obtener las tareas pendientes usando filter()
const filterPending = (): Task[] => {
  return tasks.filter((task) => !task.completed);
};

// Función para obtener las tareas completadas usando filter()
const filterCompleted = (): Task[] => {
  return tasks.filter((task) => task.completed);
};

// Función para mostrar una lista filtrada de tareas
const showFilteredTasks = (filteredTasks: Task[], heading: string): void => {
  console.log('\n===== ' + heading + ' =====');

  if (filteredTasks.length === 0) {
    console.log('No hay tareas en esta categoría.');
    return;
  }

  filteredTasks
    .map(({ id, title, completed }) => {
      const status: string = completed ? 'completed' : 'pending';
      return '[' + id + '] ' + title + ' - ' + status;
    })
    .forEach((task) => console.log(task));
};

// Menú interactivo
async function main(): Promise<void> {
  let option: string = '';

  while (option !== '7') {
    console.log('\n===== MENÚ DE TAREAS =====');
    console.log('1. Agregar tarea');
    console.log('2. Eliminar última tarea');
    console.log('3. Listar todas las tareas');
    console.log('4. Marcar tarea como completada');
    console.log('5. Listar tareas pendientes');
    console.log('6. Listar tareas completadas');
    console.log('7. Salir');

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
      const idInput = await rl.question('Escribe el ID de la tarea: ');
      const id = Number(idInput);

      if (idInput.trim() !== '' && Number.isInteger(id) && id > 0) {
        markCompleted(id);
      } else {
        console.log('Ingresa un ID válido.');
      }
    } else if (option === '5') {
      showFilteredTasks(filterPending(), 'TAREAS PENDIENTES');
    } else if (option === '6') {
      showFilteredTasks(filterCompleted(), 'TAREAS COMPLETADAS');
    } else if (option === '7') {
      console.log('Saliendo del menú. ¡Hasta pronto, ' + userName + '!');
    } else {
      console.log('Opción no válida. Selecciona del 1 al 7.');
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
