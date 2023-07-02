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
// let q1 = ["Арматурыа 10", 0, 0, 0];

// let convectorrr = (item) => {
//   const unitOfMeasurement = {
//     Арматура: ["ГРН/М.П.", `М * ${item[1]} =`],
//     Анкер: ["ГРН/ШТ", `ШТ * ${item[1]} =`],
//     Бетон: ["ГРН/М2", `М2 * ${item[1]} =`],
//   };

//   function extractSubstring(str) {
//     const spaceIndex = str.indexOf(" ");
//     if (spaceIndex !== -1) {
//       return str.substring(0, spaceIndex);
//     } else {
//       return str;
//     }
//   }
//   //

//   for (const key in unitOfMeasurement) {
//     if (key.toLowerCase() == extractSubstring(item[0]).toLowerCase()) {
//       return [...item, ...unitOfMeasurement[key]];
//     }
//   }
//   return [...item, ...["\\\\\\", `\\\\\\ * ${item[1]} =`]];
// };
// console.log(convectorrr(q1));
