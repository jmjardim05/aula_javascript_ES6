/* Factory -> em javascript um método que retorna um objeto é considerado uma factory */

function Carro(props)
{
    return {
        ano: 2020,
        marca: "Volkswagen",
        modelo: "UP",
        ...props
    }
}

const c = Carro({ ano: 2019, cor: "preto"});
console.log(c);

/* Singleton -> retorna sempre a mesma instância depois que ela é criada */

function Pessoa()
{
    if (!Pessoa.instance)
    {
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({ nome: "João MJ" });
console.log(p);

const p2 = Pessoa.call({ nome: "Sophie" });
console.log(p2); // retorna { nome: "João MJ" } pois uma instância de Pessoa já foi criada 


/* Decorator -> Um decorator recebe uma função como parametro e extende sua funcionalidade, sem alterar seu comportamento 
 * original */

 let logado = false;

 function executarSeLogado(fn)
 {
     return !!logado && fn();
 }

 function soma(a, b)
 {
     return a + b;
 }

 console.log(executarSeLogado(() => soma(5, 5)));
 logado = true;
 console.log(executarSeLogado(() => soma(5, 5)));


 /* Observer => formado por uma classe subscriber que registra objetos (observables) que serão notificados caso 
  * tenha qualquer alteração */

class Observer
{
    constructor()
    {
        this.observables  = []; // inicializa a lista de observables
    }

    subscribe(fn)
    {
        this.observables.push(fn); // inscreve um observable
    }

    notify(data)
    {
        this.observables.forEach(fn => fn(data)); // executa cada observable pasasando o dado notificado
    }

    unsubscribe(fn)
    {
        this.observables = this.observables.filter(obj => obj !== fn); // remove um observable (desinscreve)
    }
}


const log1 = data => console.log(`Log nº 1 ${data}`);
const log2 = data => console.log(`Log nº 2 ${data}`);
const log3 = data => console.log(`Log nº 3 ${data}`);

const o = new Observer();

o.subscribe(log1);
o.subscribe(log2);
o.subscribe(log3);

o.notify("TESTE");

console.log("");

o.unsubscribe(log1);

o.notify("DELETE");


/* Module => permite organizar mlehor o código sem necessidade de expor variáveis globais */
module.exports = { o }; // module.exports = { obj_exportado1, obj_exportado2, ...,  objeto_exportadoN }
// expoe os objetos na lista para importar em outra parte do código