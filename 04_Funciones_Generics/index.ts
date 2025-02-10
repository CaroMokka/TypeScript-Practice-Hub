//Funciones y Generics

// FUNCIONES -> En Typescript las funciones pueden ser fuertemente tipadas, podemos definir tipos en los parametros
// y el tipo de retorno de la funcion

// Definir tipos en funciones
function sumar(a: number, b: number): number{
    return a + b
}
console.log(sumar(3, 5))

// Parámetros opcionales y valores por defecto

function saludar(nombre: string, saludo: string = "Hola" ): string{
    return `${saludo} ${nombre}`
}

console.log(saludar("Carolina"))
console.log(saludar("Buenos los días"))

// Funciones con parámetros opcionales || texto? → Significa que el parámetro es opcional.
function obtenerLongitud(texto?: string): number {
    return texto ? texto.length : 0
}
console.log(obtenerLongitud()) // "typescript"

// Funciones con tipos de retorno void y never

function mostrarMensaje(mensaje: string): void{
    console.log(mensaje)
    //mostrarMensaje() solo ejecuta console.log() y no devuelve nada.
}

function lanzarError(mensaje: string): never{
    throw new Error(mensaje)
    //lanzarError() nunca devuelve nada porque la ejecución se detiene al lanzar una excepción.
}