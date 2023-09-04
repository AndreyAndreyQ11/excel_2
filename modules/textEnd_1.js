// концовка стоимости склада
import numberSeparator from "./numberSeparator.js";

export default function textEnd_1(array) {

  // Проверка на наличие логистики
  const logistics = ()=>{
    if (array.length > 11){
      return `<pre><strong>Логістичні послуги з доставки ферм до об'єкту</strong></pre>
      <pre>${numberSeparator(array[9])} грн</pre>`
    }else{
      return ""
    }
  }


  return `<pre><strong>витратні матеріали (грунтовка, електроди, і т.д.)</strong></pre>
        <pre>${numberSeparator(array[4])} грн</pre>
        ${logistics(array)}
        <pre><br></pre>
        <pre><br></pre>
        <pre><strong>площа забудови:</strong>                                                                                       ${numberSeparator(
          array[5]
        )} м2</pre>
        <pre><strong>орієнтована підсумкова вартість матеріалів з пдв: </strong>                  ${numberSeparator(
          array[6]
        )} грн</pre>
        <pre><strong>вартість робіт зі зведення складу з пдв:</strong>                                         ${numberSeparator(
          array[7]
        )} грн</pre>
        <pre><br></pre>
        <pre><strong>підсумкова вартість будівництва (роботи+матеріали) з пдв:</strong>  ${numberSeparator(
          array[8]
        )} грн</pre>
        <pre><br></pre>`;
}
