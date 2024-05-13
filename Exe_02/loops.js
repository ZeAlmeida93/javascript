// O Que são Loops? - Correm o código o nr de vezes que nos quisermos - tipo o looper do logic

// 




// Exercicio Loop

// FOR LOOP

for (let a = 0; a <= 10 ; a = a+2) {console.log(a);}


    /*
    {
        if (a % 2 === 0) { console.log(a); }
        
    }
*/
// WHILE



/*while () */


// 

function duplicarNumero (numero) {

    return numero*2;

}



// Exercicio FUNCOES

// Soma do Sérgio


function soma (num1 , num2) {

let total = num1 + num2;
return total;


}

// A Minha Soma

function sum (a , b)
{

    return a + b;


}


// Multiplicação


function multiply (a , b)
{

    return a * b;

}



//  Gerar Pessoa



function GeneratePerson (name , age)

{

    return  {

name:name,
age:age,

    };
   

}



// GERAR PESSOA ALEATORIA

function getRandomName() {
    // Array of possible names
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry", "Ivy", "Jack"];

    // Generate a random index to select a name from the array
    const randomIndex = Math.floor(Math.random() * names.length);

    // Return the randomly selected name
    return names[randomIndex];
}

function getRandomAge(min, max) {
    // Generate a random age within the specified range
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomPerson() {
    const randomName = getRandomName();
    const randomAge = getRandomAge(18, 80); // Example age range from 18 to 80

    // Call GeneratePerson function with the randomly generated name and age
    return GeneratePerson(randomName, randomAge);
}





// ARRAYS

const numeros = [1,2,3,4,5,6,7,8];
const meses0 =["janeiro","fevereiro","março"];




//  Exercicio dos Arrays

/* era bom não era? 
let salada = ["tangerina",2,"banana",4];


for (let salada = 0; salada <4 ; salada = salada++) {

    return 
};

*/


/* - Erro no Ciclo FOR

const meses = new Array(4);
meses [0] = "janeiro";
meses [1] = "Fevereiro";
meses [2] = "Março";
meses [3] = "Abril";


const meses2 = ["Janeiro" , "Fevereiro" , "Março" , "Abril"];

for (let k = 0; k < meses2.length; k++)
{
return console.log(meses);

}

*/

const meses = new Array(4);
meses[0] = "Janeiro";
meses[1] = "Fevereiro";
meses[2] = "Março";
meses[3] = "Abril";

const meses2 = ["Janeiro", "Fevereiro", "Março", "Abril"];

for (let k = 0; k < meses2.length; k++) {
    console.log(meses2[k]);
}



