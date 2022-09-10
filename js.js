/*
function f5() {
  let randomNumberFive = Math.round(Math.random() * (5 - 1) + 1);
  return randomNumberFive;
}

function f7() {
  let getRandomFive = f5();
  let randomNumberSeven = Math.round((getRandomFive * 7) / 5);
  return console.log(randomNumberSeven);
}

f7();
*/

// ---------------------------------------------



const inpRef = document.querySelector("input");
const answerRef = document.querySelector("span");
inpRef.addEventListener("input", onInput);

let str;
function onInput(event) {
  str = event.currentTarget.value;
  answerRef.textContent = makeCheckBracket(str);
}

/*
Есть классическая задача.
Задача следующая, написать код, который проверяет, верно ли расставлены скобки в выражении т.е.
("(5+5)/[4+4]*{2*2}" - True, "(3+[2*3)]" - False .
*/

const makeCheckBracket = function (str) {
  // made array from string
  const arrayFromString = str.split("");
  // made our stack
  const myStack = [];

  const open = ["{", "(", "["];
  const close = ["}", ")", "]"];
  let closeIndex;
  let openIndex;
  // Find a bracket in our array (arrayFromString)
  // and push this index (from variable 'open' or 'close') onto the our stack('myStack')
  for (let i = 0; i < arrayFromString.length; i += 1) {
    openIndex = open.indexOf(arrayFromString[i]);
    if (openIndex !== -1) {
      myStack.push(openIndex); //если находим openIndex, то пушим его в наш стек последним єлементом
      continue;
    }

    closeIndex = close.indexOf(arrayFromString[i]);
    if (closeIndex !== -1) {
      openIndex = myStack.pop(); // если находим closeIndex, то сравниваем его с последним єлементом стека

      if (closeIndex !== openIndex) {
        return false;
      }
    }
  }
  if (myStack.length !== 0) {
    // проверяем количество отк. и закр. скобок
    return false;
  }
  return true;
};
