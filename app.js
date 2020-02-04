const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");

var leitor = new Reader();

async function main() {
  var dados = await leitor.Read("./Horas.csv"); //lendo arquivo

  var dadosProcessados = Processor.Process(dados); //processando dados

  var table = new Table(dadosProcessados);

  console.log(table.rows);

  var html = await HtmlParser.Parse(table);
  console.log(html);
}

main();
