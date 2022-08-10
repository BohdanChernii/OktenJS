// - Знайти та вивести довижину настипних стрінгових значень
let string = 'hello world, lorem ipsum, javascript is cool'
let res = string.split(', ')
res.forEach(item => console.log(item.length))
console.log('////');
// - Перевести до великого регістру наступні стрінгові значення
res.forEach(item => console.log(item.toUpperCase()))
console.log('////');
// - Перевести до нижнього регістру настипні стрінгові значення
let stringToLower = 'HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL'
res = stringToLower.split(', ')
res.forEach(item => console.log(item.toLowerCase()))
console.log('////');
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '.trim()
console.log(str);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
str = 'Ревуть воли як ясла повні';
const stringToArr = str => {
  let result = []
  str.split().forEach(item => result.push(item))
  return result
}
console.log(stringToArr(str));
console.log('////');
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
res = numbers.map(item => item + '')
console.log(res);
console.log('////');
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
const sortNumbers = (arr, type) => {
  if (type === 'ascending') {
    return arr.sort((a, b) => a - b)
  }
  return arr.sort((a, b) => b - a)
}
console.log(sortNumbers(numbers, 'ascending'));
console.log('////');
//-- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration))
console.log('////');
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5))
console.log('////');
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
let cards = [
  {cardSuit: 'clubs', value: 'Ace', color: 'black'},
  {cardSuit: 'clubs', value: 2, color: 'black'},
  {cardSuit: 'clubs', value: 3, color: 'black'},
  {cardSuit: 'clubs', value: 4, color: 'black'},
  {cardSuit: 'clubs', value: 5, color: 'black'},
  {cardSuit: 'clubs', value: 6, color: 'black'},
  {cardSuit: 'clubs', value: 7, color: 'black'},
  {cardSuit: 'clubs', value: 8, color: 'black'},
  {cardSuit: 'clubs', value: 9, color: 'black'},
  {cardSuit: 'clubs', value: 10, color: 'black'},
  {cardSuit: 'clubs', value: 'Jack', color: 'black'},
  {cardSuit: 'clubs', value: 'Queen', color: 'black'},
  {cardSuit: 'clubs', value: 'King', color: 'black'},

  {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
  {cardSuit: 'diamonds', value: 2, color: 'red'},
  {cardSuit: 'diamonds', value: 3, color: 'red'},
  {cardSuit: 'diamonds', value: 4, color: 'red'},
  {cardSuit: 'diamonds', value: 5, color: 'red'},
  {cardSuit: 'diamonds', value: 6, color: 'red'},
  {cardSuit: 'diamonds', value: 7, color: 'red'},
  {cardSuit: 'diamonds', value: 8, color: 'red'},
  {cardSuit: 'diamonds', value: 9, color: 'red'},
  {cardSuit: 'diamonds', value: 10, color: 'red'},
  {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
  {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
  {cardSuit: 'diamonds', value: 'King', color: 'red'},

  {cardSuit: 'hearts', value: 'Ace', color: 'red'},
  {cardSuit: 'hearts', value: 2, color: 'red'},
  {cardSuit: 'hearts', value: 3, color: 'red'},
  {cardSuit: 'hearts', value: 4, color: 'red'},
  {cardSuit: 'hearts', value: 5, color: 'red'},
  {cardSuit: 'hearts', value: 6, color: 'red'},
  {cardSuit: 'hearts', value: 7, color: 'red'},
  {cardSuit: 'hearts', value: 8, color: 'red'},
  {cardSuit: 'hearts', value: 9, color: 'red'},
  {cardSuit: 'hearts', value: 10, color: 'red'},
  {cardSuit: 'hearts', value: 'Jack', color: 'red'},
  {cardSuit: 'hearts', value: 'Queen', color: 'red'},
  {cardSuit: 'hearts', value: 'King', color: 'red'},
  {value: 'Joker', color: 'red'},

  {cardSuit: 'spades', value: 'Ace', color: 'black'},
  {cardSuit: 'spades', value: 2, color: 'black'},
  {cardSuit: 'spades', value: 3, color: 'black'},
  {cardSuit: 'spades', value: 4, color: 'black'},
  {cardSuit: 'spades', value: 5, color: 'black'},
  {cardSuit: 'spades', value: 6, color: 'black'},
  {cardSuit: 'spades', value: 7, color: 'black'},
  {cardSuit: 'spades', value: 8, color: 'black'},
  {cardSuit: 'spades', value: 9, color: 'black'},
  {cardSuit: 'spades', value: 10, color: 'black'},
  {cardSuit: 'spades', value: 'Jack', color: 'black'},
  {cardSuit: 'spades', value: 'Queen', color: 'black'},
  {cardSuit: 'spades', value: 'King', color: 'black'},
  {value: 'Joker', color: 'black'},

]
res = cards.reduce((acc, item) => {
  if (item.cardSuit === 'spades' && item.value === 'Ace') {
    acc.push(item)
  } else if (item.value === 6) {
    acc.push(item)
  } else if (item.color === 'red') {
    acc.push(item)
  } else if (item.cardSuit === 'diamonds') {
    acc.push(item)
  } else if (item.cardSuit === 'clubs' && (item.value > 9 || item.value === 'Jack' || item.value === 'Queen' || item.value === 'King')) {
    acc.push(item)
  }
  return acc
}, [])
console.log(res);
console.log('////');

res = cards.reduce((acc, item) => {
  switch (item.cardSuit) {
    case 'clubs':
      acc.clubs.push(item)
      break
    case 'diamonds':
      acc.diamonds.push(item)
      break
    case 'spades':
      acc.spades.push(item)
      break
    case 'hearts':
      acc.hearts.push(item)
      break
    default:
      acc.jokers.push(item)
  }
  return acc
}, {spades: [], diamonds: [], hearts: [], clubs: [], jokers: []})
console.log(res);