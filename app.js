var Reader = require("./Reader");
var Processor = require("./Processor");

var leitor = new Reader();

async function main() {
  var dados = await leitor.Read("./Horas.csv");

  Processor.Process(dados);
}

main();
