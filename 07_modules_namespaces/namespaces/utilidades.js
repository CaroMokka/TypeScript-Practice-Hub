var Utilidades;
(function (Utilidades) {
    function saludo(nombre) {
        return "Hola ".concat(nombre);
    }
    Utilidades.saludo = saludo;
    function despedida(nombre) {
        return "Adi\u00F3s ".concat(nombre);
    }
    Utilidades.despedida = despedida;
})(Utilidades || (Utilidades = {}));
