(() => {
    this.nome = "João"; 
    let getNomeArrow = () => this.nome;
    console.log(getNomeArrow()); // retorna "João"

    function getNome() {
        return this.nome;
    }
    console.log(getNome()); // retorna undefined pois não existe contexto no this

    let user = {
        nome: "Marcos",
        getNomeArrow,
        getNome
    }

    console.log("user.getNomeArrow", user.getNomeArrow()); // retorna "João", pois o contexto do this é o global da função
    console.log("user.getNome", user.getNome()); // retorna "Marcos", pois o contexto do this é o objeto 'user'
})();