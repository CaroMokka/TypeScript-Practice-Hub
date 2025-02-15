// Manejo de Errores y Tipos de Excepciones en TypeScript.
function dividir(a, b) {
    try {
        if (b === 0)
            throw new Error("No se puede dividir por cero");
        return a / b;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        throw error;
    }
}
// console.log(dividir(10, 2)); // ✅ 5
// console.log(dividir(10, 0)); // ❌ Error lanzado
// Excepciones con tipo never
// 🔹 lanzarError tiene tipo never porque siempre lanza un error y nunca devuelve nada.
// function lanzarError(mensaje: string): never{
//     throw new Error(mensaje);
// }
function procesarDato(dato) {
    if (typeof dato === "string")
        console.log("Es un string:", dato);
    //lanzarError("Data inválido")
}
// console.log(procesarDato("Hola"))
// console.log(procesarDato(123))
//Ejercicio practico
function lanzarErrorFatal() { }
function convertirJSON(dato) {
    try {
        if (!dato.trim())
            throw new Error("Debe ser una cadena JSON válida");
        var obj = JSON.parse(dato);
        console.log(obj);
        return obj;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return null;
    }
}
console.log(convertirJSON('{ "nombre": "Carolina", "edad": "34" }'));
