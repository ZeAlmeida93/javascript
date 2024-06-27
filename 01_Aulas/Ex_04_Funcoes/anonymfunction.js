// SAY MY NAME!!!

const teste = function () {
  console.log("José de Santiago Almeida Cázeres");
};

const teste2 = function () {
  console.log();
  return "José Almeida";
};

// DO MY MATH!!!

/*
const testesoma = function(a, b) {

    return a + b;
const a = 1;
const b = 4;
console


}
*/

//  IIFE

(function () {
  console.log("José de Santiago Almeida Cázeres");
})();

// Console log da função toda

console.log(
  (function () {
    return "José de Santiago Almeida Cázeres3";
  })()
);

(function (a, b) {
  console.log(a + b);
})(1, 3);

// Consoel log da função

console.log(
  (function (a, b) {
    return a + b;
  })(6, 8)
);

// CLOSURES

function calcularIVA(iva) {
  return function (produto) {
    return iva * produto;
  };
}

const calcularIVA6 = calcularIVA(6);
const calcularIVA13 = calcularIVA(13);
const calcularIVA23 = calcularIVA(23);

console.log(calcularIVA6(100));

calcularIVA(22)(200);
calcularIVA(22)(200);
calcularIVA(22)(1000);


// Exercício Closures 1

function divisao(dividendo) {
  return function () {
  return  dividendo / 2;
  };

}

console.log(divisao(25)());


console.log(divisao(430)(2));


// Exercício Closures 2

function divisao(dividendo) {
    return function (divisor) {
    return  dividendo / divisor;
    };
  
  }
  
  
  console.log(divisao(20)(2));
  

//   Exemplo do VITOR

function dividir2(numero) {
    return function () {
      return numero / 2;
    };
  }
  
  dividir2(10)();
  const divisao2 = dividir2(20);
  divisao2();
  
  function divisao(primeiro) {
    return function (segundo) {
      return primeiro / segundo;
    };
  }
  
  divisao(10)(5);
  
  const divisao30 = divisao(30);
  divisao30(10);
  divisao30(5);

  // FUNÇÔES CONSTRUTORAS

  function Livro(titulo, autor){
  this.titulo = titulo;
  this.autor = autor;

  }

  const Livro1 = new Livro('O Conde de Monte Cristo' , 'Alexandre Dumas');
  const Livro2 = new Livro('A Cidade e a Serra' , 'Eça de Queiroz');  /*So Far so Good */

  console.log (Livro1.autor, Livro1.titulo , Livro2.titulo, Livro2.autor);

  Livro1.titulo = 'Zé Diogo Quintela'; /* Bem MAIS SIMPLES DO QUE ESTAVAS A TENTAR FAZER Ó ZÉ  - Usas isto para alterar o titulo de algum dos livros */

 
 
 
  function alterarnome() {

const Livro1 = new Livro ('Os Três Mosqueteiros' , 'Alexandre Dumas');


  }


let Colecao = Array [Livro1 , Livro2];

console.log(Colecao);
console.log(Livro1);



// Teste - Arrays com arrow functions -Funcções Anónimas!!


const palavras = ['primeira', ' segunda' , 'terceira' , 'ed'];

// const palavrasMaiusculas = palavras.map((palavra) => console.log(palavra));

const palavrasMaiusculas = palavras.map((palavra) => palavra.toUpperCase()); 

// Aqui faz exactamente a mesma coisa -> que o que se fez em cima

const palavrasMaiusculas2 = [];
for (let i = 0; i < palavras.length; i++) {

  palavrasMaiusculas2.push(palavras[i].toUpperCase());
}

// FOR EACH

palavras.forEach((palavra) => console.log(palavra));

const maiusculas = [];

palavras.forEach((palavra) => {

  if (palavra.length > 3) {

maiusculas.push(palavra);


  }




});

// FILTER

const filtrarPalavras = palavras.filter((palavra) => palavra.length > 3);

// Reduce


const carrinhoCompras = [
  {
    nome: "A",
    preco: 10.9,
  },
  {
    nome: "B",
    preco: 9.9,
  },
  {
    nome: "C",
    preco: 19.8,
  },
  {
    nome: "D",
    preco: 209.9,
  },
];

let totalCarrinhoCompras = 0;
carrinhoCompras.forEach((produto) => (total += produto.preco));

const totalCarrinhoCompras2 = carrinhoCompras.reduce(
  (total, produto) => (total += produto.preco),
  0
);

