//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const array = ['Vasyl', 'Andriy', 'Bohdan', 'Roman', 'Uriy', 12, 31, 21, 11, 5]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])
console.log(array[7])
console.log(array[8])
console.log(array[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

const gameOfThrones = {
  title: 'a song of ice and fire',
  genre: 'epic fantasy',
  pageCount: 1500,
  authors: [
    {
      name: 'George Martin',
      age: 73,
    },
    {
      name: 'Phyllis Eisenstein',
      age: 74,
    }
  ]
}
const bible = {
  title: 'Holy Bible',
  genre: 'documentary',
  pageCount: 2000,
  authors: [
    {
      name: 'Solomon',
      age: 33,
    },
    {
      name: 'David',
      age: 60,
    }
  ]
}
const jsForChildren = {
  title: 'JavaScript For Children',
  genre: 'educational',
  pageCount: 368,
  authors: [
    {
      name: 'Nick Morgan',
      age: 69,
    }
  ]
}

  // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


const users = [
  {
    name: 'Bohdan',
    userName: 'Bohdan',
    password: 12345678,
    age: 21,
  },
  {
    name: 'Bohdan',
    userName: 'Bohdan',
    password: 'qwertyuiop',
    age: 21,
  },
  {
    name: 'Bohdan',
    userName: 'Bohdan',
    password: '01.06.2001',
    age: 21,
  },
  {
    name: 'Bohdan',
    userName: 'Bohdan',
    password: 'ewewewewe',
    age: 21,
  },
  {
    name: 'Bohdan',
    userName: 'Bohdan',
    password: 'kmpvdpbmdpbmdp',
    age: 21,
  },
  {
    name: 'Bohdan',
    userName: 'Bohdan',
    password: 'password',
    age: 21,
  },
  {
    name: 'Bohdan',
    userName: 'Bohdan',
    password: 'nkbkbkbdlk;p',
    age: 21,
  },
  {
    name: 'Bohdan',
    userName: 'Bohdan',
    password: '121wfgb3v3',
    age: 21,
  },
  {
    name: 'Bohdan',
    userName: 'Bohdan',
    password: 'gggt432rtvv',
    age: 21,
  },
  {
    name: 'Bohdan',
    userName: 'Bohdan',
    password: 'gfgg432e43',
    age: 21,
  }
]

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
