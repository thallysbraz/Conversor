const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");

var leitor = new Reader();
var escritor = new Writer();

async function main() {
  var dados = await leitor.Read("./Horas.csv"); //lendo arquivo

  var dadosProcessados = Processor.Process(dados); //processando dados

  var table = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(table);

  const name = `${Date.now()}.html`;
  console.log(name);

  escritor.Write(name, html);
}

main();
