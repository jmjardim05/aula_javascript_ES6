const pessoa = {
    primeiroNome: "João",
    ultimoNome: "Marcos Jardim"
};

function getPessoaComNomeCompleto(pessoa)
{
    return {
        ...pessoa, //operador spread (...) copia os atributos do objeto "pessoa"
        nomeCompleto: `${pessoa.primeiroNome} ${pessoa.ultimoNome}` // `` => tipo de string literal que aceita passar o objeto.atributo diretamente
    };
}

console.log(getPessoaComNomeCompleto(pessoa));