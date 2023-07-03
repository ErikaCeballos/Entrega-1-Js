
// 1- Crear una función que reciba un número por parámetro 
// e indique en consola si el número es par o impar. 

const numParImpar = (num)=>{
 if (num % 2){
    console.log ('El numero es Impar')
 } else{
    console.log ('El numero es Par')
 }
};

numParImpar(9);
numParImpar(6);

// 2- Crear una función que reciba dos números por parámetro 
// e indique en consola que número es mayor, y si ninguno lo es, 
// indicar por consola que son iguales. 

const numeroMayorIgual= (num1, num2)=>{
    if (num1 == num2){
       console.log (`${num1} Es igual que ${num2}`)
    } else if (num1 >= num2){
        console.log (`${num1} Es mayor que ${num2}`)
    } else if (num2 >= num1){
        console.log (`${num2} Es mayor que ${num1}`)
   }
};
    numeroMayorIgual(1, 9);
    numeroMayorIgual(12, 6)
    numeroMayorIgual(4, 4);


    // 3- Crear una función que reciba un número por parámetro 
    // e indique en consola si ese número es múltiplo de 5. 

    const multiplo5 = (num5)=>{
        if (num5 % 5){
            console.log (`${num5} No es multiplo del 5`)
        } else{
            console.log (`${num5} Es multiplo del 5`)
        }
       };

       multiplo5(45);
       multiplo5(86);

    //    4- Crear una función que reciba un número por parámetro 
    //    e imprima por consola todos los números desde el 0 hasta llegar a ese número. 

    const numeroHastaNumx = (numx)=>{
        for( let i=0; i<=numx;  i++ ){
            console.log (i)
                
        }
    };
       numeroHastaNumx(4);

    //    5 - Crear una función que reciba una palabra y un número por parámetro 
    //    e imprima por consola esa palabra la cantidad correspondiente al número indicado. 

    const palabraNum = (pal, numz)=>{
        for( let i=0; i< numz;  i++ ){
            console.log (pal)              
        }
    };
       palabraNum('Colombia', 2);


    //    6 - Crear una función que reciba un array por parámetro
    //     e imprima por consola todos los valores de ese array. 
    const miArrayMascotas = ['Perro', 'Gato', 'Elefante'];
    const imprimirArray = (array) => {
        for( let i=0; i< array.length;  i++ ){
            console.log (array[i])              
        }
    }
    
        imprimirArray(miArrayMascotas);
        

        // 7 - Crear una función que reciba un array con 10 números 
        // e imprima por consola todos los valores de ese array,
        // menos el que se encuentre en la 5ta posición del mismo. 
        // Ayuda: Recuerden que el primer índice de un array es "0". 
    
const  arrayz = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const arrayTen = (arrayT) => {
        for( let i=0; i< arrayT.length;  i++ ){
            if (i!==4){
                console.log (arrayT[i])     
            }    
        }
    };

    arrayTen(arrayz);


    // 8 - Crea una función que reciba un array de números
    // y un número por parámetro e imprima por consola cada número del array multiplicado 
    // por el número pasado por parámetro. 

    const  misNumeros = [19, 28, 37, 46, 55, 64, 73, 82, 91, 0];
    const multArrayNumE = (misNumeros, numE) => {
            for( let i=0; i< misNumeros.length;  i++ ){
                const resultado = misNumeros[i] * numE;
                console.log(resultado) 
            }
        };
    
        multArrayNumE(misNumeros, 2);
