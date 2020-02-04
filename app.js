var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");

var leitor = new Reader();

async function main() {
  var dados = await leitor.Read("./Horas.csv"); //lendo arquivo

  var dadosProcessados = Processor.Process(dados); //processando dados

  var table = new Table(dadosProcessados);

  console.log(table.rows);
}

main();
