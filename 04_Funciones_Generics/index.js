//Funciones y Generics
// FUNCIONES -> En Typescript las funciones pueden ser fuertemente tipadas, podemos definir tipos en los parametros
// y el tipo de retorno de la funcion
// Definir tipos en funciones
function sumar(a, b) {
    return a + b;
}
console.log(sumar(3, 5));
// Parámetros opcionales y valores por defecto
function saludar(nombre, saludo) {
    if (saludo === void 0) { saludo = "Hola"; }
    return "".concat(saludo, " ").concat(nombre);
}
console.log(saludar("Carolina"));
console.log(saludar("Buenos los días"));
// Funciones con parámetros opcionales || texto? → Significa que el parámetro es opcional.
function obtenerLongitud(texto) {
    return texto ? texto.length : 0;
}
console.log(obtenerLongitud()); // "typescript"
// Funciones con tipos de retorno void y never
function mostrarMensaje(mensaje) {
    console.log(mensaje);
    //mostrarMensaje() solo ejecuta console.log() y no devuelve nada.
}
function lanzarError(mensaje) {
    throw new Error(mensaje);
    //lanzarError() nunca devuelve nada porque la ejecución se detiene al lanzar una excepción.
}
//Genéricos (Generics) en TypeScript
/*
Los genéricos permiten que nuestras funciones, clases e interfaces trabajen con cualquier tipo de dato,
manteniendo el tipado fuerte. Son útiles cuando queremos que una función o clase sea reutilizable para distintos tipos.
 */
// Ejemplo SIN genericos --> La function solo permite un tipo de dato que es un numero
function duplicarNumero(num) {
    return num * 2;
}
// Ejemplo CON genericos --> Los genéricos permiten definir un tipo variable que se adapta según el contexto:
// <T> → Define un tipo genérico T (puede ser cualquier tipo).
function duplicar(data) {
    // dato: T → El parámetro dato es de tipo T.
    return data; // : T → La función devuelve el mismo tipo T.
}
// Podemos hacer que una función acepte arrays de cualquier tipo:
// T[] → Indica que array es un arreglo de cualquier tipo.
// obtenerPrimerElemento([1, 2, 3]) → TypeScript infiere T = number.
// obtenerPrimerElemento(["a", "b", "c"]) → T = string.
function obtenerCualquierElemento(arr) {
    return arr[0];
}
// Restringir tipos <T> con extends
// Podemos restringir los tipos permitidos en T usando extends:
// T extends { nombre: string } → T debe ser un objeto con una propiedad nombre.
function obtenerPropiedad(obj) {
    return "El nombre de la persona es ".concat(obj.name);
}
// ObtenerPropiedad(persona) funciona porque persona tiene nombre.
var person = { name: "Carolina", age: 30, email: "caro@email.com" };
// console.log(obtenerPropiedad({ edad: 30 })); ❌ Error: No tiene la propiedad 'nombre'
// Ejercicio Práctico
// Implementa una función genérica filtrarPorPropiedad que reciba:
// array de obj - nombre de la propiedad - el valor de la propiedad
function filtrarPorPropiedad(arr, prop, value) {
    return arr.filter(function (obj) { return obj[prop] === value; });
}
var usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Pedro", edad: 25 },
];
console.log(filtrarPorPropiedad(usuarios, "edad", 25));
// ✅ [{ nombre: "Ana", edad: 25 }, { nombre: "Pedro", edad: 25 }]
