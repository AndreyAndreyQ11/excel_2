//
import numberSeparator from "./numberSeparator.js";
import textEnd_1 from "./textEnd_1.js";
import textEnd_2 from "./textEnd_2.js";
//
export default function convertToText(arr) {
  const startSpaces = 69;
  //
  const array = arr
    .map((item) => {
      if (item[0] == "Витратні матеріали крат. 10 000") {
        return item;
      }
      if (!!Number(item[0])) {
        return [
          `${numberSeparator(item[0])}`,
          `${numberSeparator(item[1])}`,
          `${numberSeparator(item[2])}`,
        ];
      }
      if (item[0] && item[3]) {
        return [
          `${item[0]}`,
          `${item[1]} ${item[4]}`,
          `${item[2]} ${item[5]}${numberSeparator(item[3])} грн`,
        ];
      }
      if (item[0] && !item[1]) {
        return [`${item[0]}`, ``, ``];
      }
    })
    .filter((el) => (el ? el : null));

  //
  const textLength = array.map((item) => {
    if (item[0] == "Витратні матеріали крат. 10 000") {
      return item;
    }
    //
    return item.map((el) => {
      return el.replace(/<[^>]*>/g, "").length;
    });
  });
  const importSpaces = (n) => {
    let spaces = "";
    let length = startSpaces - n * 2;

    for (let i = 0; i < length; i++) {
      spaces += " ";
    }
    return spaces;
  };

  //
  let text = "";
  for (let i = 0; i < array.length; i++) {
    if (
      array[i][0] ==
      "<strong>витратні матеріали (грунтовка, електроди, і т.д.)</strong>"
    ) {
      text += textEnd_1(array, i);

      i += 6;
      continue;
    }

    if (array[i][0] == "Витратні матеріали крат. 10 000") {
      text += textEnd_2(array, i);

      i += 4;
      continue;
    }

    text += `<pre>${array[i][0]}${importSpaces(textLength[i][0])}${
      array[i][1]
    }     ${array[i][2]}</pre>`;
  }
  return text;
}
