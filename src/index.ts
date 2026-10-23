
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const userName: string = 'Gustavo Andres';
const systemName: string = 'Mi primer Sistema';
const version: number = 1;

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [];
let nextTaskId: number = 1;
let headerMessage: string = 'Bienvenido: ' + userName;
let resultLines: string[] = [];

// Dibuja la cabecera y el resultado de la última operación.
// No limpia la terminal ni vuelve a imprimir el menú.
const showHeader = (): void => {
  console.log('==============================================');
  console.log(systemName + ' VERSION: ' + version);
  console.log(headerMessage);
  console.log('Total de tareas: ' + tasks.length);
  console.log('==============================================');

  resultLines.forEach((line) => console.log(line));

  if (resultLines.length > 0) {
    console.log('==============================================');
  }
};

const updateScreen = (message: string, details: string[] = []): void => {
  headerMessage = message;
  resultLines = details;
  showHeader();
};

const showMenu = (): void => {
  console.log('\nSeleccione una opción:');
  console.log('1. Agregar tarea');
  console.log('2. Eliminar tarea por ID');
  console.log('3. Ver todas las tareas');
  console.log('4. Marcar tarea como completada');
  console.log('5. Listar tareas pendientes');
  console.log('6. Listar tareas completadas');
  console.log('7. Salir');
};

// Simula el guardado de una tarea en una base de datos.
const saveToDB = (task: Task): Promise<Task> => {
  console.log('\nGuardando tarea en la base de datos ...');

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Tarea guardada en la base de datos: ' + task.title);
      resolve(task);
    }, 2000);
  });
};

// Agrega una tarea usando async/await y try/catch.
const addTask = async (title: string): Promise<void> => {
  try {
    if (title.trim() === '') {
      throw new Error('El título de la tarea no puede estar vacío.');
    }

    const newTask: Task = {
      id: nextTaskId,
      title: title.trim(),
      completed: false
    };

    await saveToDB(newTask);

    tasks.push(newTask);
    nextTaskId++;

    updateScreen(
      'Tarea agregada: ' + newTask.title + ' ✅',
      ['Tarea agregada correctamente.']
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : 'Ocurrió un error inesperado.';

    updateScreen('Error al agregar la tarea', [message]);
  }
};

// Lista todas las tareas.
const listTasks = (): void => {
  const details = tasks.map((task) => {
    const status = task.completed ? 'Completada' : 'Pendiente';
    return '[' + task.id + '] ' + task.title + ' - ' + status;
  });

  updateScreen(
    'Lista de tareas:',
    details.length > 0 ? details : ['No hay tareas registradas.']
  );
};

// Elimina una tarea específica por ID.
const removeTask = (id: number): void => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    throw new Error('Tarea no encontrada.');
  }

  const removedTask = tasks.splice(taskIndex, 1)[0];

  updateScreen(
    'Tarea eliminada: ' + removedTask.title,
    ['Tarea eliminada correctamente.']
  );
};

// Marca una tarea como completada.
const markCompleted = (id: number): void => {
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    throw new Error('Tarea no encontrada.');
  }

  if (task.completed) {
    updateScreen(
      'Tarea marcada como completada',
      ['La tarea ya estaba completada: ' + task.title]
    );
    return;
  }

  task.completed = true;

  updateScreen(
    'Tarea marcada como completada: ' + task.title,
    ['La tarea se actualizó correctamente.']
  );
};

// Filtra las tareas pendientes.
const filterPending = (): void => {
  const pending = tasks.filter((task) => !task.completed);

  const details = pending.map(
    (task) => '[' + task.id + '] ' + task.title + ' - Pendiente'
  );

  updateScreen(
    'Tareas pendientes:',
    details.length > 0 ? details : ['No hay tareas pendientes.']
  );
};

// Filtra las tareas completadas.
const filterCompleted = (): void => {
  const completed = tasks.filter((task) => task.completed);

  const details = completed.map(
    (task) => '[' + task.id + '] ' + task.title + ' - Completada'
  );

  updateScreen(
    'Tareas completadas:',
    details.length > 0 ? details : ['No hay tareas completadas.']
  );
};

// Solicita y valida un ID.
const askForId = async (message: string): Promise<number | null> => {
  const idInput = await rl.question(message);
  const id = Number(idInput);

  if (idInput.trim() === '' || !Number.isInteger(id) || id <= 0) {
    updateScreen('ID inválido', ['Ingresa un ID entero positivo.']);
    return null;
  }

  return id;
};

// Menú principal.
async function main(): Promise<void> {
  let option: string = '';

  showHeader();

  while (option !== '7') {
    showMenu();

    option = await rl.question('\nOpción: ');

    if (option === '1') {
      const title = await rl.question('Escribe el título de la tarea: ');
      await addTask(title);
    } else if (option === '2') {
      const id = await askForId('Escribe el ID de la tarea que deseas eliminar: ');

      if (id !== null) {
        try {
          removeTask(id);
        } catch (error: unknown) {
          updateScreen(
            'Error al eliminar la tarea',
            [error instanceof Error ? error.message : 'Error inesperado.']
          );
        }
      }
    } else if (option === '3') {
      listTasks();
    } else if (option === '4') {
      const id = await askForId('Escribe el ID de la tarea: ');

      if (id !== null) {
        try {
          markCompleted(id);
        } catch (error: unknown) {
          updateScreen(
            'Error al completar la tarea',
            [error instanceof Error ? error.message : 'Error inesperado.']
          );
        }
      }
    } else if (option === '5') {
      filterPending();
    } else if (option === '6') {
      filterCompleted();
    } else if (option === '7') {
      updateScreen('Hasta pronto, ' + userName, ['Saliendo del programa.']);
    } else {
      updateScreen('Opción no válida', ['Selecciona una opción del 1 al 7.']);
    }
  }
}

main()
  .catch((error: unknown) => {
    console.error('Error al ejecutar el menú:', error);
  })
  .finally(() => {
    rl.close();
  });
