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

      console.log(lastRow);
      //
      document.getElementById("output").innerHTML = convector(
        worksheet,
        lastRow
      );
    };

    reader.readAsArrayBuffer(file);
  });
