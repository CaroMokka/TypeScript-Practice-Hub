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
// Funciones con parámetros opcionales
function obtenerLongitud(texto) {
    return texto ? texto.length : 0;
}
console.log(obtenerLongitud()); //10
