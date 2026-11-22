// Ejercicio 9: Calcular el promedio de 5 números
// Declara una función llamada "calcularPromedio" que acepte 5 parámetros "n1", "n2", "n3", "n4", "n5" y devuelva el promedio de los 5 números.

//escribe tu función aquí. Recuerda que el nombre de la función debe ser exactamente "calcularPromedio" y que debe recibir exactamente 5 parámetros

function calcularPromedio(n1, n2, n3, n4, n5){
    const notas = [n1, n2, n3, n4, n5];
    let sumaNotas = 0;
    let promedio = 0.0;

    notas.forEach(nota => {
        sumaNotas += nota;
    });

    promedio = sumaNotas / (notas.length);

    return promedio;



}

console.log(calcularPromedio(6,7,8,9,10));



// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    calcularPromedio
};
