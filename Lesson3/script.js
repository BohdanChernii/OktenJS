// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
if (x != 0) {
  console.log('Вірно')
} else {
  console.log('Не вірно')
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let minute = 50;

if (minute <= 15) {
  console.log('first quote')
} else if (minute <= 30) {
  console.log('second quote')
} else if (minute <= 45) {
  console.log('third quote')
} else if (minute <= 59 && minute < 60) {
  console.log('forth quote')
} else {
  console.log('next hour')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 21

if (day <= 10) {
  console.log('first part')
} else if (day <= 20) {
  console.log('second part')
} else if (day <= 31) {
  console.log('third part')
} else {
  console.log('next month')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekDay = 'Tuesday';

switch (weekDay) {
  case 'Monday':
    console.log('Monday')
    break
  case 'Tuesday':
    console.log('Tuesday')
    break
  case 'Wednesday':
    console.log('Wednesday')
    break
  case 'Thursday':
    console.log('Thursday')
    break
  case 'Friday':
    console.log('Friday')
    break
  case 'Saturday':
    console.log('Saturday')
    break
  case 'Sunday':
    console.log('Sunday')
    break
}

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

const firsValue = +prompt('Type first number')
const second = +prompt('Type second number')
if (firsValue === second) {
  console.log('the same values')
} else {
  console.log(Math.max(firsValue, second))
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x1 = null;
if (!x1) {
  x1 = false || 'default'
  console.log(x1)
} else {
  console.log(x1)
}