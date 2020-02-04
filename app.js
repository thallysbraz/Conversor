const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main() {
  var dados = await leitor.Read("./Horas.csv"); //lendo arquivo

  var dadosProcessados = Processor.Process(dados); //processando dados

  var table = new Table(dadosProcessados); //gerando table

  var html = await HtmlParser.Parse(table); //passando pra HTML

  //Gerando nome do arquivo
  const nameFileHTML = `${Date.now()}.html`;
  const nameFilePDF = `${Date.now()}.pdf`;

  escritor.Write(nameFileHTML, html); //Escrevendo HTML
  PDFWriter.WritePDF(nameFilePDF, html); //Escrevendo PDF
}

main();
