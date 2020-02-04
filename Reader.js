const fs = require("fs");
class Reader {
  Read(filepath) {
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  }
}

module.exports = Reader;
