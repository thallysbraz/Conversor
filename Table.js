class Table {
  constructor(arr) {
    this.header = arr[0]; //salvando header
    arr.shift(); //removendo header

    this.rows = arr; //linhas da table
  }

  get RowCount() {
    //contando quantidade de linhas
    return this.rows.length;
  }
  get ColumnCount() {
    //contando quantidade de colunas
    return this.header.length;
  }
}

module.exports = Table;

//função shift remove o primeiro elemento do array
//get para transforma em campo virtual
