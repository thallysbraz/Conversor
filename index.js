const fs = require("fs");

fs.readFile("./teste.json", { encoding: "utf-8" }, (erro, dado) => {
  if (erro) {
    console.log("falhou");
  }
  var dados = JSON.parse(dado);
  dados.nome = "Thallys Silva Braz";

  fs.writeFile("./teste.json", JSON.stringify(dados), erro => {
    if (erro) {
      console.log("erro na escrita");
    }
    console.log("deu certo");
  });
});
