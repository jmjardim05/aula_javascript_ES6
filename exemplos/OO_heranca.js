"use strict";

function Animal(patas)
{
    // na chamada de Animal.call o contexto this será Cachorro
    // o atributo qtdePatas será adicionado ao Cachorro, gerando uma herança da classe Animal
    this.qtdePatas = patas;
}

function Cachorro(morde)
{
    // chama a função Animal() passando Cachorro como contexto, isso gera uma herança de Animal
    Animal.call(this, 4);

    this.morde = morde;
}

// new instancia um novo objeto
const pug = new Cachorro(false); // o objeto terá os atributos qtdePatas herdado de Animal e morde de Cachorro
//console.log(pug);


//herança usando prototype

function Veiculo() {}
Veiculo.prototype.rodas = 4; // o atributo vai existir, mas não será visível no log (protected), mas pode ser atribuida ou utilizada
Veiculo.prototype.acelerar = function() { console.log("Vruuummm"); }

function Carro() {
    //this.rodas = 4; //setar no construtor ou direto no objeto para se tornar público
}
Carro.prototype = Object.create(Veiculo.prototype); //herda os atributos rodas e acelerar
// o comando Object.create(Veiculo) mostrado na aula não funcionou, precisa passar o prototype
Carro.prototype.ano = new Number();
Carro.prototype.marca = new String();
Carro.prototype.modelo = new String();

const porsche = new Carro();
porsche.ano = 2020;
porsche.modelo = "Cayenne";
porsche.marca = "Porsche";
console.log("\nentradas no objeto porsche", Object.entries(porsche)); // não mostra rodas pois pertence a classe Veiculo
console.log("\ntipo do objeto porsche", typeof porsche); // retorna object
console.log("\nprotótipo do objeto porsche", porsche.__proto__); // retorna Veiculo { ano: [Number: 0], marca: [String: ''], modelo: [String: ''] }
console.log("\nentradas do protótipo da classe Carro", Object.entries(Carro.prototype)); // mostra só os atributos definidos em Carro
console.log("\nentradas do protótipo da classe Veiculo", Object.entries(Veiculo.prototype)); // mostra só os atributos definidos em Veiculo
console.log("\natributo [ano] do protótipo do objeto porsche", Carro.prototype.ano); // retona o padrão do ano
console.log("\nporsche é uma instância de Carro", porsche instanceof Carro); // retorna true 
console.log("\nporsche é uma instância de Veiculo", porsche instanceof Veiculo); // retorna true pois o protótipo é o mesmo
console.log("\nporsche é uma instância de Cachorro", porsche instanceof Cachorro); // retorna true pois o protótipo é o mesmo
console.log("\nqdte de rodas no porsche", porsche.rodas); //retorna o valor padrão de rodas definido no protótipo de Veiculo
console.log("\nacelerando o carro com o método acelerar() definido em Veiculo");
porsche.acelerar(); // retorna Vrumm

console.log("\nListando todos os atributos do porsche inclusive os definidos em Veiculo, com for..in")
//for..in itera pelos atributos do objeto e também valores da lista
for (let key in porsche)
{
    console.log(key); //retonra os atribuuos definidos em Carro e Veiculo
}

//for..of só funciona com listas
/*for (let key of porsche)
{
    console.log(key); //erro
}*/