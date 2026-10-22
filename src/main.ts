// INICIANDO EL PROGRAMA DE FUNVAL
/*
comentarios
en
varias
lineas
*/
console.log("INICIO DEL PROGRAMA"); //imprimir cosas en la consola

//----------------------------------------------------------
// TIPOS DE DATOS
let edad: number = 32.2;
let apPaterno: string = `Rodriguez`;
let fecha: string = "2024-25-26";
let salva: boolean = false;
let resultado: null = null;
let noDefinido: undefined;
let numeroGigante: bigint = 12873612874612674n;
let idUnico: symbol = Symbol("id");
//EXLUCISVOS DE TYPESCRIPT
let comodin: any = "texto plano";
comodin = 32;
comodin = true;
let dato: unknown = "mensaje";
let vacio: void;
// aprender a crear variables y constantes en TYPESCRIPT

//variables se pueden reasignar mas no cambiar el tipo de dato
let superHeroe = "Spiderman";
superHeroe = "Batman";
superHeroe = "Ant man";
//constantes NO SE PUEDEN REASIGNAR
const pi = 3.1416;
//ADVERTENCIA!!!!!!!
var prohibido = "NO USAR";
///-----------------------simbolos de operacion---------------
//+  ADICION O CONCATENACION
let nombreCompleto = "Kevin" + " " + "Rodriguez";
console.log(nombreCompleto);
let a = 2;
let b = 4;
let superResultado = a + b;
// - SUSTRACION
superResultado = a - b;
// * MULTIPLICACION
superResultado = a * b;

//    /  DIVISION
superResultado = a / b;
// %    MODULO
superResultado = b % a;
// **   POTENCIA
superResultado = a ** b;
// SIMBOLOS DE COMPARACION siempre retorna un boolean
let comparacion = a == b; // igual que
comparacion = a != b; // diferente que
comparacion = a > b; // mayor estricto
comparacion = a >= b; // mayor igual que
comparacion = a < b; // menor estricto
comparacion = a <= b; // menor igual que

//Simbolos de autoasignacion
let random = 2;
random++; // random = random +1
random--; // random = random -1
random += 5; // random = random +5
random -= 5; // random = random -5
random *= 5; // random = random *5
random /= 5; // random = random /5
random %= 5; // random = random %5

//operadores logicos
let compracion = a == b && b < 4; // AND
compracion = a == b || b < 4; // OR
compracion = !(a == b); // NEGACION

/* ------------------------------ */
let estudiante: string = "Esdras Blanco";
let nota1 = 90;
let nota2 = 75;
let nota3 = 5;
let promedio = (nota1 + nota2 + nota3) / 3;
console.log(
  "el estudiante " + estudiante + " tiene un promedio de: " + promedio,
);

/*
    mi amigo pepe tiene un taller automotriz y un parqueo de vehiculos
    el cobra x hora 20$ el quiere saber cuanto debera cobrar a un vehiculo q se
    queda una cantidad n de horas
*/

/* ==========================================================================
   TALLER PRÁCTICO: FUNDAMENTOS DE TYPESCRIPT (NIVEL BÁSICO A INTERMEDIO)
   Temas: Tipos primitivos, operadores aritméticos, autoasignación,
          comparación y lógica.
   ========================================================================== */

/* --------------------------------------------------------------------------
   EJERCICIO 1: Tipado explícito de una tarjeta de perfil
   Nivel: Básico
   Instrucciones:
   - Declara 'nombreUsuario' de tipo string con el valor "AlexCode".
   - Declara 'seguidores' de tipo number con el valor 250.
   - Declara 'cuentaVerificada' de tipo boolean con el valor true.
   - Muestra las tres variables en un solo console.log().
   -------------------------------------------------------------------------- */
let nombreUsuario: string = "AlexCode";
let seguidores: number = 250;
let cuentaVerificada: boolean = true;
// Se muestran los tres datos juntos para verificar sus valores y tipos.
console.log(nombreUsuario, seguidores, cuentaVerificada);

/* --------------------------------------------------------------------------
   EJERCICIO 2: Calculadora de propinas simple
   Nivel: Básico
   Instrucciones:
   - Declara 'montoCuenta' (number) con valor 80.
   - Declara 'porcentajePropina' (number) con valor 0.15 (representa el 15%).
   - Declara 'montoPropina' (number) calculando 'montoCuenta' multiplicado por 'porcentajePropina'.
   - Declara 'totalPagarPropina' (number) sumando la cuenta y la propina.
   - Imprime 'totalPagarPropina'.
   -------------------------------------------------------------------------- */
let montoCuenta: number = 80;
let porcentajePropina: number = 0.15;
// La propina se calcula multiplicando la cuenta por el porcentaje (15%).
let montoPropina: number = montoCuenta * porcentajePropina;
let totalPagarPropina: number = montoCuenta + montoPropina;
console.log(totalPagarPropina);

/* --------------------------------------------------------------------------
   EJERCICIO 3: El contador de visitas (Incremento y Decremento)
   Nivel: Básico
   Instrucciones:
   - Declara 'visitasWeb' con let y tipado number, iniciando en 10.
   - Incrementa su valor en 1 usando el operador '++'.
   - Luego, decrementa su valor en 1 usando el operador '--'.
   - Imprime el valor final por consola.
   -------------------------------------------------------------------------- */
let visitasWeb: number = 10;
visitasWeb++;
visitasWeb--;
// El incremento y el decremento se cancelan, por eso el contador queda en 10.
console.log(visitasWeb);

/* --------------------------------------------------------------------------
   EJERCICIO 4: Actualización compuesta de inventario
   Nivel: Básico - Intermedio
   Instrucciones:
   - Declara 'stockProductos' (number) con valor inicial 50.
   - Llega un pedido nuevo: aumenta el stock en 20 usando '+='.
   - Se realiza una venta: disminuye el stock en 8 usando '-='.
   - Una promoción triplica la cantidad restante: multiplica el stock por 3 usando '*='.
   - Imprime el stock final.
   -------------------------------------------------------------------------- */
let stockProductos: number = 50;
stockProductos += 20;
stockProductos -= 8;
stockProductos *= 3;
// El stock final es 186: (50 + 20 - 8) * 3.
console.log(stockProductos);

/* --------------------------------------------------------------------------
   EJERCICIO 5: Detector de números pares (Módulo / Residuo)
   Nivel: Básico - Intermedio
   Instrucciones:
   - Declara 'numeroEvaluado' (number) con el número que quieras (ej: 42).
   - Declara 'esPar' de tipo boolean.
   - Asigna a 'esPar' la comparación que verifique si el residuo de dividir
     'numeroEvaluado' entre 2 es estrictamente igual (===) a 0.
   - Imprime 'esPar'.
   -------------------------------------------------------------------------- */
let numeroEvaluado: number = 42;
let esPar: boolean = numeroEvaluado % 2 === 0;
// Un número es par cuando su residuo al dividirlo entre 2 es exactamente 0.
console.log(esPar);

/* --------------------------------------------------------------------------
   EJERCICIO 6: Validador de mayoría de edad y permiso
   Nivel: Intermedio
   Instrucciones:
   - Declara 'edadClienteConPermiso' (number) con valor 16.
   - Declara 'tienePermisoPadres' (boolean) con valor true.
   - Declara 'puedeIngresar' (boolean).
   - La persona puede ingresar si su edad es mayor o igual (>=) a 18
     O (||) si cuenta con permiso de los padres.
   - Imprime 'puedeIngresar'.
   -------------------------------------------------------------------------- */
let edadClienteConPermiso: number = 16;
let tienePermisoPadres: boolean = true;
let puedeIngresar: boolean =
  edadClienteConPermiso >= 18 || tienePermisoPadres;
// Basta con cumplir la mayoría de edad o tener permiso para permitir el ingreso.
console.log(puedeIngresar);

/* --------------------------------------------------------------------------
   EJERCICIO 7: Acceso a cajero automático (Operador AND estricto)
   Nivel: Intermedio
   Instrucciones:
   - Declara 'pinIngresado' (number) con valor 1234.
   - Declara 'pinCorrecto' (number) con valor 1234.
   - Declara 'tarjetaBloqueada' (boolean) con valor false.
   - Declara 'accesoPermitido' (boolean).
   - Solo se permite el acceso si el PIN coincide (===) Y (&&)
     la tarjeta NO está bloqueada (usa la negación '!').
   - Imprime 'accesoPermitido'.
   -------------------------------------------------------------------------- */
let pinIngresado: number = 1234;
let pinCorrecto: number = 1234;
let tarjetaBloqueada: boolean = false;
let accesoPermitido: boolean =
  pinIngresado === pinCorrecto && !tarjetaBloqueada;
// Las dos condiciones deben cumplirse: PIN correcto y tarjeta desbloqueada.
console.log(accesoPermitido);

/* --------------------------------------------------------------------------
   EJERCICIO 8: Rango de temperatura operativa
   Nivel: Intermedio
   Instrucciones:
   - Declara 'temperaturaActual' (number) con valor 24.
   - Declara 'climaAceptable' (boolean).
   - Asigna a 'climaAceptable' una condición que sea true solo si
     la temperatura es mayor que 18 Y menor que 30.
   - Imprime 'climaAceptable'.
   -------------------------------------------------------------------------- */
let temperaturaActual: number = 24;
let climaAceptable: boolean =
  temperaturaActual > 18 && temperaturaActual < 30;
// El operador && exige que la temperatura esté dentro de ambos límites.
console.log(climaAceptable);

/* --------------------------------------------------------------------------
   EJERCICIO 9: Carrito con envío gratis
   Nivel: Intermedio
   Instrucciones:
   - Declara 'totalCarrito' (number) con valor 120.
   - Declara 'esMiembroPrime' (boolean) con valor false.
   - Declara 'aplicaEnvioGratis' (boolean).
   - El envío es gratis si el total gastado es mayor o igual a 100
     O (||) si el usuario es miembro prime.
   - Imprime 'aplicaEnvioGratis'.
   -------------------------------------------------------------------------- */
let totalCarrito: number = 120;
let esMiembroPrime: boolean = false;
let aplicaEnvioGratis: boolean =
  totalCarrito >= 100 || esMiembroPrime;
// El envío es gratis si se alcanza el mínimo de compra o se tiene membresía Prime.
console.log(aplicaEnvioGratis);

/* --------------------------------------------------------------------------
   EJERCICIO 10: Validación de formulario de registro
   Nivel: Intermedio
   Instrucciones:
   - Declara 'longitudPassword' (number) con valor 8.
   - Declara 'aceptoTerminos' (boolean) con valor true.
   - Declara 'tieneEmailInvalido' (boolean) con valor false.
   - Declara 'formularioValido' (boolean).
   - El formulario es válido si:
     1. La longitud de la contraseña es mayor o igual a 8, Y
     2. El usuario aceptó los términos, Y
     3. NO tiene un email inválido (usa '!').
   - Imprime 'formularioValido'.
   -------------------------------------------------------------------------- */
let longitudPassword: number = 8;
let aceptoTerminos: boolean = true;
let tieneEmailInvalido: boolean = false;
let formularioValido: boolean =
  longitudPassword >= 8 && aceptoTerminos && !tieneEmailInvalido;
// El formulario solo es válido si cumple los tres requisitos indicados.
console.log(formularioValido);

/* ==========================================================================
   RETO INTEGRADOR: Batalla por Turnos (Primera Clase TypeScript)

   Instrucciones:
   Escribe el código necesario debajo de cada indicación respetando
   el tipado explícito (number, boolean, string) y los operadores requeridos.
   ========================================================================== */

// 1. Declara la variable 'puntosDeVida' de tipo number con un valor inicial de 100.
//    (Usa 'let' ya que su valor cambiará a lo largo del combate).

// 2. Declara la variable 'tieneEscudo' de tipo boolean con el valor true.

// 3. ¡Ataque enemigo! Resta 25 puntos de vida usando el operador de autoasignación '-='.

// 4. El personaje toma una poción mínima: incrementa 'puntosDeVida' en 1 usando '++'.

// 5. Declara una variable 'sigueVivo' de tipo boolean que evalúe si 'puntosDeVida' es mayor que 0.

// 6. Declara una variable 'alertaPeligro' de tipo boolean.
//    Debe ser true solo si 'puntosDeVida' es menor a 50 Y el jugador NO tiene escudo (usa && y !).

// 7. Imprime en consola todos los resultados para verificar el estado final del jugador:
//    - Puntos de vida actuales
//    - Si tiene escudo activo
//    - Si sigue vivo
//    - Si está en alerta de peligro
let puntosDeVida: number = 100;
const tieneEscudo: boolean = true;

puntosDeVida -= 25;
puntosDeVida++;

const sigueVivo: boolean = puntosDeVida > 0;
const alertaPeligro: boolean = puntosDeVida < 50 && !tieneEscudo;

console.log("Puntos de vida actuales:", puntosDeVida);
console.log("Tiene escudo activo:", tieneEscudo);
console.log("Sigue vivo:", sigueVivo);
console.log("Está en alerta de peligro:", alertaPeligro);

/* -----------------CONDICIONALES------------------- */

/* 
                IF
    if(condicion){
        codigo q se ejecutara
        si la condicion 
        es verdadera
    }
*/
/*
 * Enunciado: Comprueba si una persona tiene 18 años o más. Si cumple la
 * condición, muestra que es mayor de edad.
 */
/* let age = 10;
if (age >= 18) {
  console.log("esta persona es mayor de edad");
} */

/* 
                IF-ELSE
    if(condicion){
        codigo q se ejecutara
        si la condicion 
        es verdadera
    }else{
        codigo q se ejecutara
        si la condicion 
        es falsa
    }
*/
/*
 * Enunciado: Revisa si el dinero disponible alcanza para comprar una PS5,
 * cuyo precio mínimo se representa aquí con 1000.
 */
let dinero = 4000;

if (dinero >= 1000) {
  console.log("puedes comprar tu ps5");
} else {
  console.log("no puedes comprar este lujito mi rey");
}

/* 
        IF-ELSE-IF
if(condicion1){
        codigo q se ejecutara
        si la condicion1 
        es verdadera
    }else if(condicion2){
        codigo q se ejecutara
        si la condicion2 
        es verdadera y ademas 
        la condicion 1 es falsa
    }else{
        codigo q se ejecutara
        si la condicion 2 es falsa    
    }

*/
/*
 * Enunciado: Muestra el rango de jugador correspondiente según su MMR.
 * Los rangos de este ejemplo llegan hasta 5000 puntos.
 */
let mmr = 8200;

if (mmr <= 1000) {
  console.log("heraldo");
} else if (mmr <= 2000) {
  console.log("guardian");
} else if (mmr <= 3000) {
  console.log("cruzado");
} else if (mmr <= 4000) {
  console.log("arconte");
} else if (mmr <= 5000) {
  console.log("leyenda");
}

/*
 * Enunciado: Muestra un mensaje de bendición de salud solo si la persona
 * pertenece al sacerdocio y vive en el barrio "armonia".
 */
let sacerdocio = "si";
let barrio = "armonia";

if (sacerdocio == "si") {
  if (barrio == "armonia") {
    console.log("si me puede dar una bendicion de salud");
  }
}

/* 
        SWICH-CASE
switch (llave o variable) {
    case 1:
        codigo q se ejecutara si la lave toma el valor de 1
        break;
    case 2:
        codigo q se ejecutara si la lave toma el valor de 2
        break;
    case 3:
        codigo q se ejecutara si la lave toma el valor de 3
        break;

    default:
        codigo q se ejecutara si la llave no toma ningun valor anterior
        break;
}
*/
/*
 * Enunciado: Según la opción elegida en el cajero, muestra si la persona
 * va a retirar dinero, agregar dinero o consultar su saldo.
 */
let opcion = 2;

switch (opcion) {
  case 1:
    console.log("vas a retirar dinero :D");
    break;
  case 2:
    console.log("vas a agregar dinero :D");
    break;
  case 3:
    console.log("vas a consultar tu saldo :D");
    break;
  default:
    console.log("x favor elige una opcion valida entre 1 y 3");
    break;
}

// ==========================================
// NIVEL FÁCIL: if, if-else básicos
// ==========================================

/**
 * EJERCICIO 1: Pago de pasaje en transporte público (if - else)
 *
 * Contexto: El pasaje cuesta 2.50.
 * Variables iniciales:
 *   const saldoActual: number = 3.00;
 *   const costoPasaje: number = 2.50;
 *
 * Enunciado:
 * Si el saldo es suficiente para pagar el pasaje:
 *   - Resta el costo del pasaje al saldo y muestra:
 *     "Pasaje cobrado. Saldo restante: [nuevo saldo]"
 * De lo contrario:
 *   - Muestra: "Saldo insuficiente para viajar."
 */

// Tu código aquí:
const saldoActual: number = 3.0;
const costoPasaje: number = 2.5;

if (saldoActual >= costoPasaje) {
  const nuevoSaldo = saldoActual - costoPasaje;
  console.log(`Pasaje cobrado. Saldo restante: ${nuevoSaldo}`);
} else {
  console.log("Saldo insuficiente para viajar.");
}

/**
 * EJERCICIO 2: Verificación para compra de entradas a una película para mayores (if - else con boolean)
 *
 * Contexto: En el cine, la película exige ser mayor de 18 años y presentar documento físico.
 * Variables iniciales:
 *   const edadCliente: number = 17;
 *   const tieneDocumento: boolean = true;
 *
 * Enunciado:
 * Evalúa si el cliente tiene 18 años o más Y además tiene su documento en mano.
 * - Si cumple ambas condiciones: imprimir "Venta de boleto autorizada."
 * - Si falla alguna: imprimir "Acceso denegado. Debe ser mayor de edad y portar documento."
 */

// Tu código aquí:
const edadCliente: number = 17;
const tieneDocumento: boolean = true;

if (edadCliente >= 18 && tieneDocumento) {
  console.log("Venta de boleto autorizada.");
} else {
  console.log("Acceso denegado. Debe ser mayor de edad y portar documento.");
}

/**
 * EJERCICIO 3: Puerta automática de una tienda según horario (if - else)
 *
 * Contexto: Una tienda abre sus puertas entre las 9:00 y las 20:00 (formato 24h).
 * Variable inicial:
 *   const horaActual: number = 14; // Valores posibles de 0 a 23
 *
 * Enunciado:
 * - Si la hora está entre 9 y 20 inclusive, muestra: "Puerta abierta: Bienvenido a la tienda."
 * - En cualquier otra hora, muestra: "Puerta cerrada: Atención finalizada por hoy."
 */

// Tu código aquí:
const horaActual: number = 14;

if (horaActual >= 9 && horaActual <= 20) {
  console.log("Puerta abierta: Bienvenido a la tienda.");
} else {
  console.log("Puerta cerrada: Atención finalizada por hoy.");
}

// ==========================================
// NIVEL INTERMEDIO BAJO: if - else if - else
// ==========================================

/**
 * EJERCICIO 4: Luces del semáforo vehicular (switch - case)
 *
 * Contexto: Control del flujo vehicular mediante un semáforo.
 * Variable inicial:
 *   const luzSemaforo: string = "amarillo"; // Puede ser "verde", "amarillo", "rojo" u otro texto
 *
 * Enunciado:
 * Usando switch-case, muestra el mensaje según el color:
 * - "verde": "Avance: Vía libre."
 * - "amarillo": "Precaución: Reduzca la velocidad."
 * - "rojo": "Deténgase: Paso bloqueado."
 * - default: "Luz no reconocida o semáforo en mantenimiento."
 */

// Tu código aquí:
const luzSemaforo: string = "amarillo";

switch (luzSemaforo) {
  case "verde":
    console.log("Avance: Vía libre.");
    break;
  case "amarillo":
    console.log("Precaución: Reduzca la velocidad.");
    break;
  case "rojo":
    console.log("Deténgase: Paso bloqueado.");
    break;
  default:
    console.log("Luz no reconocida o semáforo en mantenimiento.");
    break;
}

/**
 * EJERCICIO 5: Descuento en la caja de una farmacia (if - else if - else)
 *
 * Contexto: Una farmacia premia el total gastado con descuentos:
 * - Menos de 50: 0% de descuento.
 * - De 50 a 99: 5% de descuento.
 * - De 100 a 199: 10% de descuento.
 * - 200 o más: 15% de descuento.
 *
 * Variables iniciales:
 *   const subtotalCompra: number = 120;
 *   let descuento: number = 0;
 *   let totalFinal: number = 0;
 *
 * Enunciado:
 * Determina el descuento según el monto, calcula el total final y muestra:
 * "Subtotal: [subtotal] | Descuento aplicado: [descuento]% | Total a pagar: [totalFinal]"
 */

// Tu código aquí:
const subtotalCompra: number = 120;
let descuento: number = 0;
let totalFinal: number = 0;

if (subtotalCompra < 50) {
  descuento = 0;
} else if (subtotalCompra < 100) {
  descuento = 5;
} else if (subtotalCompra < 200) {
  descuento = 10;
} else {
  descuento = 15;
}

totalFinal = subtotalCompra - (subtotalCompra * descuento) / 100;
console.log(
  `Subtotal: ${subtotalCompra} | Descuento aplicado: ${descuento}% | Total a pagar: ${totalFinal}`,
);

/**
 * EJERCICIO 6: Asignación de canal de TV por categoría (switch - case)
 *
 * Contexto: En un decodificador, según el tipo de contenido se sugiere un canal de inicio:
 * Variable inicial:
 *   const categoriaElegida: string = "deportes";
 *   // Opciones: "noticias", "deportes", "infantil", "peliculas"
 *
 * Enunciado:
 * Usa switch-case para imprimir el número de canal sugerido:
 * - "noticias": "Sintonizando canal 10: Noticias 24/7"
 * - "deportes": "Sintonizando canal 25: Deportes en vivo"
 * - "infantil": "Sintonizando canal 40: Dibujos animados"
 * - "peliculas": "Sintonizando canal 55: Cine premium"
 * - default: "Categoría no encontrada en la guía."
 */

// Tu código aquí:
const categoriaElegida: string = "deportes";

switch (categoriaElegida) {
  case "noticias":
    console.log("Sintonizando canal 10: Noticias 24/7");
    break;
  case "deportes":
    console.log("Sintonizando canal 25: Deportes en vivo");
    break;
  case "infantil":
    console.log("Sintonizando canal 40: Dibujos animados");
    break;
  case "peliculas":
    console.log("Sintonizando canal 55: Cine premium");
    break;
  default:
    console.log("Categoría no encontrada en la guía.");
    break;
}

// ==========================================
// NIVEL INTERMEDIO: Condiciones anidadas y lógica combinada
// ==========================================

/**
 * EJERCICIO 7: Alerta de medidor de batería de celular (if - else if - else)
 *
 * Contexto: Un sistema operativo móvil monitorea el porcentaje de batería y si está conectado al cargador.
 * Variables iniciales:
 *   const porcentajeBateria: number = 15;
 *   const estaConectado: boolean = false;
 *
 * Enunciado:
 * - Si porcentajeBateria es mayor a 100 o menor a 0: mostrar "Lectura de batería errónea."
 * - Si está conectado:
 *     - Si la batería llega a 100: "Batería completa. Desconecte el cargador."
 *     - Si no: "Cargando dispositivo..."
 * - Si NO está conectado:
 *     - Menor o igual a 15: "Batería crítica: Activa el modo ahorro de energía."
 *     - Entre 16 y 50: "Nivel de batería moderado."
 *     - Más de 50: "Batería en buen nivel."
 */

// Tu código aquí:
const porcentajeBateria: number = 15;
const estaConectado: boolean = false;

if (porcentajeBateria > 100 || porcentajeBateria < 0) {
  console.log("Lectura de batería errónea.");
} else if (estaConectado) {
  if (porcentajeBateria === 100) {
    console.log("Batería completa. Desconecte el cargador.");
  } else {
    console.log("Cargando dispositivo...");
  }
} else if (porcentajeBateria <= 15) {
  console.log("Batería crítica: Activa el modo ahorro de energía.");
} else if (porcentajeBateria <= 50) {
  console.log("Nivel de batería moderado.");
} else {
  console.log("Batería en buen nivel.");
}

/**
 * EJERCICIO 8: Tarifa de estacionamiento por tipo de vehículo (switch - case + if)
 *
 * Contexto: Un garaje cobra por hora según el tipo de transporte:
 * - "moto": 5 por hora
 * - "auto": 10 por hora
 * - "camioneta": 15 por hora
 *
 * Variables iniciales:
 *   const tipoVehiculo: string = "auto";
 *   const horasEstacionado: number = 3;
 *   const esClienteFrecuente: boolean = true;
 *   let tarifaPorHora: number = 0;
 *
 * Enunciado:
 * 1. Usa switch-case para asignar la tarifa por hora según el tipo de vehículo. Si el tipo no existe, tarifa = 0.
 * 2. Si la tarifa es válida (mayor a 0):
 *    - Calcula el costo total (horasEstacionado * tarifaPorHora).
 *    - Si esClienteFrecuente es true, resta un descuento fijo de 5 al costo final.
 *    - Imprime el costo final a cobrar.
 * 3. Si el tipo no es válido, imprime "Tipo de vehículo no admitido."
 */

// Tu código aquí:
const tipoVehiculo: string = "auto";
const horasEstacionado: number = 3;
const esClienteFrecuente: boolean = true;
let tarifaPorHora: number = 0;

switch (tipoVehiculo) {
  case "moto":
    tarifaPorHora = 5;
    break;
  case "auto":
    tarifaPorHora = 10;
    break;
  case "camioneta":
    tarifaPorHora = 15;
    break;
  default:
    tarifaPorHora = 0;
    break;
}

if (tarifaPorHora > 0) {
  let costoFinal = horasEstacionado * tarifaPorHora;
  if (esClienteFrecuente) {
    costoFinal -= 5;
  }
  console.log(`Costo final a cobrar: ${costoFinal}`);
} else {
  console.log("Tipo de vehículo no admitido.");
}

/**
 * EJERCICIO 9: Control de equipaje de mano en mostrador de aeropuerto (if anidado / operadores lógicos)
 *
 * Contexto: La aerolínea impone dos límites estrictos:
 * - Peso máximo: 10 kg.
 * - Longitud total máxima (suma de alto + ancho + profundidad): 115 cm.
 *
 * Variables iniciales:
 *   const pesoMaletaKg: number = 11.5;
 *   const sumaDimensionesCm: number = 110;
 *
 * Enunciado:
 * Evalúa las variables y muestra exactamente una de las 4 opciones:
 * 1. Si cumple ambas reglas: "Equipaje aprobado para llevar en cabina."
 * 2. Si falla en peso pero pasa en dimensiones: "Rechazado: Excede el peso máximo permitido."
 * 3. Si pasa en peso pero falla en dimensiones: "Rechazado: Excede las dimensiones máximas permitidas."
 * 4. Si falla en ambas: "Rechazado: Excede tanto el peso como las dimensiones."
 */

// Tu código aquí:
const pesoMaletaKg: number = 11.5;
const sumaDimensionesCm: number = 110;
const cumplePeso = pesoMaletaKg <= 10;
const cumpleDimensiones = sumaDimensionesCm <= 115;

if (cumplePeso && cumpleDimensiones) {
  console.log("Equipaje aprobado para llevar en cabina.");
} else if (!cumplePeso && cumpleDimensiones) {
  console.log("Rechazado: Excede el peso máximo permitido.");
} else if (cumplePeso && !cumpleDimensiones) {
  console.log("Rechazado: Excede las dimensiones máximas permitidas.");
} else {
  console.log("Rechazado: Excede tanto el peso como las dimensiones.");
}

/**
 * EJERCICIO 10: Facturación del menú del día con propina y delivery (switch-case + if-else)
 *
 * Contexto: Un restaurante cobra según el combo elegido:
 * - "ejecutivo": 25
 * - "vegetariano": 30
 * - "familiar": 55
 *
 * Variables iniciales:
 *   const comboElegido: string = "vegetariano";
 *   const pedirDelivery: boolean = true;
 *   const dejarPropina: boolean = true;
 *   let totalPagar: number = 0;
 *
 * Enunciado:
 * 1. Usa switch-case para guardar el precio base según el combo. Si el combo no existe, totalPagar = 0.
 * 2. Si el combo es válido:
 *    - Si pedirDelivery es true, suma 5 por costo de envío.
 *    - Si dejarPropina es true, suma un 10% del precio base del combo como propina.
 *    - Imprime: "Pedido confirmado. Total final a pagar: [totalPagar]"
 * 3. Si el combo no existe:
 *    - Imprime: "El combo solicitado no está disponible en la carta."
 */

// Tu código aquí:
const comboElegido: string = "vegetariano";
const pedirDelivery: boolean = true;
const dejarPropina: boolean = true;
let precioBase: number = 0;
let totalPagar: number = 0;

switch (comboElegido) {
  case "ejecutivo":
    precioBase = 25;
    break;
  case "vegetariano":
    precioBase = 30;
    break;
  case "familiar":
    precioBase = 55;
    break;
  default:
    precioBase = 0;
    break;
}

if (precioBase > 0) {
  totalPagar = precioBase;
  if (pedirDelivery) {
    totalPagar += 5;
  }
  if (dejarPropina) {
    totalPagar += precioBase * 0.1;
  }
  console.log(`Pedido confirmado. Total final a pagar: ${totalPagar}`);
} else {
  console.log("El combo solicitado no está disponible en la carta.");
}

export {};