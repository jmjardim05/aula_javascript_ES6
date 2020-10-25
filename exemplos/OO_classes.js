"use strict";

// class declara uma nova classe
class Veiculo
{
    // colcando um # antes do nome do atributo definie que o mesmo é private
    #serial = "";

    // constructor define um construtor (quando der new Veiculo(rodas) será executado a rotina abaixo))
    constructor(rodas)
    {
        this.rodas = rodas;
        this.acelerar = function() { console.log("Vruuummm") };
    }

    getSerial = () => this.#serial;
    setSerial = novoSerial => this.#serial = novoSerial;
}

// extends define a classe que terá seus atributos e métodos herdados
class Carro extends Veiculo
{
    #ano = 0;
    #modelo = "";
    #marca = "";

    // get define o método getter da propriedade privada
    get ano() { return this.#ano; }
    // set define o método setter da propriedade privada
    set ano(value) { this.#ano = value; }
    
    // usando só get a proprieade vira read only
    get modelo() { return this.#modelo; }
    get marca() { return this.#marca; }

    constructor(ano, modelo, marca)
    {
        super(4); // super chama o método construtor definido em Veiculo, carro terá 4 rodas
        this.#ano = ano;
        this.#modelo = modelo;
        this.#marca = marca;
    }

    // static define um método estático, pode ser chamado direto da classe
    static voar = () => console.log("carro não voa");
}

const fiat = new Carro(1980, "147", "Fiat");
fiat.setSerial("1980147FIAT");

console.log("\n", fiat.ano); // chama o getter
fiat.ano = 1981; //chama o setter
console.log("\n", fiat.ano);
console.log("\n", fiat.getSerial());

//fiat.modelo = "erro"; // dá erro pois modelo é readonly, não possui um setter
console.log("\n", fiat.modelo); // mostra 147

console.log("\n", fiat); // usando classe todos os atributos são mostrados, diferente de quando usamos prototype
                         // campos privados não são mostrados, é necessário getters e setters para trabalhar com eles

Carro.voar(); // método estático não é necessário criar um objeto novo, chama direto da classe