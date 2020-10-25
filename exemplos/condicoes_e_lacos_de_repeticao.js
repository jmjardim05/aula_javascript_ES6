if (true)
{
    // ação quando for true
}
else
{
    // ação quando for false
}

var x = 5;
if (x % 2 !== 0)
{
    console.log(x, "é ímpar");
}
else
{
    console.log(x, "é par");
}

if (x % 2 === 0)
{
    console.log(x, "é divisível por 2");
}
else if (x % 5 === 0)
{
    console.log(x, "é divisível por 5");
}

switch (x)
{
    case 1: console.log("opção 1"); break;
    case 2: console.log("opção 2"); break;
    case 3: console.log("opção 3"); break;
    case 4: console.log("opção 4"); break;
    case 5: console.log("opção 5"); break;
    default: console.log("opção inválida");
}

/* operadores lógicos */
/* && => operador .E. */
console.log("operador && (true && false) retorna", (true && false));
console.log("operador && (true && true) retorna", (true && true));
console.log("operador && (false && false) retorna", (false && false));
console.log("");
/* || => operador .OU. */
console.log("operador || (true || false) retorna", (true || false));
console.log("operador || (true || true) retorna", (true || true));
console.log("operador || (false || false) retorna", (false || false));
console.log("");
/* ! => operador .NÃO. */
console.log("operador ! (!(true || false)) retorna", (!(true || false)));
console.log("operador ! (!(true || true)) retorna", (!(true || true)));
console.log("operador ! (!(false || false)) retorna", (!(false || false)));

/* operadores relacionais */
/* ==   => operador de igualdade, apenas o valor precisa ser igual ex: "3" == 3 retorna true */
console.log("operador == ('3' == 3) retorna", ("3" == 3));
/* ===  => operador de igualdade, tanto o valor quanto o tipo devem ser iguais ex: "3" === 3 retorna false */
console.log("operador === ('3' === 3) retorna", ("3" === 3));
/* !=   => operador de diferença, verifica apenas o valor ex: "2" != 3 retorna true */
console.log("operador === ('2' != 3) retorna", ("2" != 3));
/* !==  => operador de diferença, ou o valor ou o tipo é diferente ex: "3" !== 3 retorna true */
console.log("operador !== ('3' !== 3) retorna", ("3" !== 3));
/* >    => maior que */
console.log("operador > ('2' > 3) retorna", ("2" > 3));
/* <    => menor que */
console.log("operador < ('2' < 3) retorna", ("2" < 3));
/* >=   => maior ou igual a */
console.log("operador >= ('3' >= 3) retorna", ("3" >= 3));
/* <=   => menor ou igual a */
console.log("operador <= ('5' <= 3) retorna", ("5" <= 3));

/* laço for */
/* for (declara variável de iteração; condição para finalizar o laço; comando de iteração) */
for (let i = 1; i <= 10; i++)
{
    let x = 9 * i;
    console.log(9, "x", i, "=", x);
}

/* laço while (enquanto)*/
/* while(condição) */
let i = 1;
while (i <= 10)
{
    let x = 8 * i;
    console.log(8, "x", i, "=", x);
    i++; // lembrar de incrementar a variável usada para o controle do laço, 
         // ou o laço não termina (i nunca chega ao valor 11, e sempre imprime 8 x 1)
}


/* laço do..while (similar ao repita) garante que a primeira execução aconteça */
/* do{ //ações } while(condicao) */
let i = 1;
do
{
    // a primeira vez sempre executa não importa o valor inicial de i
    let x = 7 * i;
    console.log(7, "x", i, "=", x);
    i++; // lembrar de incrementar a variável usada para o controle do laço, 
         // ou o laço não termina (i nunca chega ao valor 11, e sempre imprime 8 x 1)
}
while (i <= 10);

//continue; pula para o próximo passo do laço
let i = 1;
while (i <= 10)
{
    if (i % 2 !== 0)
    {
        i++; // não esquecer de incrementar a variável de controle
        continue; // só multpilca se i for par
    }

    let x = 6 * i;
    console.log(8, "x", i, "=", x);
    i++; // lembrar de incrementar a variável usada para o controle do laço, 
         // ou o laço não termina (i nunca chega ao valor 11, e sempre imprime 8 x 1)
}

//break; força a saída do laço
let i = 1;
while (true) // força um laço infinito
{
   if (i > 10)
   {
       break; // se i for maior que 10, força a saída do laço
   }

   let x = 5 * i;
   console.log(5, "x", i, "=", x);
   i++;
}