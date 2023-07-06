//

//
export default function convertToText(arr) {
  const startSpaces = document.querySelector(".startSpaces").value;
  //
  console.log(startSpaces);
  const array = arr.map((item) => {
    return [
      `${item[0]}`,
      `${item[1]} ${item[4]}`,
      `${item[2]} ${item[5]} ${item[3]}`,
    ];
  });
  const textLength = array.map((item) => {
    return item.map((el) => {
      return el.replace(/<[^>]*>/g, "").length;
    });
  });
  const importSpaces = (n) => {
    let length = startSpaces - n * 2;
    let spaces = "";
    for (let i = 0; i < length; i++) {
      spaces += " ";
    }
    return spaces;
  };

  let text = "";
  for (let i = 0; i < array.length; i++) {
    text += `<pre>${array[i][0]}${importSpaces(textLength[i][0])}${
      array[i][1]
    }${importSpaces(textLength[i][1])}${array[i][2]}</pre>`;
  }
  return text;
}
