// exemplo de como  podemos usar o symbol para criar enums
const diasSemana = 
{
    domingo: Symbol("DOMINGO"),
    segunda: Symbol("SEGUNDA"),
    terca: Symbol("TERCA"),
    quarta: Symbol("QUARTA"),
    quinta: Symbol("QUINTA"),
    sexta: Symbol("SEXTA")
};

let agendamentos = 
[
    {
        titulo: "Compromisso 1",
        diaSemana: diasSemana.domingo //atribui o retorno da enum que é um symbol
    },
    {
        titulo: "Compromisso 2",
        diaSemana: diasSemana.terca
    },
    {
        titulo: "Compromisso 3",
        diaSemana: diasSemana.quinta
    }
];

// length => retorna o tamanho da array
console.log("Qtde de elementos na array 'agendamentos'", agendamentos.length);

// Array.isArray() => verifica se a variável é um array
console.log("A variavel agendamentos é array", Array.isArray(agendamentos));

// forEach() => Itera cada elemento da array executando uma função para cada elemento
agendamentos.forEach(agendamento => agendamento.data = new Date(2020, 10, 18));
console.log(agendamentos);

// a função chamada no forEach pode receber três parâmetros, o elemento, seu índice, e a array toda
agendamentos.forEach((agendamento, indice, arr) => console.log(agendamento, indice, arr));

// filter() => filtra os elementos de acordo com uma função que retorna boolean
let agendasNoDomingo = agendamentos.filter(agendamento => agendamento.diaSemana === diasSemana.domingo);
console.log("agendamentos no domingo", agendasNoDomingo);

// map() => retorna um novo array a partir da função definida que será executa para cada elemento
// o novo array tem o mesmo tamanho da array original
let agendasComHora = agendamentos.map(agendamento => {
    let novoComHora = 
    {
        ...agendamento,
        hora: "12:25"
    }
    return novoComHora;
});
console.log("Agendamentos com adição de hora", agendasComHora);
console.log("Agendamentos originais", agendamentos);

// reduce() => transforma a array em outro tipo
let compromissos = agendamentos.reduce((compromissos, agendamento) => {
    compromissos = compromissos + agendamento.titulo + "; ";
    return compromissos;
}, "");
console.log("Todos os compromissos", compromissos);

