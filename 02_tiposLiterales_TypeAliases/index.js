var miColor = 'verde';
miColor = 'rojo';
var myStatus = 2;
myStatus = 1;
var myBoolean = false;
var userID;
userID = 'Hsa90h1l';
userID = 234567;
userID = true;
var persona = {
    id: 234,
    name: 'Carolina',
    rol: 'user'
};
var productos = [
    { id: 1, nombre: "Laptop", precio: 800 },
    { id: 2, nombre: "Mouse", precio: 50 },
];
function calcularTotalPedido(lista) {
    var total = 0;
    for (var i = 0; i < lista.length; i++) {
        total += lista[i].precio;
    }
    return total;
}
function crearPedido(lista) {
    var totalCostoPedido = calcularTotalPedido(lista);
    var pedido1 = {
        id: 123,
        productos: lista,
        estado: 'pendiente',
        total: totalCostoPedido
    };
    return pedido1;
}
// console.log(crearPedido(productos))
var pedidoActual = crearPedido(productos);
function actualizarEstadoPedido(pedidoActual, estado) {
    pedidoActual.estado = estado;
    console.log(pedidoActual);
}
actualizarEstadoPedido(pedidoActual, 'enviado');
