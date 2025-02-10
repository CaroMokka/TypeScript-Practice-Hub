var user = {
    name: "Carolina",
    email: "caro@email.com",
    age: 38,
    greet: function () { return console.log("Hola mi nombre es ".concat(this.name, " y tengo ").concat(this.age, " de edad.")); }
};
var Desarrollador = /** @class */ (function () {
    // nombre: string
    // salario: number
    // lenguaje: string
    function Desarrollador(nombre, lenguaje, salario) {
        this.nombre = nombre;
        this.lenguaje = lenguaje;
        this.salario = salario;
        // this.nombre = nombre
        // this.salario = salario
        // this.lenguaje = lenguaje
    }
    Desarrollador.prototype.trabajar = function () {
        console.log("Soy ".concat(this.nombre, " y programo en ").concat(this.lenguaje));
    };
    return Desarrollador;
}());
var desarrollador1 = new Desarrollador("Carolina", "Javascript", 1200000);
desarrollador1.trabajar();
var Gestionador = /** @class */ (function () {
    function Gestionador(nombre, salario, equipo) {
        this.nombre = nombre;
        this.salario = salario;
        this.equipo = equipo;
    }
    Gestionador.prototype.trabajar = function () {
        console.log("Soy ".concat(this.nombre, " y gestiono un equipo de ").concat(this.equipo, " personas."));
    };
    return Gestionador;
}());
var gestionador1 = new Gestionador("Anabel", 1500000, 23);
gestionador1.trabajar();
