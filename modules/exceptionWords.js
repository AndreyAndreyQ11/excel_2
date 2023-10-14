// Проверка на слова исключения
const exceptionObject = {
  "Покрівельна обрешітка": "обрешітка покрівельна",
  "Стінова обрешітка": "обрешітка стінова",
  "Вентиляційне вікно": "конструкція вентиляційної системи",
  "Ущіл.": "ущільнювач",
  Ущільнювач: "стрічка монтажна",
  Метал: "по металу",
  Дерево: "по дереву",
  "П - планка": "п-планка",
  Вентилятор: "АВТОМАТИЗОВАНний ВЕНТИЛЯТОР",
  "Витратні матеріали": "витратні матеріали (грунтовка, електроди, і т.д.)",
  "Підпірна стінка": "ВЛАШТУВАННЯ ПІДПІРНОЇ СТІНКИ ВИСОТОЮ 3,5 М",
};

const exceptionArray = [
  "Фундамент Фм1",
  "Фундамент Фм2",
  "Фундамент Фм3",
  "Фундамент Фм4",
  "Труба 159",
  "Труба 219",
  "Труба 273",
  "Труба 325",
  "Труба 426",
];

export default function exceptionWords(cell) {
  for (let i = 0; i < cell.length; i++) {
    if (cell[i][0] in exceptionObject) {
      cell[i][0] = exceptionObject[cell[i][0]];
      continue;
    }

    cell[i][0] = extractProductName(String(cell[i][0]));
  }

  function extractProductName(str) {
    for (const value of exceptionArray) {
      if (str.includes(value)) {
        return value;
      }
    }
    return str;
  }

  return cell;
}
