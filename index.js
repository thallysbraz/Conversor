const fs = require("fs");

async function modificarArquivo(nome, curso, categoria) {
  //lendo arquivo json
  var informa = fs.readFileSync(
    "./user.json",
    { encoding: "utf-8" },
    (erro, dado) => {
      if (erro) {
        console.log("falhou");
      }
      return res.dado;
    }
  );
  console.log(informa);

  //guardando objeto json
  var dados = JSON.parse(informa);

  //metodo push pra inserir novas informações no Json
  await dados.push({
    nome: nome,
    curso: curso,
    categoria: categoria
  });
  //função splice pra remover algo de dentro do objeto
  dados.forEach((info, index) => {
    if (info.nome === "Braz") {
      dados.splice(index, 1);
    }
  });

  //gravando Json atualizado
  await fs.writeFile("./user.json", JSON.stringify(dados), erro => {
    if (erro) {
      console.log("erro na escrita");
    }
  });

  //percorrendo json pra ver as mudanças
  dados.forEach((info, index) => {
    console.log(`Posição: ${index}`);
    console.log(`Nome: ${info.nome}`);
    console.log(`Curso: ${info.curso}`);
    console.log(`Categoria: ${info.categoria}`);
    console.log("---------------------------------");
  });
}

modificarArquivo("FunctionNomeNovo", "FunctionNomeNovo", "FunctionNomeNovo");
