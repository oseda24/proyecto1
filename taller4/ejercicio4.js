//Cargar un vector de 10 posiciones con los 10 primeros elementos de la serie de Fibonacci y mostrarlo en pantalla.

{
    let[] fibonacci = new int[10];
    fibonacci[0] = 1;
    fibonacci[1] = 1;
    for (let i = 2; i < 10; ++i)
    {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    Console.log("Los primeros 10 numeros de la sequencia fibonacci: ");
    for(let i =0;i<10;++i)
    {
        Console.log(fibonacci[i]);
    }
}