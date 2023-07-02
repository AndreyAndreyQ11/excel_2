//
export default function convector(cell, lastRow) {
  let cells = [];

  for (let i = 0; i <= lastRow; i++) {
    //

    const arreyQ1 = [];
    for (let j = 0; j <= 3; j++) {
      const cellAddress = String.fromCharCode(66 + j) + i;

      let q1 = cell[cellAddress] ? cell[cellAddress].v : "";

      arreyQ1.push(q1);
    }

    cells.push(arreyQ1);
  }

  console.log(cells);
  //
  let text = "";
  for (let i = 0; i < cells.length; i++) {
    text += `<pre>${cells[i][0]}         ${cells[i][1]} ГРН/М.П.       ${cells[i][2]} М * ${cells[i][1]} = ${cells[i][3]}</pre>`;
  }

  // return `<pre>${B3}</br>${B4}                ${C4} ГРН/М.П.                     ${D4} М * ${C4} = ${E4}</pre></br>
  // ${text}
  // `;
  return `${text}`;
}
