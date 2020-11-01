class ID {
	static #contador = 0;

  static get contador() {
    return this.#contador;
  }

  static incrementaContador() {
    return ++this.#contador;
  }
}

class Cliente {
  #id = 0;

  constructor() {
    this.#id = ID.incrementaContador();
  }

  get id() {
    return this.#id;
  }
}

const c1 = new Cliente();
console.log(`Contador atual: ${ID.contador}.`);

const c2 = new Cliente();
const c3 = new Cliente();

console.log(`Contador atual: ${ID.contador}.`);


class Pessoa {
    #nome = '';
  
    constructor(nome) {
      this.#nome = nome;
    }
  
    get nome() {
      return `Seu nome é: ${this.#nome}.`;
    }
  
    set nome(novoNome) {
      this.#nome = novoNome;
    }
  }
  
  const pessoa = new Pessoa();
  
  console.log(pessoa);
  console.log(pessoa.nome);
  pessoa.nome = 'Foo';
  console.log(pessoa.nome);

  //
  //De acordo com o código abaixo, as alternativas corretas são:

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  return { //retorno explícito, não o objeto pessoa
    nome,
    idade: 20,
    falar() {
      console.log('objeto falar');
    }
  }
}

Pessoa.prototype.falar = function() {
  console.log('prototype falar');
};

const pessoa = new Pessoa('Foo', 30);

console.log("I-", pessoa); // false
console.log("II-", pessoa.constructor == Pessoa); // false pois tem retorno explícito de outro objeto
console.log("III-", pessoa.constructor == Object); // true
console.log("IV-", pessoa.__proto__.falar === undefined); // true
console.log("V-"); pessoa.falar(); // false porque não tem o mesmo prototype do objeto Pessoa, porque Pessoa() retorna objeto explicito

/* Com base no código acima, observe as afirmativas abaixo:
I   - O retorno será um objeto "{ nome: 'Foo', idade: 20 }". Pois mesmo chamando a função Pessoa com a palavra-chave new, a função possui retorno explicito.

II  - A expressão "pessoa.constructor === Pessoa" retornará true. Pois como utilizamos a palavra-chave new, sempre será retornado uma instância de pessoa, mesmo quando a função possui retorno explícito.

III - A expressão "pessoa.constructor === Object" retornará true. Pois o retorno da função é um objeto.

IV  - A expressão "pessoa.__proto__.falar === undefined" retornará true. Pois como há retorno explícito de um objeto na função Pessoa, suas definições não são passadas a esse objeto.

V   - Executando a função "pessoa.falar()" será logado no console o texto 'prototype falar'. */

//
//Analisando o código abaixo, quais serão as saídas dos console.log:

function Pessoa(nome) {
  this.nome = nome;
}

function PessoaFisica(nome, cpf) {
  Pessoa.call(this, nome);

  this.cpf = cpf;
}

function PessoaJuridica(nome, cnpj) {
  Pessoa(nome);

  this.cnpj = cnpj;
}

const pessoaFisica = new PessoaFisica('Foo', '123.456.670-0');
const pessoaJuridica = new PessoaJuridica('Bar', '12.345.678/9012-34');

console.log(pessoaFisica);
console.log(pessoaJuridica);

// 'PessoaFisica {nome: "Foo", cpf: "123.456.670-0"}' e 'PessoaJuridica {cnpj: "12.345.678/9012-34"}'.
