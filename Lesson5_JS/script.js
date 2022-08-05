// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const square = (a, b) => a * b
let res = square(5, 10)
console.log(res);
console.log('////');

//- створити функцію яка обчислює та повертає площу кола з радіусом r
const circleArea = r => 3.14 * Math.pow(r, 2)
res = circleArea(5)
console.log(res);
console.log('////');

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinderArea = (h, r) => 2 * Math.PI * r * h
res = cylinderArea(10, 5)
console.log(res);
console.log('////');

//- створити функцію яка приймає масив та виводить кожен його елемент
const showArrayItems = arr => {
  console.log(...arr)
}
showArrayItems([1, 2, 3, 4, 5, 6])
console.log('////');

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
  document.write(`<p>${text}</p>`)
  return text
}

res = createParagraph('Hello')
console.log(res);
console.log('////');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text) {
  document.write(`
  <ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
  </ul>`)
  return text
}

res = createList('world')
console.log(res);
console.log('////')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createListByLoop(text, value) {
  document.write('<ul>')
  for (let i = 0; i < value; i++) {
    document.write(`<li>${text}</li>`)
  }
  document.write('</ul>')
  return `Text: ${text}, Value: ${value}`
}

res = createListByLoop('item', 3)
console.log(res);
console.log('////')

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const createListt = (val,arr) => [val,...arr]

res = createListt('Bohdan',[1,5,'hello', false,100,'xt',true])
console.log(res);
console.log('////')

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
  {id: 1, name: 'User', age: 21},
  {id: 1, name: 'User', age: 21},
  {id: 1, name: 'User', age: 21}
]
const showUsers = users => {
  for (let user of users) {
    document.write(`
<div>
  <p>${user.id}</p>
  <p>${user.name}</p>
  <p>${user.age}</p>
</div>`)
  }
  return users
}

res = showUsers(users)
console.log(res);
console.log('////')

//- створити функцію яка повертає найменьше число з масиву
const numbers = [2, 4, 10, 1, 2, 5]

// function getMinValue(arr) {
//   return Math.min(...arr)
// }

function getMinValue(arr) {
  let min = arr[0]
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

console.log(getMinValue(numbers));
console.log('////')

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sum(arr) {
  let value = 0
  for (let i = 0; i < arr.length; i++) {
    value += arr[i]
  }
  return value
}

res = sum([1, 2, 4, 1])
console.log(res);