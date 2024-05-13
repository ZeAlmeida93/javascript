// Exercicio 3 - Array com 7 Strings - Descobrir as posições desse array

const notas = ["Dó", "Ré", "Mi" , "Fá", "Sol", "Lá" , "Si"];

notas.length;
console.log (notas.length);


// Converter um array de 7 strings em apenas uma string simples

const escala = notas.toString();



// Criar um array de 3 intervalos e remove o primeiro e o útlimo - Usando o Splice

const intervalos = [3 , 5 , 7];


const powerchord = intervalos.splice(1,1);
console.log (powerchord);


// Usando o POP e o shift também dá


const acordes = ["Maior" , "Menor" , "Aumentado" , "Diminuto"];

acordes.pop();
acordes.shift();

console.log(acordes);



// Cria um array novo e adiciona um novo valor no final


const allthatjazz = intervalos.push(9);
console.log (intervalos);


// Cria um array com 2 strings e convert uma string separada por um barra


const acordes_de_intervalos = intervalos.join("/");



// Junção de duas strings por concatenação

const progressoes = acordes.concat(notas);
console.log(progressoes);

// Criação de Novo Objecto 

const musico = {

    nome:'Pete Townshend' , instrumento:'Guitarra' , nacionalidade:'Inglesa'

};

console.log(musico);


musico.nome = 'Alain Johannes';
musico.nacionalidade = 'Chilena'

console.log(musico);

// Exercicio de Strings - ver a length da string

const verso1 = 'The world is a vampire,';
const verso2 = 'Set to drain'

const intro = verso1.concat(verso2); /* Fiz aqui só uma concatenação para testar */

console.log(intro);
intro.length; /*Ver a length */
console.log(intro.length); /*Ver a length na consola */

intro.indexOf('world');
console.log(intro.indexOf('world'));  /* Ver onde anda o world */

const newintro = intro.replace('world','world of Javascript'); /* Troca os caracteres */
console.log(newintro);

const introCAPS = newintro.toUpperCase();
console.log(introCAPS);

newintro.split ('is');
console.log(newintro.split);

// Milagre da concatenação

const wut = "isto é um teste" + "tu vais passar"; /* Bem mais simples na concatenação */


console.log(wut);
const quote1 = 'Isto é um teste ';
const quote2 = 'Tu vais passar';

const quote3 = quote1.concat(quote2);
console.log(quote3);


const elemento1 = 'Isto é ';
const elemento2 = 1;
const elemento3 = ' string com ';
const elemento4 = 2;
const elemento5 = ' números';


const frase = elemento1.concat(elemento2).concat(elemento3).concat(elemento4).concat(elemento5);
console.log(frase);

// Let's Fly --- Buzz

let rocket = 2**1024;
console.log(rocket);


// DATAS!!!

const data = new Date('2020-02-06');
data.setMonth('02');
data.setFullYear('2021');


const mês = data.getMonth();


console.log(mês);
console.log(data);


