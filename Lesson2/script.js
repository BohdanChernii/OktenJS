const array = ['Vasyl', 'Andriy', 'Bohdan', 'Roman', 'Uriy', 12, 31, 21, 11, 5]
for (let i = 0; i <= array.length; i++) {
  console.log(array[i])
}
const gameOfThrones = {
  title: 'a song of ice and fire',
  genre: 'epic fantasy',
  pageCount: 1500,
}
const bible = {
  title: 'Holy Bible',
  genre: 'documentary',
  pageCount: 2000,
}
const jsForChildren = {
  title: 'JavaScript For Children',
  genre: 'educational',
  pageCount: 368,
}

gameOfThrones.authors = [
  {
    name: 'George Martin',
    age: 73,
  },
  {
    name: 'Phyllis Eisenstein',
    age: 74,
  }
]
bible.authors = [
  {
    name: 'Solomon',
    age: 33,
  },
  {
    name: 'David',
    age: 60,
  }
]
jsForChildren.authors = [
  {
    name: 'Nick Morgan',
    age: 69,
  }
]
const users = [
  {
    name: 'Bohdan',
    userName: 'Bohdan',
    password:12345678,
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

  users.forEach((item)=>{
  console.log(item.password)
})
// console.log(users[0].password)
