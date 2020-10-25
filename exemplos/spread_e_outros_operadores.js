/* spread [...array_ou_objeto] => copia todos os itens da array ou objeto sem precisar atribuir um a um */

/* ex array */

var frutas = ["pêra", "uva", "maçã"];
console.log(frutas);
var novas_frutas = ["banana", "melancia", ...frutas, "melão"];
console.log(novas_frutas);

/* exemplo objeto */

var objveiculo = {
    ano: 2020,
    modelo: "Carrera"
}
console.log(objveiculo);
var veiculo_com_marca = {
    ...objveiculo,
    marca: "Porsche"
}
console.log(veiculo_com_marca);

/* operador in => verifica se um atributo ou índice consta em uma lista ou objeto */

var lista = new Array("abra", "cadabra", "sim", "salabim");
console.log("0 in lista", 0 in lista, "índice 0 existe na array");
console.log("4 in lista", 4 in lista, "índice 4 não existe na array");
console.log("'length' in lista", "length" in lista, "atributo length existe no objeto Array");

var texto = new String("João Marcos Jardim");
console.log("'length' in texto", "length" in texto, "atributo length existe no objeto String");

console.log("'marca' in objveiculo", "marca" in objveiculo, "atributo marca não existe no objeto veiculo");
console.log("'marca' in veiculo_com_marca", "marca" in veiculo_com_marca, "atributo marca existe no objeto veiculo_com_marca");

/* objetos pré definidos */
var r = "PI" in Math;
console.log("'PI' existe em Math", r);

/* typeof => retorna o tipo da variável */
/* Array, String e objetos definidos pelo usuário sempre retornam 'object' */
console.log("O tipo da variável texto é ", typeof texto);
console.log("O tipo da variável objveiculo é ", typeof objveiculo);
console.log("O tipo de objveiculo.ano é ", typeof objveiculo.ano);
console.log("O tipo da variável r é ", typeof r);

/* delete objeto => pode exluir um atributo de um objeto */
delete veiculo_com_marca.modelo;
console.log("removemos o atributo modelo ", veiculo_com_marca);

console.log(lista);
delete lista[0]; //deixa o primeiro item vazio, para ecluir o item todo usar shfit() ou pop()
console.log("delete lista[0] deixa o primeiro item vazio", lista);