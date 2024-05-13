// 2) Triangulo de #. Para este ejercicio, construir un programa que permita armar un trianguloformado con #, de la siguiente manera:
// #
// ##
// ###
// ####
// #####

let tringulo = [""];

for (let i = 0; i < 5; i++) {
    tringulo.push(tringulo[i] + "#");
    console.log(tringulo[i] + "#");
}