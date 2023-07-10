//
import numberSeparator from "./numberSeparator.js";
//
export default function convertToText(arr) {
  const startSpaces = 68;
  //
  const array = arr
    .map((item) => {
      if (item[0] && item[2]) {
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

  let text = "";
  for (let i = 0; i < array.length; i++) {
    text += `<pre>${array[i][0]}${importSpaces(textLength[i][0])}${
      array[i][1]
    }     ${array[i][2]}</pre>`;
  }
  return text;
}
