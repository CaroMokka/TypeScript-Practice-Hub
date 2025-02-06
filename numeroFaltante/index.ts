//Ejercicio número faltante
// const numeros: number[] = [1, 2, 4, 5, 6]; 
const numeros: number[] = [1, 2, 3, 4, 6, 7, 8]; 

function calcularSumaEsperada(n:number): number {
    return n * (n + 1) / 2
}
function calcularSumaActual(arr: number[]): number {
    return arr.reduce((suma, num) => suma + num, 0 )
}
function numeroFaltante(arr:number[]): void{
    if(arr.length === 0){
        console.log('Array vacío')
        return
    }
    const n = arr[arr.length - 1]
    const suma_esperada = calcularSumaEsperada(n)
    const suma_actual = calcularSumaActual(arr)
  
    const numero_faltante:number = suma_esperada - suma_actual 
    return console.log(`El número faltante es ${numero_faltante}`)
}

numeroFaltante(numeros)

