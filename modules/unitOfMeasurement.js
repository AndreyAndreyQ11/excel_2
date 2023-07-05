//
export default function convector(item) {
  const unitOfMeasurement = {
    Арматура: ["ГРН/М.П.", `М.П. * ${item[1]} =`],
    Анкера: ["ГРН/К.", `К. * ${item[1]} =`],
    Бетон: ["ГРН/М3", `М3 * ${item[1]} =`],
    ЛИСТОВИЙ: ["ГРН/ШТ", `ШТ * ${item[1]} =`],
    РЕБРА: ["ГРН/ШТ", `ШТ * ${item[1]} =`],
    ТРУБА: ["ГРН/М.П.", `М.П. * ${item[1]} =`],
    Болт: ["ГРН/К.", `К. * ${item[1]} =`],
    ШВЕЛЕР: ["ГРН/М.П.", `М.П. * ${item[1]} =`],
    СТРІЧКА: ["ГРН/М.П.", `М.П. * ${item[1]} =`],
    "60-05": ["ГРН/М2", `М2 * ${item[1]} =`],
    "20-045": ["ГРН/М2", `М2 * ${item[1]} =`],
    СТРІЧКА: ["ГРН/М.П.", `М.П. * ${item[1]} =`],
    Фурнітура: ["ГРН/ШТ", `ШТ * ${item[1]} =`],
    Автоматична: ["ГРН/ШТ", `ШТ * ${item[1]} =`],
    ПО: ["ГРН/ШТ", `ШТ * ${item[1]} =`],
    ВІТРОВА: ["ГРН/ШТ", `ШТ * ${item[1]} =`],
    "П-ПЛАНКА": ["ГРН/ШТ", `ШТ * ${item[1]} =`],
    КОНЬКОВА: ["ГРН/ШТ", `ШТ * ${item[1]} =`],
    ТОРЦЕВА: ["ГРН/ШТ", `ШТ * ${item[1]} =`],
    ПЛАНКА: ["ГРН/ШТ", `ШТ * ${item[1]} =`],
    ПОЛІКАРБОНАТ: ["ГРН/М.П.", `М.П. * ${item[1]} =`],
    "ЛИСТОВИЙ ПРОКАТ ММ": ["ГРН/М.П.", `М.П. * ${item[1]} =`],
  };

  function extractSubstring(str) {
    if (
      str.replace(/[0-9]/g, "").trim().toLowerCase() ==
      "ЛИСТОВИЙ ПРОКАТ ММ".toLowerCase()
    ) {
      return str.replace(/[0-9]/g, "").trim();
    }
    if (str.indexOf(" ") !== -1) {
      return str.substring(0, str.indexOf(" "));
    } else {
      return str;
    }
  }
  //

  for (const key in unitOfMeasurement) {
    if (key.toLowerCase() == extractSubstring(String(item[0])).toLowerCase()) {
      return [...item, ...unitOfMeasurement[key]];
    }
  }
  return [...item, ...["\\\\\\", `\\\\\\ * ${item[1]} =`]];
}
