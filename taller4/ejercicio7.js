//Leer 10 números enteros, almacenarlos en un vector y determinar en qué posiciones se encuentra el número mayor.

{
    let vector = []
    let valorMax = vector[0];
    let posicion = 0;

    for (let i = 0; i < 10; i++)
    {
        if (vector[i] > valorMax )
        {

            valorMax = vector[i];
            posicion = i;
        }
    }
    Console.log("El valor mayor esta en la posicion " + posicion);
}
