// const { obj_exportado1, obj_exportado2, ...,  objeto_exportadoN } = require("caminho virtual do modulo") 
// carrega o que foi exportado no módulo
const {o} = require("./OO_design_patterns.js");

const log4 = data => console.log(`Log nº 4 ${data}`);

// usando o objeto o (Observer) que criamos no modulo 
o.subscribe(log4);
o.notify("MODULE");
