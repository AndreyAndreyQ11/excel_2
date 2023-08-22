// концовка стоимости склада
import numberSeparator from "./numberSeparator.js";

export default function textEnd_1(array, i) {
  const separator = (s) => {
    return s.substring(s.lastIndexOf("=") + 1);
  };

  return `<pre><strong>витратні матеріали (грунтовка, електроди, і т.д.)</strong></pre>
        <pre>${separator(array[i + 1][2])} </pre>
        <pre><strong>Логістичні послуги з доставки ферм до об'єкту</strong></pre>
        <pre>${separator(array[i + 3][2])} </pre>
        <pre><br></pre>
        <pre><br></pre>
        <pre><strong>площа забудови:</strong>                                                                                       ${numberSeparator(
          array[i + 4][0]
        )} м2</pre>
        <pre><strong>орієнтована підсумкова вартість матеріалів з пдв: </strong>                  ${separator(
          array[i + 4][1]
        )} грн</pre>
        <pre><strong>вартість робіт зі зведення складу з пдв:</strong>                                         ${separator(
          array[i + 5][1]
        )} грн</pre>
        <pre><br></pre>
        <pre><strong>підсумкова вартість будівництва (роботи+матеріали) з пдв:</strong>  ${separator(
          array[i + 6][1]
        )} грн</pre>
        <pre><br></pre>`;
}
