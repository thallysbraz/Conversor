class Table {
  constructor(arr) {
    this.header = arr[0]; //salvando header
    arr.shift(); //removendo header

    this.rows = arr;
  }
}

module.exports = Table;

//função shift remove o primeiro elemento do array
