const fs = require("fs");

fs.readFile("./teste.json", { encoding: "utf-8" }, (erro, dado) => {
  if (erro) {
    console.log("falhou");
  }
  console.log(dado);
});
