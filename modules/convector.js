//
import unitOfMeasurement from "./unitOfMeasurement.js";
import convertToText from "./convertToText.js";

export default function convector(cell, lastRow) {
  let cells = [];

  for (let i = 0; i <= lastRow; i++) {
    let arrayQ1 = [];
    const cellA1 = cell[String.fromCharCode(66) + i];

    //
    if (
      cell[String.fromCharCode(66) + i] &&
      cell[String.fromCharCode(66) + i].v !== "Найменування"
    ) {
      for (let j = 0; j <= 3; j++) {
        const cellAddress = String.fromCharCode(66 + j) + i;
        arrayQ1.push(cell[cellAddress] ? cell[cellAddress].v : "");
      }
    } else {
      arrayQ1 = ["", "", "", ""];
    }
    cells.push(arrayQ1);
  }
  //

  let cellsQ2 = cells.map((item) => {
    if (item[1]) {
      return unitOfMeasurement(item);
    } else {
      if (item[0]) {
        return [`<strong>${item[0]}</strong>`, ...["", "", "", "", ""]];
      } else {
        return [...item, ...["", ""]];
      }
    }
  });
  //
  let text = convertToText(cellsQ2);

  return `${text}`;
}
