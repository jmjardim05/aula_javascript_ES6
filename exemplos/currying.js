function soma(a)
{
    return function(b)
           {
               return a + b;
           }
}

var soma2 = soma(2);

console.log(soma2(5));
console.log(soma2(6));
console.log(soma2(7));
console.log(soma2(8));
console.log(soma2(9));