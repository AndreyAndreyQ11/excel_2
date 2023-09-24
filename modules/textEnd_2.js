// концовка стоимости склада
import numberSeparator from "./numberSeparator.js";

export default function textEnd_2(array, i) {
  return `<pre><strong>витратні матеріали (фарба, електроди, і т.д.)</strong></pre>
          <pre>${numberSeparator(array[4])} грн</pre>
          <pre><br></pre>
          <pre><br></pre>
          <pre><strong>орієнтована підсумкова вартість матеріалів з пдв:</strong>                    ${numberSeparator(
            array[5]
          )} грн</pre>
          <pre><strong>вартість робіт із зведення підпірної стінки з пдв:</strong>                         ${numberSeparator(
            array[6]
          )} грн</pre>
          <pre><br></pre>
          <pre><strong>підсумкова вартість будівництва (роботи+матеріали) з пдв:</strong>   ${numberSeparator(
            array[7]
          )} грн</pre>
          <pre><br></pre>`;
}
