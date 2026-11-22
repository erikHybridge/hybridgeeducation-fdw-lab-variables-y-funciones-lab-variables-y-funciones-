// Ejercicio 1: Declaración de Función
// Modifica la siguiente función creando una nueva variable llamada nombre y asignándole tu nombre. La función debe retornar esta nueva variable que contiene tu nombre

let nombre = "";

function obtenerNombre(nom) {
    nombre = nom;
    return nombre;
}

console.log(obtenerNombre("Erik"));

// No modificar.
// Exporta la función para que pueda ser utilizada en otros archivos
module.exports = {
    obtenerNombre
};
