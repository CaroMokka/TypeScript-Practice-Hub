//TIPOS LITERALES
//tipo literal string
type Color = 'rojo' | 'verde' | 'azul'

let miColor: Color = 'verde'

miColor = 'rojo'
//miColor = 'amarillo' // Error: "amarillo" no está en el conjunto de valores permitidos.

//tipo literal number
type Status = 0 | 1 | 2

let myStatus: Status = 2

myStatus = 1
//myStatus = 9 // Error: 9 no es un valor permitido

//tipo literal boolean
type BooleanoPersonalizado = true | false

let myBoolean: BooleanoPersonalizado = false

// ALIAS DE TIPO (TYPE)
//basico
type ID = string | number | boolean

let userID: ID

userID = 'Hsa90h1l'
userID = 234567
userID = true

//objetos
// type User = {
//     name: string,
//     age: number,
//     email: string
// }

// const user: User = {
//     name: 'Carolina',
//     age: 38,
//     email: 'caro@email.com'
// }

//Combinados tipo literal y alias de tipo
type Rol = 'admin' | 'editor' | 'user'

type User = {
    id: number
    name: string,
    rol: Rol
}

const persona: User = {
    id: 234,
    name: 'Carolina',
    rol: 'user'
}

//Los tipos literales restringen los valores que una variable puede tomar.
//Los alias de tipo permiten crear nombres reutilizables para tipos complejos.
//Se pueden combinar para hacer el código más claro y seguro.


// EJERCICIO DE GESTION DE TIENDA ONLINE

type Producto = {
    id: number,
    nombre: string,
    precio: number
}

type EstadoPedido = 'pendiente' | 'procesando' | 'enviado' | 'entregado' 

const productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 800 },
    { id: 2, nombre: "Mouse", precio: 50 },
]

type Pedido = {
    id: number,
    productos: Producto[],
    estado: EstadoPedido,
    total: number
}

function calcularTotalPedido(productos:Producto[]): number{
    return productos.reduce((total, { precio })=> total + precio, 0)
}

function crearPedido(lista: Producto[]): Pedido{
    const totalCostoPedido = calcularTotalPedido(lista)
    return {
        id: Date.now(),
        productos: lista,
        estado: 'pendiente',
        total: totalCostoPedido
    }
}
function actualizarEstadoPedido(pedido: Pedido, estado: EstadoPedido): Pedido{
    return { ...pedido, estado }
 }

const pedidoActual = crearPedido(productos)
console.log('Pedido inicial', pedidoActual)

const pedidoActualizado = actualizarEstadoPedido(pedidoActual, 'enviado')
console.log('Pedido actualizado', pedidoActualizado)



