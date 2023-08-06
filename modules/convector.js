//
import unitOfMeasurement from "./unitOfMeasurement.js";
import convertToText from "./convertToText.js";
import exceptionWords from "./exceptionWords.js";

export default function convector(cell, lastRow) {
  //Создаем первичный массив
  let cellsQ1 = [];
  for (let i = 0; i <= lastRow; i++) {
    let rowOfCells = [];
    // console.log(cell[String.fromCharCode(66) + i]);
    // кастыль для подпорной стенки
    if (
      cell[String.fromCharCode(66) + i] &&
      cell[String.fromCharCode(66) + i].v == "Витратні матеріали крат. 10 000"
    ) {
      rowOfCells = [
        cell[String.fromCharCode(66) + i].v,
        "1",
        "1",
        "1",
        cell[String.fromCharCode(66 + 3) + (i + 0)].v,
        cell[String.fromCharCode(66 + 3) + (i + 1)].v,
        cell[String.fromCharCode(66 + 3) + (i + 2)].v,
        cell[String.fromCharCode(66 + 3) + (i + 3)].v,
        cell[String.fromCharCode(66 + 3) + (i + 4)].v,
      ];
      cellsQ1.push(rowOfCells);
      continue;
    }
    //

    if (
      cell[String.fromCharCode(66) + i] &&
      cell[String.fromCharCode(66) + i].v !== "Найменування"
    ) {
      for (let j = 0; j <= 3; j++) {
        const cellAddress = String.fromCharCode(66 + j) + i;
        rowOfCells.push(cell[cellAddress] ? cell[cellAddress].v : "");
      }
    } else {
      rowOfCells = ["", "", "", ""];
    }
    cellsQ1.push(rowOfCells);
  }
  //Проверка на слова исключения
  let cellsQ2 = exceptionWords(cellsQ1);
  // Подставляем еденицы измерения
  let cellsQ3 = cellsQ2.map((item) => {
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
  let text = convertToText(cellsQ3);

  return `${text}`;
}
