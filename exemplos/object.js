const veiculo = {
    tipo: "Carro",
    marca: "BMW",
    modelo: "X5",
    cor: "Branco",
    ano: 2020
};
console.log(veiculo, typeof veiculo);


let tipoVeiculo = veiculo.tipo;
console.log("Tipo", tipoVeiculo);

let marcaVeiculo = veiculo["marca"];
console.log("Marca", marcaVeiculo);

// atribui um novo valor para a propriedade
veiculo["cor"] = "Preto";

//outra forma de atribuir um valor
veiculo.ano = 2019;
console.log(veiculo);

//cria novo atributo
veiculo.kmRodado = 0;
console.log(veiculo);

//exclui um atributo
delete veiculo.modelo;
console.log(veiculo);

//Object.keys(objeto) => retorna as chaves (nomes dos atributos) em array
console.log("Chaves/atributos do objeto veiculo", Object.keys(veiculo));

//Object.values(objeto) => retorna os valores do objeto em array
console.log("Valores do objeto veiculo", Object.values(veiculo));

//Object.entries(objeto) => lista de chaves/valores
console.log("Lista com chave e valor do objeto veiculo", Object.entries(veiculo));

//Object.assign(objeto, objeto) => mescla dois objetos, criando propriedades
Object.assign(veiculo, { tipoCombustivel: "Diesel" });
console.log("Mescla do objeto { tipoCombustivel } com o objeto veiculo", veiculo);

//Object.assign(objeto<target>, objeto, objeto) => mescla dois objetos, dentro de um terceiro objeto <target>
let target = {};
Object.assign(target, veiculo, { modelo: "X5" });
console.log("Novo objeto a partir da mescla do veiculo com modelo", target);
console.log("Objeto veiculo", veiculo);

//Object.freeze(objeto) => previne qualquer alteração no objeto
let objeto = { nome: "João", ultimoNome: "Jardim" };
Object.freeze(objeto);

objeto.nome = "Marcos"
delete objeto.ultimoNome;

console.log("objeto depois de alterado", objeto);

// Object.seal(objeto) => Permite alterar somente as proprieades que já existem no objeto, não deixa criar ou excluir
// atributos
let outroObjeto = {
    texto: "Este texto pode ser alterado, mas não podemos excluir o atributo ou criar um novo"
}
Object.seal(outroObjeto);
console.log(outroObjeto);
outroObjeto.texto = "O texto foi alterado, o seal() permite a alteração"
outroObjeto.numero = 99999; // o seal não permite inclui um atributo novo
delete outroObjeto.texto; // também não permite excluir
console.log(outroObjeto);