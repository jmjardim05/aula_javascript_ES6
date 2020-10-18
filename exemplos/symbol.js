let symbol1 = Symbol("nome");
let symbol2 = Symbol("nome");

// mesmo com o mesmo valor as symbols são únicas
console.log("symbol1 é igual a symbol2", symbol1 === symbol2);

// criando um objeto e usando symbols
let objeto = {
    [symbol1]: "João",
    [symbol2]: "João Marcos",
    ultimoNome: "Jardim"
};

// symbols geram atributos que não podem ser enumerados
// como se fossem private
for (const key in objeto)
{
    console.log("Chave/Valor objeto", key, objeto[key]);
    // somente ultimoNome Jardim será mostrado
}

console.log(Object.entries(objeto));

// mas mostra se dermos um log no objeto
console.log("Objeto:", objeto);

// Object.getOwnPropertySymbols(objeto) => retorna lista de symbols do objeto
console.log("Lista dos symbols do objeto", Object.getOwnPropertySymbols(objeto));

// Reflect.ownKeys() => lista todas as propriedades incluindo symbols do objeto
console.log("Lista todas as propriedades incluindo symbols", Reflect.ownKeys(objeto));

// symbols podem ser usadas para SIMULAR enums
let diasSemana = {
    domingo: Symbol("DOMINGO"),
    segunda: Symbol("SEGUNDA"),
    terca: Symbol("TERCA"),
    quarta: Symbol("QUARTA"),
    quinta: Symbol("QUINTA"),
    sexta: Symbol("SEXTA")
}