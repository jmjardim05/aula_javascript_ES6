// length => retorna o tamanho da string
const textLen = "João".length;
console.log(`O tamanho da string "João" é ${textLen}`);

//split => quebra o texto por um delimitador e retorna um array com os textos extraídos
const textSplit = "João".split("ã");
console.log(`Quebrando a string "João" em "ã" retornou ${textSplit}`);

//replace => busca um texto dentro de ooutro e substitui por outro texto
const textRepl = "João".replace("ão", "ÃO");
console.log(`Substituindo a string "ão" na string "João" por "ÃO": ${textRepl}`);

//slice => retorna um fatia da string 
const lastChar = "João".slice(-1);
console.log(`O último caractere da string "João" é ${lastChar}`);

//usando slice para pegar as duas letras do meio "oã"
const middleText = "João".slice(1, 3); 
// queremos pegar os índices 1 e 2, o segundo parâmetro é até onde pegar, mas sem incluir o índice
// por isso passamos 3, também poderíamos passar um negativo que conta a partir do último caractere
// ex: "João".slice(1, -1); // desconta o último caractere
console.log(`O meio da string "João" é ${middleText}`);

//substr => retrona N caracteres a partir do índice informado
const first3Char = "João".substr(0, 3);
console.log(`Os três primeiros caracteres da string "João" são ${first3Char}`);