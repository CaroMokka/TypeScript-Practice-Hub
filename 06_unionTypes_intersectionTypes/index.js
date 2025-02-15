// 📌 Tipos de Unión (Union Types) y Tipos de Intersección (Intersection Types) en TypeScript
function imprimirID(id) {
    console.log("El ID es: ".concat(id));
}
imprimirID(123); // ✅ Acepta números
imprimirID("ABC123"); // ✅ Acepta strings
var person1 = {
    name: "Carolina",
    salary: 1200,
    university: "U. de Chile"
};
function mostrarInfo(persona) {
    console.log("Nombre: ".concat(persona.name));
    if ("permissions" in persona) {
        console.log("Permisos: ".concat(persona.permissions.join(", ")));
    }
    else {
        console.log("Email: ".concat(persona.email));
    }
}
var usuario = { name: "Carolina", email: "caro@email.com" };
var admin = { name: "Lucía", permissions: ["editar", "borrar"] };
mostrarInfo(usuario);
mostrarInfo(admin);
// ✔️ in permite verificar si un objeto tiene una propiedad específica.
// ✔️ Si permisos está presente, es un Admin; si tiene email, es un Usuario.
// Fusionar Objetos con Intersección (&)
function fusionarDatos(persona) {
    console.log("Nombre: ".concat(persona.name));
    console.log("Email: ".concat(persona.email));
    console.log("Permisos: ".concat(persona.permissions));
}
var superUsuario = {
    name: "Carolina",
    email: "caro@email.com",
    permissions: ["crear", "eliminar"]
};
fusionarDatos(superUsuario);
