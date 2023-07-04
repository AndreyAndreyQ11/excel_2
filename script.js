import convector from "./modules/convector.js";
const inputFile = document.querySelector(".inputFile");

document
  .getElementById("inputFile")
  .addEventListener("change", function (event) {
    let file = event.target.files[0];

    let reader = new FileReader();
    reader.onload = function (e) {
      let data = new Uint8Array(e.target.result);
      let workbook = XLSX.read(data, { type: "array" });
      let worksheet = XLSX.read(data, { type: "array" }).Sheets["По образцу"];
      var lastRow = XLSX.utils.decode_range(worksheet["!ref"]).e.r + 1;

      //
      document.getElementById("output").innerHTML = convector(
        worksheet,
        lastRow
      );
    };

    reader.readAsArrayBuffer(file);
  });
//
function alignColumns(text) {
  const lines = text.split("\n");
  const columns = lines.map((line) => line.split(/\s+/));
  const maxColumnWidths = columns.reduce((maxWidths, column) => {
    column.forEach((cell, index) => {
      const cellWidth = cell.length;
      maxWidths[index] = Math.max(maxWidths[index] || 0, cellWidth);
    });
    return maxWidths;
  }, []);

  const alignedLines = lines.map((line) => {
    const cells = line.split(/\s+/);
    const alignedCells = cells.map((cell, index) => {
      const maxWidth = maxColumnWidths[index];
      const padding = maxWidth - cell.length + 1;
      return cell + " ".repeat(padding);
    });
    return alignedCells.join(" ");
  });

  return alignedLines.join("<br>") + "<br>";
}

// Пример использования
const text = `ТРУБА 325Х8         1390 ГРН/М.П.       65 М * 1390 = 90350
  ТРУБА 273Х8         1160 ГРН/М.П.       133 М * 1160 = 154280
  ТРУБА 100Х100Х3         458 ГРН/М.П.       204 М * 458 = 93432
  ТРУБА 80Х60Х3         313 ГРН/М.П.       156 М * 313 = 48828`;

const alignedText = alignColumns(text);
document.getElementById("output").innerHTML = `<pre>${alignedText}</pre>`;
