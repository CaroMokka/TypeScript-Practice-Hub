"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operaciones_1 = require("./operaciones");
var usuario_1 = require("./usuario");
console.log("Suma:", (0, operaciones_1.sumar)(2, 4));
console.log("Resta", (0, operaciones_1.restar)(4, 1));
var usuario = { nombre: "Carolina", edad: 32 };
console.log((0, usuario_1.mostrarUsuario)(usuario));
