import { sumar, restar } from "./operaciones"
import { Usuario, mostrarUsuario } from "./usuario"

console.log("Suma:", sumar(2,4))
console.log("Resta", restar(4, 1))
const usuario: Usuario = { nombre: "Carolina", edad: 32 }
console.log(mostrarUsuario(usuario))
