// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
let string = 'наслаждение';
const findSubStrings = (str, n) => {
  let res = []
  for (let i = 0; i < str.length / n; i++) {
    res.push(str.substring(i * n, (i + 1) * n));
  }
  return res
}
document.writeln(findSubStrings(string, 3));
console.log(findSubStrings(string, 3));
console.log('////');

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let str = 'Каждый! охотник желает знать';
const delete_characters = (str, n) => str.substring(0, n)
document.writeln('</br>', delete_characters(str, 7))
console.log(delete_characters(str, 7));
console.log('////');

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
str = "HTML JavaScript PHP";
const insert_dash = str => str.split(' ').join('-').toUpperCase()
console.log(insert_dash(str));
document.writeln('</br>', insert_dash(str))
console.log('////');

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
str = 'hello'
const firstLetterToUpper = str => str[0].toUpperCase() + str.slice(1)
console.log(firstLetterToUpper(str));
console.log('////');

//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let name = 'Harry__Potter'
const correctName = (str) => {
  res = str.split('')
    .filter(item =>
      item !== '.' && item !== '_' && item !== '-')
    .map(item =>
      item === item.toUpperCase() ? ' ' + item : item.concat('')
    )
  return res.join('').trim()
}

console.log(correctName(name));
console.log('////');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const random = length => {
  const numbers = []
  numbers.length = length
  let result = []
  for (let item of numbers) {
    item = (Math.floor(Math.random() * (0 + 100)) + 1)
    result.push(item)
  }
  return result
}

console.log(random(10));
console.log('////');

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(random(10).sort((a, b) => a - b));
console.log('////');

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
console.log(random(10).filter(item => item % 2 !== 1));
console.log('////');

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
string = 'hello dear'
const capitalize = (str) => str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
console.log(capitalize(string));
console.log('////');

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не менше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
const validator = str =>{
 const indexSnail = str.indexOf('@')
  const pointIndex = str.indexOf('.')
  if(str.includes('@')&& ((pointIndex-indexSnail) >=2)){
    return 'valid'
  }
  return 'invalid'
}
console.log(validator('someemail@gmail.com'));
console.log('////val');
//відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
  {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
  },
  {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'git',
      'java core',
      'java advanced']
  },
  {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'python core',
      'python advanced']
  },
  {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
  },
  {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
      'python',
      'java']
  },
  {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
  }
];
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length))
console.log('////');

//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
str = "Астрономия это наука о небесных объектах"
const count = (str, stringsearch) => str.split('').filter(item => item === stringsearch).length
document.writeln('</br>', count(str, 'а'))
console.log(count(str, 'а'));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
const cutString = (str, n) => {
  res = str.split(' ')
  res.length = n
  return res.join(' ')
}
document.writeln('</br>', cutString(str, 5))
console.log(cutString(str, 5));
console.log('////');

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
  {
    name: 'ewe',
    pages: 121,
    genres: ['sdsdsdsd', 'sdds'],
    authors: [
      'Roman'
    ]
  },
  {
    name: 'ew',
    pages: 12,
    genres: ['sdsdsdsd'],
    authors: [
      'Bohdan', 'Roman'
    ]
  },
  {
    name: 'e',
    pages: 1212,
    genres: ['sdsdsdsd', 'sdds'],
    authors: [
      'Bohdan', 'Roman'
    ]
  }, {
    name: 'ewewew',
    pages: 221,
    genres: ['sdsdsdsd', 'sdds', 'eewewe'],
    authors: [
      'Bohdan'
    ]
  },
  {
    name: 'ewew',
    pages: 21,
    genres: ['sdsdsdsd', 'sdds'],
    authors: [
      'Bohdan', 'Roman'
    ]
  }
]
// -знайти найбільшу книжку.
res = books.reduce((acc, next) => {
  return acc.pages > next.pages ? acc : next

})
console.log(res);
console.log('////');

// - знайти книжку/ки з найбільшою кількістю жанрів
res = books.reduce((acc, next) => {
  return acc.genres.length > next.genres.length ? acc : next

})
console.log(res);
console.log('////');
// - знайти книжку/ки з найдовшою назвою
res = books.reduce((acc, next) => {
  return acc.name.length > next.name.length ? acc : next

})
console.log(res);
console.log('////');
// - знайти книжку/ки які писали 2 автори
res = books.filter(item => item.authors.length === 2)
console.log(res);
console.log('////');
// - знайти книжку/ки які писав 1 автор
res = books.filter(item => item.authors.length === 1)
console.log(res);
console.log('////');
// - вісортувати книжки по кількості сторінок по зростанню
res = books.sort((a,b)=>a.pages - b.pages)
console.log(res);
console.log('////');
