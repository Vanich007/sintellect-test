// Черепашке нужно забраться на вершину холма. Расстояние от подножия холма до его вершины - 100м. Черепашка за день залезает вверх по холму на 50м. Ночью она спит и скатывается на 30м вниз. На какие сутки черепашка залезет на столб? Требуется написать код на JS для решения задачи и дать отве

const TARGET_HEIGHT = 100;
const STEP_UP = 50;
const STEP_DOWN = 30;

const countDays = (targetHeight) => {
  let turtleHeight = 0;
  let days = 0;
  while (turtleHeight < targetHeight) {
    days += 1;
    turtleHeight += STEP_UP;
    if (turtleHeight >= targetHeight) break;
    turtleHeight -= STEP_DOWN;
  }
  return days;
};

console.log(countDays(TARGET_HEIGHT));

// В комнате находится человек. Через какое-то время в комнату заходит еще один человек и здоровается с первым. Людей в комнате становится 2, а счетчик рукопожатий становится равен 1. Через какое-то время заходит еще один человек и здоровается с другими людьми в комнате. Людей в комнате - 3 и счетчик рукопожатий - 3. И т.д. Требуется написать код на JS для подсчета кол-ва рукопожатий для 10 человек и дать ответ.

const PEOPLE_COUNT = 10;

const countHandShakes = (peopleCount) => {
  let handShakesCount = 0;
  for (let i = 1; i <= peopleCount - 1; i++) {
    handShakesCount += i;
  }
  return handShakesCount;
};

console.log(countHandShakes(PEOPLE_COUNT));

// Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка..."). Известно, что в строке встречаются повторяющиеся слова. Нужно написать функцию на JS. На вход передаются строка с дублями, а на выходе мы получаем строку без дублей.

const STR = "Hello,world,Hello,world,Hello,world,Hello,world,онн";
const filterString = (str) => Array.from(new Set(str.split(","))).join(",");
console.log(filterString(STR));
