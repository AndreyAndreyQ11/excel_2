
// Количество пробелов

export default function importSpaces(str) {

    const startSpaces = 69;
    //
    const textLength = (() => {

        function countSpaces(inputString) {
            let spaceCount = 0;
            for (let i = 0; i < inputString.length; i++) {
                if (inputString[i] === ' ') {
                    spaceCount++;
                }
            }
            return spaceCount;
        }

        const strNumber=str.replace(/<[^>]*>/g, "").length
        return (strNumber*2-countSpaces(strNumber));
    })();
   
   



   //  Сколько же надо пробелов?
    let spaces = "";
    let length = startSpaces - textLength ;
   
    for (let i = 0; i < length; i++) {
      spaces += " ";
    }
    return spaces;
};

 