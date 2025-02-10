//INTERFACE
interface Persona {
    name: string,
    email: string,
    age: number,
    greet: () => void
}

const user: Persona = {
    name: "Carolina",
    email: "caro@email.com",
    age: 38,
    greet(){ return console.log(`Hola mi nombre es ${this.name} y tengo ${this.age} de edad.`) }
}

//CLASE
// class Animal {
//     name: string

//     constructor(name: string){
//       this.name = name
//       }
//       makeSound(){
//         console.log(`El animal ${this.name} hace sonidos.`)
//     }

// }

// const perro = new Animal("Perro")
// perro.makeSound()

// INTERFACE Y CLASE
// interface Vehiculo {
//     marca: string
//     velocidad: number
//     acelerar(cantidad: number): void
// }

// class Auto implements Vehiculo {
//     marca: string
//     velocidad: number

//     constructor(marca: string, velocidad: number){
//         this.marca = marca
//         this.velocidad = velocidad
//     }
//     acelerar(cantidad: number){
//         this.velocidad += cantidad
//         console.log(`El auto de marca ${this.marca} aceleró ${this.velocidad} kms por hora.`)
//     }
// }

// const miAuto = new Auto("Toyota", 40)
// miAuto.acelerar(30)

//EJERCICIO
interface Empleado {
    nombre: string
    salario: number
    trabajar(): void
}

class Desarrollador implements Empleado {
    // nombre: string
    // salario: number
    // lenguaje: string

    constructor(public nombre: string, public lenguaje: string, public salario: number){
        // this.nombre = nombre
        // this.salario = salario
        // this.lenguaje = lenguaje
    }

    trabajar(){
        console.log(`Soy ${this.nombre} y programo en ${this.lenguaje}`)
    }
}

const desarrollador1 = new Desarrollador("Carolina", "Javascript", 1200000 )
desarrollador1.trabajar()

class Gestionador implements Empleado {
    nombre: string
    salario: number
    equipo: number

    constructor(nombre: string, salario: number,equipo: number){
        this.nombre = nombre
        this.salario = salario
        this.equipo = equipo
    }
    trabajar(){
        console.log(`Soy ${this.nombre} y gestiono un equipo de ${this.equipo} personas.`)
    }
}

const gestionador1 = new Gestionador("Anabel", 1500000,23)
gestionador1.trabajar()