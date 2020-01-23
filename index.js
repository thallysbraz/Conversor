const fs = require("fs");

fs.writeFile("./teste.json", "{idade: 20}", err => {
  if (err) {
    console.log("falhou na escrita");
  }
});

fs.readFile("./teste.json", { encoding: "utf-8" }, (erro, dado) => {
  if (erro) {
    console.log("falhou");
  }
  console.log(dado);
});
