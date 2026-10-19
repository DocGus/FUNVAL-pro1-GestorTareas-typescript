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
   - Declara 'totalPagar' (number) sumando la cuenta y la propina.
   - Imprime 'totalPagar'.
   -------------------------------------------------------------------------- */
let montoCuenta: number = 80;
let porcentajePropina: number = 0.15;
// La propina se calcula multiplicando la cuenta por el porcentaje (15%).
let montoPropina: number = montoCuenta * porcentajePropina;
let totalPagar: number = montoCuenta + montoPropina;
console.log(totalPagar);

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
   - Declara 'edadCliente' (number) con valor 16.
   - Declara 'tienePermisoPadres' (boolean) con valor true.
   - Declara 'puedeIngresar' (boolean).
   - La persona puede ingresar si su edad es mayor o igual (>=) a 18
     O (||) si cuenta con permiso de los padres.
   - Imprime 'puedeIngresar'.
   -------------------------------------------------------------------------- */
let edadCliente: number = 16;
let tienePermisoPadres: boolean = true;
let puedeIngresar: boolean =
  edadCliente >= 18 || tienePermisoPadres;
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