console.log("******* instanciando arrays ********\n");
// instanciando arrays
let arr1 = [1, 2, 3, "João"];
let arr2 = new Array(1, 2, 3);
let arr3 = Array.of("João", "Marcos", "Jardim");

console.log("let arr1 = [1, 2, 3, 'João']; => ", arr1);
console.log("let arr2 = new Array(1, 2, 3); => ", arr2);
console.log("let arr3 = Array.of('João', 'Marcos', 'Jardim'); => ", arr3);

let arr4 = Array(3); // cria uma array com 3 posições vazias
let arr5 = Array(3, 2); // cria uma array com dois elementos [3,2]

console.log("let arr4 = Array(3); => ", arr4);
console.log("let arr5 = Array(3, 2); => ", arr5);

// Array.from() cria um array a partir de um objeto array-like ou iterable
// exemplo buscar um NodeList com document.querySelectorAll() e depois transformar em array

/*const divs = document.querySelectorAll("div"); // rodar no browser pra testar
let arr6 = Array.from(divs);
console.log(arr6);*/

console.log("\n******* incluir e remover elementos na array ********\n");
// incluir e remover elementos na array
let newArr1Length = arr1.push("Marcos"); // push() inclui no final da array (pilha/fila)
console.log("let newArr1Length = arr1.push('Marcos'); => ", newArr1Length);
console.log("arr1 com o novo elemento => ", arr1);

let elementoRemovido = arr2.pop(); // pop() remove o ultimo item e o retorna (pilha)
console.log("let elementoRemovido = arr2.pop(); => ", elementoRemovido);
console.log("arr2 depois de remover com pop => ", arr2);

console.log("");
let newArr3Length = arr3.unshift(34); // unshift() incluir um item no início da array (listas)
console.log("let newArr3Length = arr3.unshift(34); => ", newArr3Length);
console.log("arr3 com o novo elemento => ", arr3);

console.log("");
let arr3RemovedFirst = arr3.shift(); // shift() remove um item no início da array e o retorna (fila/listas)
console.log("let arr3RemovedFirst = arr3.shift(); => ", arr3RemovedFirst);
console.log("arr3 depois de remover com shift => ", arr3);

console.log("");
let arr3MaisArr5 = arr3.concat(arr5); // concat() retorna uma nova array juntando a array com outra
console.log("arr3", arr3);
console.log("arr5", arr5);
console.log("let arr3MaisArr5 = arr3.concat(arr5); => ", arr3MaisArr5);

// slice() retorna uma nova array pegando uma parte dela
console.log("");
let pedaco1 = arr3MaisArr5.slice(1, 4); // silce(inicio, fim) pega a array a partir do inicio e finaliza no fim, 
                                        // o elemento no fim não é retornado na nova array
console.log("let pedaco1 = arr3MaisArr5.slice(1, 4); => ", pedaco1);

let pedaco2 = arr3MaisArr5.slice(2); // slice(inicio) pega a array desde o inicoi até o fim da array
console.log("let pedaco2 = arr3MaisArr5.slice(2); => ", pedaco2);

let pedaco3 = arr3MaisArr5.slice(-2); // slice(-inicio) passando negativo, traz a partir do ulitmo 
                                      // ex: -2 pega a partir do penultimo elemento
console.log("let pedaco3 = arr3MaisArr5.slice(-2); => ", pedaco3);


// splice() => altera a array removendo ou incluindo novos elementos, removendo ou não elementos antigos
console.log("");
let splicedItems1 = arr3MaisArr5.splice(3); // splice(inicio) remove a partir da posição inicial, retorna os removidos
console.log("let splicedItems1 = arr3MaisArr5.splice(3); => ", splicedItems1);
console.log("arr3MaisArr5 após splice => ", arr3MaisArr5);

let splicedItems2 = arr3MaisArr5.splice(2, 1, 3, 4); // splice(inicio, qtde_deletados, novos_elementos)
                                                     // remove uma qtde a partir da posição inicial, e inclui novos elementos no lugar
console.log("let splicedItems2 = arr3MaisArr5.splice(2, 1, 3, 4); => ", splicedItems2);
console.log("arr3MaisArr5 após splice => ", arr3MaisArr5);

let splicedItems3 = arr3MaisArr5.splice(2, 0, "Jardim"); // colocando 'Jardim' de volta com splice
console.log("let splicedItems3 = arr3MaisArr5.splice(2, 0, 'Jardim'); => ", splicedItems3); //retorna [] porque não removemos nenhum item
console.log("colocando 'Jardim' de volta com splice => ", arr3MaisArr5);



console.log("\n******* iteraçao de arrays ********\n");

// array.forEach((elemento, indice, array) => {}) executa uma função para cada elemento na array
// array.map((elemento, indice, array) => { /*return novoElemento;*/ }) cria uma nova array do mesmo tamanho, executando uma função para cada elemento

// flat() cria uma nova array concatenando sub-arrays definindo uma profundidade (depth)
let arrWithDepthOf2 = ["João", "Marcos", "Jardim", [34, 5, 6, 1986, ["Desenvolvedor", "Delphi"]]];
                      //depth: 0                   depth: 1         depth: 2
console.log("array com depth de 2 => ", arrWithDepthOf2);
let flatWithDepthOf1 = arrWithDepthOf2.flat(); // por padrão o depth é 1
console.log("let flatWithDepthOf1 = arrWithDepthOf2.flat(); => ", flatWithDepthOf1);

let flatWithDepthOf2 = arrWithDepthOf2.flat(2); // concatena até a segunda profundidade
console.log("let flatWithDepthOf2 = arrWithDepthOf2.flat(2); => ", flatWithDepthOf2);

// flatMap((elemento, indice, array) => { /*return novoElemento;*/ })
// executa primeiro o map() e retorna a array nova com flat() de 1
let arrWithDepthOf3 = ["João", "Marcos", "Jardim", [34, 5, 6, 1986, ["Desenvolvedor", "Delphi", ["São Bernardo do Campo", "SP"]]]];
let mapAndFlat2 = arrWithDepthOf3.flatMap((elemento, indice) => 
{
    return elemento;
}); // retorno vem com flat() de 1
console.log("retorno do flatMap() com array de depth 3 => ", mapAndFlat2);

// keys() cria um arrayIterator com as chaves da array
let keys = mapAndFlat2.keys();
let key = keys.next();
console.log("\nchaves da array")
while (!key.done)
{    
    console.log(key);
    key = keys.next();
}

// values() cria um arrayIterator com os valores da array
let values = mapAndFlat2.values();
let value = values.next();
console.log("\nvalores da array")
while (!value.done)
{    
    console.log(value);
    value = values.next();
}

// entries() cria um arrayIterator com os pares [chave, valor] da array
let entries = mapAndFlat2.entries();
let entry = entries.next();
console.log("\npares [chave, valor] da array")
while (!entry.done)
{    
    console.log(entry);
    entry = entries.next();
}


console.log("\n******* Buscar elementos ********\n");
// find(elemento => { return boolean }) retorna o primeiro item que satisfazer uma condição
let numeros = [10, 20, 30, 50, 40];
let numero = numeros.find(elemento => elemento > 30);
console.log(numero); // retorna 50 o primeiro maior que 30

// findIndex(elemento => { return boolean }) retorna o primeiro indice que satisfazer uma condição
let indice = numeros.findIndex(elemento => elemento > 20);
console.log(indice); // retorna 2 o primeiro inidice com numero maior que 20 (30)

//filter(elemento => { return boolean }) retorna uma array com todos os elementos que satisfazem um condição
let maiorque30 = numeros.filter(elemento => elemento > 30);
console.log(maiorque30); // retorna [50,40]

//indexOf(elemento) retorna o primeiro indice onde existir o elemento
let arr6 = [1,2,3,4,4,5,5,6,6,7,8];
console.log(arr6.indexOf(5)); // retorna 5

//lastIndexOf(elemento) retona o último indice onde existir o elemento
console.log(arr6.lastIndexOf(5)); // retorna 6

//includes(elemento) retorna true ou false indicando se o elemento existe na array
console.log(arr6.includes(6)); //retorna  true
console.log(arr6.includes(9)); //retorna  false

//some(elemento => { return boolean }) retorna se existe pelo menos um elemento que satisfaz a condição
let arr7 = [0, 2, 4, 6, 8, 10, 12];
console.log(arr7.some(elemento => elemento % 2 === 0)); // retorna true por existe elemento par
console.log(arr7.some(elemento => elemento % 2 !== 0)); // retorna false porque não existe elemento ímpar
console.log(arr7.some(elemento => elemento * 2  === 20)); // retorna true porque existe elemento que o dobro é 20

//some(elemento => { return boolean }) retorna true somente se todos os elementos satisfazerem a condição
console.log(arr7.every(elemento => elemento % 2 === 0)); // retorna true, todos os elementos são pares
arr7.push(13);
console.log(arr7.every(elemento => elemento % 2 === 0)); // agora retorna false, um elemento é ímpar


console.log("\n******* Ordenar elementos ********\n");
//sort((current, next) => { return number }) ordena a array de acordo com a função
console.log(arr7.sort((current, next) => next - current));

// usar codPointAt() com strings
let nomes = ["João", "Iraci", "Pedro", "Luiz", "Pedro"];
console.log(nomes.sort((current, next) => next.codePointAt(0) - current.codePointAt(0)));

//reverse() retona a array invertida
console.log(nomes.reverse());


console.log("\n******* Transformar em outros tipos de dados ********\n");
// join(delimitador) transforma a array em string unindo os elementos com um delimitador
let arr8 = [1, 2, 3, 5, 7, 11, 13, 17];
console.log("numeros primos ", arr8.join(" - "));

// reduce(fn(retorno, elemento, indice, array), valor_inicial) => itera cada elemento definindo um valor inicial para retorno
let primos = arr8.reduce((obj, elemento, indice, arr) => obj = obj + elemento + (indice === arr.length - 1 ? "" : " - "), "Números primos: ");
console.log(primos);

let dobroPrimos = arr8.reduce((dobro, primo) => dobro += primo * 2, 0);
console.log(dobroPrimos);