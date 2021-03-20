//Almacenar en un vector de 10 posiciones los 10 números primos comprendidos entre 100 y 300. Luego mostrarlos en pantalla.

{
    let primos =[];

    for (let i = 0; i < 300; ++i)
        primo[i] = true;

    primos[0] = false;
    primos[1] = false;

    for (let i = 2; i <= 300; ++i)
    {
        if (primos[i])
        {
            for (let j = 2; i * j < 301; ++j)
            {
                primos[i * j] = false;
            }
        }
    }

    Console.log("Los numeros primos entre 100 y 300 son:");
    for (let i = 100; i < 301; ++i)
    {
        if (primo[i])
        {
            Console.log(i);
        }
    }
}

