//
import numberSeparator from "./numberSeparator.js";
import textEnd_1 from "./textEnd_1.js";
import textEnd_2 from "./textEnd_2.js";
import importSpaces from "./importSpaces.js";
//
export default function convertToText(arr) {
  
  //
  const array = arr
    .map((item) => {
      if (item[0] == "Витратні матеріали крат. 10 000" || item[0] =="витратні матеріали (грунтовка, електроди, і т.д.)") {
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
          `${item[2]} ${item[5]}${numberSeparator(Math.round(item[3] / 1000) * 1000  )} грн`,
        ];
      }
      if (item[0] && !item[1]) {
        return [`${item[0]}`, ``, ``];
      }
    })
  .filter((el) => (el ? el : null));

  
  let text = "";
  // console.log(array)
  for (let i = 0; i < array.length; i++) {
    if (
      array[i][0] ==
      "витратні матеріали (грунтовка, електроди, і т.д.)"
    ) {
        text += textEnd_1(array[i]);
        continue;
     
    }

    if (array[i][0] == "Витратні матеріали крат. 10 000") {
      text += textEnd_2(array[i]);
      continue;
    }

    text += `<pre>${array[i][0]}${importSpaces(array[i][0],70)}${
      array[i][1]
    }${importSpaces(array[i][1],32)}${array[i][2]}</pre>`;
  }
  return text;
}
