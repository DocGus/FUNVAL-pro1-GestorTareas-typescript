let estudiantes2: string[] = [
  "Ivan",
  "Santiago",
  "Jesus",
  "Sara",
  "Oscar",
  "Leonardo",
];
/* ----------metodos de arrays---------- */
estudiantes2.forEach(function (e: string): void {
  console.log("Hola buenos dias " + e);
});

estudiantes2.forEach((e: string): void => {
  console.log("esta funcion flecha " + e);
});

/* -----------FORMAS DE ESCRIBIR UNA FUNCION------------ */

function resta(a: number, b: number): void {
  //codigo de la funcion
  let res = a - b;
}
/* ---------------FUNCIONES ANONIMAS------------ */
const superResta = function (a: number, b: number): void {
  //codigo de la funcion
  let res = a - b;
};
/* --------------FUNCIONES FLECHA------------------ */
const superResta2 = (a: number, b: number): number => a - b;

/* --------------------MAP--------------------- */

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let listaNueva = numeros.map(function (numero: number): string {
  return numero + " Rodriguez";
});

/* ------------------Filter----------------------- */
let listaFiltrada = numeros.filter(function (numero: number) {
  return numero % 2 !== 0;
});
console.log(listaFiltrada);
/* ----------------find----------------------------- */
let numeroEncontrado = numeros.find(function (num: number) {
  return num > 5;
});

console.log(numeroEncontrado);
/* ----------------FindIndex------------ */
let indiceEncontrado = numeros.findIndex(function (num: number) {
  return num > 5;
});
console.log(indiceEncontrado);
/* -------------SOME------------------ */
let alguno = numeros.some(function (num: number) {
  return num > 9;
});
console.log(alguno);

/* -------------------------EJERCICIOS------------------------------- */

// ============================================================================
// BLOQUE 1: forEach (Iteración y efectos secundarios)
// ============================================================================

// --- Interfaces base ---
interface Estudiante {
  nombre: string;
  nota: number;
}

interface ProductoStock {
  id: number;
  nombre: string;
  stock: number;
}

// ----------------------------------------------------------------------------
// [1] PROFE (DEMO)
// Consigna: Recorrer el array de notas y mostrar por consola un mensaje
// con el formato: "Alumno: [nombre] | Calificación: [nota]".
const estudiantesDemo: Estudiante[] = [
  { nombre: "Lucía", nota: 85 },
  { nombre: "Carlos", nota: 92 },
  { nombre: "Mariana", nota: 78 },
];

// ----------------------------------------------------------------------------
// [2] RETO ESTUDIANTE
// Consigna: Usar forEach para recorrer la lista de productos e imprimir
// una alerta por consola si el stock es menor a 5 unidades:
// Formato: "ALERTA: El producto [nombre] tiene stock bajo ([stock] unidades)".
// Si tiene 5 o más, imprimir: "OK: [nombre] en stock normal".
const inventario: ProductoStock[] = [
  { id: 101, nombre: "Teclado Mecánico", stock: 12 },
  { id: 102, nombre: "Mouse Pad XL", stock: 3 },
  { id: 103, nombre: "Cable HDMI 2.1", stock: 2 },
];

// TU CÓDIGO AQUÍ:
inventario.forEach((producto: ProductoStock): void => {
  if (producto.stock < 5) {
    console.log(
      `ALERTA: El producto ${producto.nombre} tiene stock bajo (${producto.stock} unidades)`,
    );
  } else {
    console.log(`OK: ${producto.nombre} en stock normal`);
  }
});

// ----------------------------------------------------------------------------
// [3] PROFE (DEMO)
// Consigna: Usar forEach con su segundo parámetro (índice) para acumular
// el total de una lista de precios y mostrar el paso a paso.
const preciosDemo: number[] = [120, 45, 90, 15];
let totalDemo: number = 0;

// ----------------------------------------------------------------------------
// [4] RETO ESTUDIANTE
// Consigna: Dado un array con las horas de estudio semanales de un alumno,
// usar forEach con el índice para calcular cuántas horas superan las 4 horas
// diarias e imprimir: "Día [index + 1]: [horas] hrs -> [Superó / No superó] la meta diaria".
const horasSemanales: number[] = [5, 3, 6, 2, 8, 4, 1];
let diasSuperados: number = 0;

// TU CÓDIGO AQUÍ:
horasSemanales.forEach((horas: number, indice: number): void => {
  const superoMeta: boolean = horas > 4;
  if (superoMeta) {
    diasSuperados++;
  }
  console.log(
    `Día ${indice + 1}: ${horas} hrs -> ${superoMeta ? "Superó" : "No superó"} la meta diaria`,
  );
});

// ============================================================================
// BLOQUE 2: map (Transformación de datos hacia un nuevo array)
// ============================================================================

// --- Interfaces base ---
interface ProductoPrecio {
  nombre: string;
  precioUsd: number;
}

interface ProductoConImpuesto {
  nombre: string;
  precioUsd: number;
  precioFinal: number;
}

interface UsuarioRaw {
  primerNombre: string;
  apellidoPaterno: string;
  edad: number;
}

interface UsuarioPerfil {
  nombreCompleto: string;
  esMayorDeEdad: boolean;
}

// ----------------------------------------------------------------------------
// [5] PROFE (DEMO)
// Consigna: Transformar una lista de precios en USD a una lista de objetos
// que incluya el cálculo de impuesto (13%).
const catalogoDemo: ProductoPrecio[] = [
  { nombre: "Monitor 24''", precioUsd: 150 },
  { nombre: "Auriculares USB", precioUsd: 40 },
  { nombre: "Webcam 1080p", precioUsd: 60 },
];

// ----------------------------------------------------------------------------
// [6] RETO ESTUDIANTE
// Consigna: Dado un array de usuarios con nombres separados y edad, usar map
// para obtener un array de objetos tipo `UsuarioPerfil` con el nombre concatenado
// en mayúsculas y una bandera booleana `esMayorDeEdad` (true si edad >= 18).
const usuariosRaw: UsuarioRaw[] = [
  { primerNombre: "Andrés", apellidoPaterno: "Guzmán", edad: 17 },
  { primerNombre: "Camila", apellidoPaterno: "Rios", edad: 24 },
  { primerNombre: "Diego", apellidoPaterno: "Salvatierra", edad: 15 },
];

// TU CÓDIGO AQUÍ:
const perfilesUsuarios: UsuarioPerfil[] = usuariosRaw.map(
  (usuario: UsuarioRaw): UsuarioPerfil => ({
    nombreCompleto: `${usuario.primerNombre} ${usuario.apellidoPaterno}`.toUpperCase(),
    esMayorDeEdad: usuario.edad >= 18,
  }),
);
console.log(perfilesUsuarios);

// ----------------------------------------------------------------------------
// [7] PROFE (DEMO)
// Consigna: Mapear un array de strings con nombres de archivos y extraer
// solo la extensión de cada uno.
const archivosDemo: string[] = [
  "reporte.pdf",
  "logo.png",
  "index.html",
  "script.ts",
];

// ----------------------------------------------------------------------------
// [8] RETO ESTUDIANTE
// Consigna: Dado un array de correos electrónicos corporativos, usar map para
// extraer un array con solo los dominios de cada correo (lo que va después del @).
// Ejemplo: "pepe@empresa.com" -> "empresa.com".
const correos: string[] = [
  "admin@servicios.bo",
  "contacto@instituto.edu",
  "ventas@techstore.com",
  "soporte@servicios.bo",
];

// TU CÓDIGO AQUÍ:
const dominiosCorreos: string[] = correos.map(
  (correo: string): string => correo.slice(correo.indexOf("@") + 1),
);
console.log(dominiosCorreos);

// ============================================================================
// BLOQUE 3: filter (Filtrado de colecciones bajo una condición)
// ============================================================================

// --- Interfaces base ---
interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  prioridad: "alta" | "media" | "baja";
}

interface Transaccion {
  id: string;
  monto: number;
  tipo: "ingreso" | "egreso";
  aprobada: boolean;
}

// ----------------------------------------------------------------------------
// [9] PROFE (DEMO)
// Consigna: Filtrar un listado de tareas pendientes que además tengan prioridad alta.
const tareasDemo: Tarea[] = [
  {
    id: 1,
    titulo: "Configurar DB Supabase",
    completada: false,
    prioridad: "alta",
  },
  { id: 2, titulo: "Actualizar README", completada: true, prioridad: "baja" },
  {
    id: 3,
    titulo: "Corregir bug de login",
    completada: false,
    prioridad: "alta",
  },
  {
    id: 4,
    titulo: "Diseñar wireframes",
    completada: false,
    prioridad: "media",
  },
];

// ----------------------------------------------------------------------------
// [10] RETO ESTUDIANTE
// Consigna: Filtrar un array de transacciones financieras para obtener solo
// aquellas que sean de tipo "egreso", que hayan sido aprobadas y cuyo monto
// sea mayor a Bs. 100.
const historialTransacciones: Transaccion[] = [
  { id: "tx-01", monto: 50, tipo: "egreso", aprobada: true },
  { id: "tx-02", monto: 450, tipo: "egreso", aprobada: true },
  { id: "tx-03", monto: 1200, tipo: "ingreso", aprobada: true },
  { id: "tx-04", monto: 300, tipo: "egreso", aprobada: false },
  { id: "tx-05", monto: 150, tipo: "egreso", aprobada: true },
];

// TU CÓDIGO AQUÍ:
const egresosAprobados: Transaccion[] = historialTransacciones.filter(
  (transaccion: Transaccion): boolean =>
    transaccion.tipo === "egreso" &&
    transaccion.aprobada &&
    transaccion.monto > 100,
);
console.log(egresosAprobados);

// ----------------------------------------------------------------------------
// [11] PROFE (DEMO)
// Consigna: Filtrar palabras que tengan más de 6 letras y que comiencen con la letra 'c'.
const palabrasDemo: string[] = [
  "computadora",
  "cielo",
  "cuaderno",
  "teclado",
  "cable",
  "controlador",
];

// ----------------------------------------------------------------------------
// [12] RETO ESTUDIANTE
// Consigna: Dado un array de slugs de rutas web, filtrar solo aquellos que
// contengan un guión medio ("-") y cuya longitud sea menor o igual a 15 caracteres.
const rutasWeb: string[] = [
  "perfil-usuario",
  "blog",
  "contacto",
  "configuracion-avanzada-cuenta",
  "dashboard-admin",
  "faq",
];

// TU CÓDIGO AQUÍ:
const rutasConGuionCortas: string[] = rutasWeb.filter(
  (ruta: string): boolean => ruta.includes("-") && ruta.length <= 15,
);
console.log(rutasConGuionCortas);

// ============================================================================
// BLOQUE 4: find (Búsqueda del primer elemento coincidente)
// ============================================================================

// --- Interfaces base ---
interface UsuarioSistema {
  id: number;
  username: string;
  rol: "admin" | "editor" | "invitado";
  activo: boolean;
}

interface Vehiculo {
  placa: string;
  marca: string;
  anio: number;
  enMantenimiento: boolean;
}

// ----------------------------------------------------------------------------
// [13] PROFE (DEMO)
// Consigna: Buscar al primer usuario que tenga rol "admin" y esté activo.
// Manejar el caso de no encontrarlo usando optional chaining o fallback.
const usuariosDemo: UsuarioSistema[] = [
  { id: 1, username: "dev_junior", rol: "editor", activo: true },
  { id: 2, username: "super_admin", rol: "admin", activo: false },
  { id: 3, username: "root_boss", rol: "admin", activo: true },
  { id: 4, username: "visitante_99", rol: "invitado", activo: true },
];

// ----------------------------------------------------------------------------
// [14] RETO ESTUDIANTE
// Consigna: Buscar en la flotilla el primer vehículo de marca "Toyota" que
// sea del año 2020 en adelante y que NO esté en mantenimiento. Imprimir su placa.
const flotilla: Vehiculo[] = [
  { placa: "4521-ABC", marca: "Nissan", anio: 2021, enMantenimiento: false },
  { placa: "1289-XYZ", marca: "Toyota", anio: 2018, enMantenimiento: false },
  { placa: "3310-BOL", marca: "Toyota", anio: 2022, enMantenimiento: true },
  { placa: "7741-KLP", marca: "Toyota", anio: 2023, enMantenimiento: false },
];

// TU CÓDIGO AQUÍ:
const toyotaDisponible: Vehiculo | undefined = flotilla.find(
  (vehiculo: Vehiculo): boolean =>
    vehiculo.marca === "Toyota" &&
    vehiculo.anio >= 2020 &&
    !vehiculo.enMantenimiento,
);
console.log(toyotaDisponible?.placa ?? "Vehículo no encontrado");

// ----------------------------------------------------------------------------
// [15] PROFE (DEMO)
// Consigna: Buscar el primer número negativo dentro de un array de saldos.
const saldosDemo: number[] = [1500, 320, 85, -240, 600, -15];

// ----------------------------------------------------------------------------
// [16] RETO ESTUDIANTE
// Consigna: Dado un array de puntajes de un juego, encontrar el primer puntaje
// que supere los 100 puntos y sea un número par. Imprimir el resultado.
const puntajes: number[] = [45, 88, 105, 112, 99, 140];

// TU CÓDIGO AQUÍ:
const puntajeValido: number | undefined = puntajes.find(
  (puntaje: number): boolean => puntaje > 100 && puntaje % 2 === 0,
);
console.log(puntajeValido ?? "No se encontró un puntaje que cumpla la condición");

// ============================================================================
// BLOQUE 5: findIndex (Ubicación por índice) y Desafíos Integradores
// ============================================================================

// --- Interfaces base ---
interface Pasajero {
  asiento: string;
  nombre: string;
  confirmado: boolean;
}

interface ProductoCarrito {
  sku: string;
  nombre: string;
  cantidad: number;
}

// ----------------------------------------------------------------------------
// [17] PROFE (DEMO)
// Consigna: Encontrar el índice del primer pasajero que NO haya confirmado su
// boleto para actualizar su estado. Si no existe, avisar que todos confirmaron.
const listaPasajerosDemo: Pasajero[] = [
  { asiento: "1A", nombre: "Valeria Paz", confirmado: true },
  { asiento: "1B", nombre: "Marco Choque", confirmado: true },
  { asiento: "2A", nombre: "Sofía Medina", confirmado: false },
  { asiento: "2B", nombre: "Jorge Flores", confirmado: true },
];

// ----------------------------------------------------------------------------
// [18] RETO ESTUDIANTE
// Consigna: En un carrito de compras, encontrar el índice del producto con SKU
// "SKU-990". Si existe (índice distinto de -1), aumentar su cantidad en 1 unidad
// modificando el array original. Si no existe, imprimir "Producto no encontrado".
const carrito: ProductoCarrito[] = [
  { sku: "SKU-100", nombre: "Termo 1L", cantidad: 1 },
  { sku: "SKU-540", nombre: "Taza térmica", cantidad: 2 },
  { sku: "SKU-990", nombre: "Stickers Dev", cantidad: 3 },
];

// TU CÓDIGO AQUÍ:
const indiceProducto: number = carrito.findIndex(
  (producto: ProductoCarrito): boolean => producto.sku === "SKU-990",
);
if (indiceProducto !== -1) {
  carrito[indiceProducto].cantidad++;
} else {
  console.log("Producto no encontrado");
}

// ----------------------------------------------------------------------------
// [19] PROFE (DEMO) - INTEGRADOR: filter + map encadenados
// Consigna: De una lista de estudiantes, filtrar solo a los que aprobaron
// (nota >= 51) y devolver únicamente un array de strings con sus nombres en mayúsculas.
const alumnosCursoDemo: Estudiante[] = [
  { nombre: "Alan", nota: 42 },
  { nombre: "Beatriz", nota: 75 },
  { nombre: "César", nota: 30 },
  { nombre: "Daniela", nota: 88 },
];

// ----------------------------------------------------------------------------
// [20] RETO ESTUDIANTE - INTEGRADOR: filter + map encadenados
// Consigna: Dado el array de productos del inventario, encadenar `filter` y `map` para:
// 1. Filtrar solo los productos cuyo stock sea mayor a 0 (disponibles).
// 2. Mapear el resultado para obtener un array de strings con el siguiente formato:
//    "Producto: [nombre] | Unidades disponibles: [stock]".
const catalogoAlmacen: ProductoStock[] = [
  { id: 201, nombre: "Hub USB-C", stock: 8 },
  { id: 202, nombre: "Soporte Laptop", stock: 0 },
  { id: 203, nombre: "Microfono Condensador", stock: 5 },
  { id: 204, nombre: "Brazo Articulado", stock: 0 },
];

// TU CÓDIGO AQUÍ:
const productosDisponibles: string[] = catalogoAlmacen
  .filter((producto: ProductoStock): boolean => producto.stock > 0)
  .map(
    (producto: ProductoStock): string =>
      `Producto: ${producto.nombre} | Unidades disponibles: ${producto.stock}`,
  );
console.log(productosDisponibles);