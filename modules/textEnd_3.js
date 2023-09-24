// концовка стоимости пола
import numberSeparator from "./numberSeparator.js";

export default function textEnd_3(array, i) {
  return `<pre><br></pre>
  <pre><br></pre>
  <pre><strong>площа підлоги:</strong>                                                                                         ${numberSeparator(array[i][4])} м2</pre>
  <pre><strong>орієнтована підсумкова вартість матеріалів з пдв:</strong>                 ${numberSeparator(array[i][5])} грн</pre>
  <pre><strong>вартість робіт із влаштування підлоги з ПДВ:</strong>                                ${numberSeparator(array[i][6])} грн</pre>
  <pre><br></pre>
  <pre><strong>підсумкова вартість (роботи+матеріали) з пдв:</strong>                         ${numberSeparator(array[i][7])} грн </pre>
  <pre><br></pre>`;
}



