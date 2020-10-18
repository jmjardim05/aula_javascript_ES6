const numero = 3.1415

//toString => converter para string
const strNumero = numero.toString();
console.log("Convertemos o número em string, olha o tipo aqui: ", typeof strNumero);

//toFixed => ficar a quatidade de casas decimais
const comDuasCasasDecimais = numero.toFixed(2);
console.log("O número ", numero, " com duas casas decimais ficou ", comDuasCasasDecimais);

//parseFloat => converte um string para float
const numeroReal = parseFloat("6.666");
console.log("Convertemos a string \"6.666\" em real ", numeroReal, typeof numeroReal);

//parseFloat => converte um string para int
const numeroInteiro = parseInt("6.666");
console.log("Convertemos a string \"6.666\" em inteiro ", numeroInteiro, typeof numeroInteiro);