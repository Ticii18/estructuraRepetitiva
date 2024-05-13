//1) Hacer un programa que itere por los numeros del 0 al 10 y por cada uno de ellos que imprima y nos diga si el numero es par o impar

for (numero = 0 ; numero < 10; numero++) {
    if (numero % 2 == 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    }
}