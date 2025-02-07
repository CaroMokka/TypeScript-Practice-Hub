//Ejercicio número faltante
// const numeros: number[] = [1, 2, 4, 5, 6]; 
var numeros = [1, 2, 3, 4, 6, 7, 8];
function calcularSumaEsperada(n) {
    return n * (n + 1) / 2;
}
function calcularSumaActual(arr) {
    return arr.reduce(function (suma, num) { return suma + num; }, 0);
}
function numeroFaltante(arr) {
    if (arr.length === 0) {
        console.log('Array vacío');
        return;
    }
    var n = arr[arr.length - 1];
    var suma_esperada = calcularSumaEsperada(n);
    var suma_actual = calcularSumaActual(arr);
    var numero_faltante = suma_esperada - suma_actual;
    return console.log("El n\u00FAmero faltante es ".concat(numero_faltante));
}
numeroFaltante(numeros);
