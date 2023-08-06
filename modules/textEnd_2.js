// концовка стоимости склада
import numberSeparator from "./numberSeparator.js";

export default function textEnd_2(array, i) {
  return `<pre><strong>витратні матеріали (грунтовка, електроди, і т.д.)</strong></pre>
          <pre>${numberSeparator(array[i][4])} грн</pre>
          <pre><br></pre>
          <pre><br></pre>
          <pre><strong>орієнтована підсумкова вартість матеріалів з пдв:</strong>                    ${numberSeparator(
            array[i][5]
          )} грн</pre>
          <pre><strong>вартість робіт зі зведення підпірної стінки з пдв:</strong>                    ${numberSeparator(
            array[i][6]
          )} грн</pre>
          <pre><br></pre>
          <pre><strong>підсумкова вартість будівництва (роботи+матеріали) з пдв:</strong>    ${numberSeparator(
            array[i][7]
          )} грн</pre>
          <pre><br></pre>`;
}
