// hoisting de variável
function helloWorld()
{
    console.log(msg); // retorna undefined pois neste momento msg não foi atribuída

    var msg = "Hello world!!!"; // apenas a declaração é elevada

    console.log(msg);
}

helloWorld();

//hoisting de função
function showMsgFn()
{
    console.log(msgFn("Este texto irá apresentar pois a função é elevada como um todo")); 

    function msgFn(texto)
    {
        return texto;
    }
}

showMsgFn();