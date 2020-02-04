var Reader = require("./Reader");

class Processor {
  static Process(data) {
    var rows = data.split("\r\n");
    var linhas = [];
    rows.forEach(row => {
      var arr = row.split(",");
      linhas.push(arr);
    });

    return linhas;
  }
}
module.exports = Processor;
