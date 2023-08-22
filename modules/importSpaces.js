
// Количество пробелов

 
// Создаем временный canvas context
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Задаем шрифт и размер
const fontFamily = 'Arimo';
const fontSize = 12; // в пикселях

// Применяем шрифт и размер к контексту canvas
ctx.font = `${fontSize}px ${fontFamily}`;

// Получаем список символов украинского алфавита
const ukrainianAlphabet = ['А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х','X', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я',
'0','1','2','3','4','5','6','7','8','9', 'Ы','Ъ','/','*','-','+','=',' ','(',")",'.',',','!','?',':',';','%','"','',"'",'@','|','#','№'];

// Создаем объект для хранения ширины символов
const symbolWidths = {};

// Измеряем ширину каждого символа
ukrainianAlphabet.forEach(symbol => {
  const width = ctx.measureText(symbol).width;
  symbolWidths[symbol] = width;
});

export default function importSpaces(str, startNumber) {
    const str2=str.replace(/<[^>]*>/g, "").toUpperCase()

    
    let str2_Length = 0;
    
    for (let i = 0; i < str2.length; i++) {
    // Если символ строки есть в объекте сравнения, записываем соответствующее значение в результат
    if (str2[i] in symbolWidths) {
        str2_Length += symbolWidths[str2[i]];
        } else {
            str2_Length += symbolWidths[" "];
        }
    }
    const startSpaces = startNumber*symbolWidths[" "];

    //  Сколько же надо пробелов?
    let spaces = "";
    let length = (startSpaces - str2_Length)/symbolWidths[" "] ;
   
    for (let i = 0; i < length; i++) {
      spaces += " ";
    }
    spaces=(str2.length>=18)?spaces+" ":spaces;
    // console.log(str2,startNumber)
    return spaces;
};
