document.getElementById("button").onclick = () => {
    let colNum = document.getElementById("num1").value;
    let rowNum = document.getElementById("num2").value;
    let table = document.getElementById("table");
    table.border = 2;
    for (let i = 0; i < rowNum; ++i) {
      let tableRow = document.createElement("tr");
      table.appendChild(tableRow);
      for (let j = 0; j < colNum; ++j) {
        tableRow.appendChild(document.createElement("td"));
      }
    }
  };