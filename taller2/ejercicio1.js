// pedir tres números; si el primero es negativo, debe imprimir el producto de los tres y si no lo es, imprimirá la suma.

// Entrada: Tres numero que brinda el usuar
// Salida: se imprimira la suma de los tres numeros.

let numero_uno = parseInt(prompt(" digite el primer número"));
let numero_dos = parseInt(prompt("ahora, digite el segundo número"));
let numero_tres = parseInt(prompt("ahora, digite el tercer número"));

if(numero_uno < 0){
    let resta = numero_uno - numero_dos - numero_tres;
    console.log("la suma de "+numero_uno+ " , " +numero_dos+ " y " +numero_tres+ " es " + resta);
}else{
    let suma = numero_uno + numero_dos + numero_tres;
    console.log("la resta de "+numero_uno+ " , " +numero_dos+ " y " +numero_tres+ " es " + suma);
}