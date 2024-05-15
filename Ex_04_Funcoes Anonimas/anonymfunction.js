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


console.log(divisao(430)(2));


// Exercício Closures 2

function divisao(dividendo) {
    return function (divisor) {
    return  dividendo / divisor;
    };
  
  }
  
  
  console.log(divisao(20)(2));
  