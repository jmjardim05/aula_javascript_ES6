// declaração clássica de uma function
function fn() {
    return "Retornou a função";
}
console.log(fn());

// declaração por arrow function 
let fn2 = () => "Retornado";
console.log(fn2());
let fn3 = () => {
    // se existir mais de um comando, colocar em bloco e usar return
    const numero = 34;
    return numero;
}
console.log(fn3());

//funções também são objetos e permitem criar propriedades
fn.prop1 = "Nova propriedade no objeto function";
console.log(fn.prop1);

// usando parâmetro na função
// controlFn declara um função que recebe um função "func" de parâmetro
// e retorna outra função que recebe um parâmetro "allow" que verifica se allow é true
// e executa "func"
let controlFn = func => allow => {
    if (allow) {
        return func();
    }
}

let handleFn = controlFn(fn3);
console.log(handleFn);
console.log(handleFn(true)); // retorna 34
console.log(handleFn(false)); // retorna undefined

// a declaraçao do controlFn de forma clássica
function controlFn2(func) {
    return function(allow) {
            if (allow) {
                return func();
            }
        }
}

let handleFn2 = controlFn2(fn2);
console.log(handleFn2(true)); // retorna "Retornado"
console.log(handleFn2(false)); // retorna undefined