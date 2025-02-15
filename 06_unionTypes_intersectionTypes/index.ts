// 📌 Tipos de Unión (Union Types) y Tipos de Intersección (Intersection Types) en TypeScript

function imprimirID(id: string | number){
    console.log(`El ID es: ${id}`)
}

imprimirID(123);      // ✅ Acepta números
imprimirID("ABC123"); // ✅ Acepta strings
// imprimirID(true);  ❌ Error: No se permite boolean

// Debemos tener en cuenta que dentro de la función, si utilizamos algún método específico de un tipo (string o number),
// ✔️ Recuerda en verificar con typeof, typeof nos ayuda a asegurarnos de que usamos las operaciones correctas según el tipo real.

// 🔹 Tipos de Intersección (&)

type Employee = {
    name: string
    salary: number
}

type Student = {
    name: string
    university: string
}

type Scholar = Employee & Student

const person1: Scholar = {
    name: "Carolina",
    salary: 1200,
    university: "U. de Chile"
}

//console.log(person1)

// 🎯 Ejercicio Final para Practicar

type Usuario = {
    name: string
    email: string
}
type Admin = {
    name: string
    permissions: string[]
}
type SuperUsuario = Usuario & Admin

function mostrarInfo(persona: Usuario | Admin){
    console.log(`Nombre: ${persona.name}`)
    
    if("permissions" in persona){
        console.log(`Permisos: ${persona.permissions.join(", ")}`)
    } else {
        console.log(`Email: ${persona.email}`)
    }
}
const usuario = { name: "Carolina", email: "caro@email.com" }
const admin = { name: "Lucía", permissions: [ "editar", "borrar" ] }
mostrarInfo(usuario)
mostrarInfo(admin)

// ✔️ in permite verificar si un objeto tiene una propiedad específica.
// ✔️ Si permisos está presente, es un Admin; si tiene email, es un Usuario.

// Fusionar Objetos con Intersección (&)

function fusionarDatos(persona: SuperUsuario){
    console.log(`Nombre: ${persona.name}`)
    console.log(`Email: ${persona.email}`)
    console.log(`Permisos: ${persona.permissions}`)
}

const superUsuario: SuperUsuario = {
    name: "Carolina",
    email: "caro@email.com",
    permissions: ["crear", "eliminar"]
}
fusionarDatos(superUsuario)

// ✔️ Aquí superUsuario tiene que cumplir con las propiedades de Usuario y Admin.
// ✔️ Esto es útil para crear tipos compuestos en sistemas más complejos.