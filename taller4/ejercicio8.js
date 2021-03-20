//Leer 10 números enteros, almacenarlos en un vector y determinar en qué posiciones se encuentran los números terminados en 4.

{
    let vector = [];
    let posicion = 0;
    

    for (let i = 0; i < 10; i++)
    {
        if (vector[i] % 10 == 4 || vector[i] % 100 == 4 || vector[i] % 1000 == 4)
        {
            posicion = i;
            Console.log("Un numero terminado en 4 se encuentra en la posicion " +posicion);
              
                
            }





        
    }
    
}

