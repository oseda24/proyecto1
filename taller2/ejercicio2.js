//En la tienda de don juan, usted va y compra frutas, Solicite al usuario el valor total de compra, debe ofrecer un 15 % de descuento si el valor de compra del mercado es mayor o igual a 20.000. al final debe indicar el valor total de la compra.

//Entradas: Valor total de compra.
//salidas: descuento del valor total de compra.

let valor_compra = parseInt(prompt("ingrese valor de compra."));

if(valor_compra >= 20000){
    let valor_con_dcto = valor_compra * 0.15;
    console.log("total a pagar: "+valor_con_dcto);
}else {
    console.log("total a pagar: "+valor_compra);
}