// Зробити свій розпорядок дня.
//
//   У вас має бути більше 10 асинхронних дій з рандомними затримками.
//   Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//   Напиклад.
//   Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі

//через than/catch
// function haveABreakfast(done){
//   return new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//       if(done){
//         resolve('great you have ate');
//       }else{
//         reject('go to eat')
//       }
//     },Math.random()*1000)
//   })
// }
//
// function study(done){
//   return new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//       if(done){
//         resolve('great student');
//       }else{
//         reject('come to study')
//       }
//     },Math.random()*1000)
//   })
// }
//
// function watchEventLoop(done){
//   return new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//       if(done){
//         resolve('great you are Event Loop huru');
//       }else{
//         reject('come to learn Event Loop')
//       }
//     },Math.random()*1000)
//   })
// }
//
//
// function goToGym(done){
//   return new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//       if(done){
//         resolve('great you are machine');
//       }else{
//         reject('go to gym slave')
//       }
//     },Math.random()*1000)
//   })
// }
//
// function haveADiner(done){
//   return new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//       if(done){
//         resolve('great you ate');
//       }else{
//         reject('go to eat diner')
//       }
//     },Math.random()*1000)
//   })
// }
// haveABreakfast(true).then(done=>{
//   console.log(done)
//   return study(done)
// }).then(done=>{
//   console.log(done);
//   return  watchEventLoop(done)
// }).then(done=>{
//   console.log(done);
//   return goToGym(done)
// }).then(done=>{
//   console.log(done);
//   return haveADiner(done)
// }).then(done=> console.log(done)).catch(reason => {
//   console.log(reason);
// })
//через callback hell
function haveABreakfast(isDone, cb) {
  setTimeout(() => {
    if (isDone) {
      cb(null, 'great you have eat your breakfast')
    } else {
      cb('Eat your breakfast')
    }
  }, Math.random() * 1000)
}

function study(isDone, cb) {
  setTimeout(() => {
    if (isDone) {
      cb(null, 'great student')
    } else {
      cb('Go to study')
    }
  }, Math.random() * 1000)
}

function watchEventLoop(isDone, cb) {
  setTimeout(() => {
    if (isDone) {
      cb(null, 'you have watch the Event Loop ')
    } else {
      cb('come to learn Event Loop')
    }
  }, Math.random() * 1000)
}

function goToGym(isDone, cb) {
  setTimeout(() => {
    if (isDone) {
      cb(null, 'great you are machine');
    } else {
      cbt('go to gym slave')
    }
  }, Math.random() * 1000)

}

function haveADiner(isDone, cb) {
  setTimeout(() => {
    if (isDone) {
      cb(null, 'great you ate diner');
    } else {
      cb('go to eat diner')
    }
  }, Math.random() * 1000)
}

haveABreakfast(true, (err, message) => {
  if (err) {
    console.log(err);
  } else {
    console.log(message);
    study(true, (err, message) => {
      if (err) {
        console.log(err);
      } else {
        console.log(message);
        watchEventLoop(true, (err, message) => {
          if (err) {
            console.log(err);
          } else {
            console.log(message);
            goToGym(true, (err, message) => {
              if (err) {
                console.log(err);
              } else {
                console.log(message);
                haveADiner(true, (err, message) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log(message);
                  }
                })
              }
            })
          }
        })
      }
    })
  }
})

//// Реалізувати друкарську машинку.
//   У вас є текст "Hello World".
//   Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//   КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//   Цим самим ви маєте симулювати написання даного тексту юзером.
//   Приклад: "Hello"
// Затримки:
//   H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
let string = 'Hello world'
let block = document.createElement('pre')
document.body.appendChild(block)
const setIntervalItems = (leter) => {
  return new Promise(resolve => {
    setTimeout(() => {
      block.innerText += leter
      resolve()
    }, Math.random() * 1000)
  })
}

async function wait(str) {
  for (let item of str) {
    await setIntervalItems(item)
  }
}

wait(string)
// є масив -
let users = [
  {name: 'vasya', age: 31, status: false},
  {name: 'petya', age: 30, status: true},
  {name: 'kolya', age: 29, status: true},
  {name: 'olya', age: 28, status: false},
  {name: 'max', age: 30, status: true},
  {name: 'anya', age: 31, status: false},
  {name: 'oleg', age: 28, status: false},
  {name: 'andrey', age: 29, status: true},
  {name: 'masha', age: 30, status: true},
  {name: 'olya', age: 31, status: false},
  {name: 'max', age: 31, status: true}
];

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let favourites = []
users.map(item => {
  let user = document.createElement('div')
  let name = document.createElement('p')
  name.innerText = item.name + ' - ' + item.age
  let addToFavourites = document.createElement('button')
  addToFavourites.innerText = 'Add To Favourites'
  addToFavourites.addEventListener("click", () => {
    item.status = true
    addToFavourites.disabled = true
    if (item.status) {
      favourites.push(item)
      localStorage.setItem('favourite', JSON.stringify(favourites))
    }

  })
  user.append(name, addToFavourites)
  document.body.appendChild(user)
})
const link = document.createElement('a')
link.setAttribute('href', 'favourites.html')
link.innerText = 'Favourites'
document.body.appendChild(link)
document.write('<br>')

// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
let clock = () => {
  for (let min = 0; min < 2; min++) {
    setTimeout(() => {
      for (let sec = 1; sec < 60; sec++) {
        setTimeout(() => {
          console.log(min,sec);
        }, 1000 * sec)
      }
    }, 60000 * min)
  }
}

clock()
// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)


// Дано відсортований масив (мінімум 10 елементів)
// Необхідно модифікувати масив так, що б дублікати зустрічалися не більше 2х разів підряд.
//
//   Example:
// [1, 1, 1, 2, 3, 3, 3, 3] -> [ 1, 1, 2, 3, 3, 1, 3, 3]
//
//   [0, 0, 1, 1, 1, 2, 2] -> [0, 0, 1, 1, 2, 2, 1]
//
// ____________________________________________________________
//
// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//   3275  —>  "3000 + 200 + 70 +5"
//
// ____________________________________________________________
//
// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз
//   [1,2,3,4,5,2,4,1,3] -> 5
//
// _____________________________________________________________
//
// Знайти анаграму.
//   Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
//   ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true
//
// _______________________________________________________________
//
// Точная степень двойки
// Дано натуральное число N.
//   Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
//   Операцией возведения в степень пользоваться нельзя!
//
//   ______________________________________________________________
//
// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//   При решении этой задачи нельзя использовать строки,
//   списки, массивы ну и циклы, разумеется.
//   Рекурсія)
//
// ______________________________________________________________
//
// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
//   При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.
//
// _______________________________________________________________
//
// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3
//
// _________________________________________________________________
//
// Вирівняти багаторівневий масив в однорівневий
//   [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.

//   ___________________________________________________________________
//
// Знайти набільший елемент в масиві за допомогою reduce
//   [1,6,9,0,17,88,4,7] -> 88
let max = [1, 6, 9, 0, 17, 88, 4, 7].reduce((acc, val) => acc > val ? acc : val)
console.log(max);
// ____________________________________________________________________
//
//
// Отримати масив лише унікальних значень за допомогою reduce
//   [1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]

let unique = [1, 9, 0, 1, 5, 9, 1, 6].reduce((acc, val) =>
    acc.find((item) => item === val) ? acc : [...acc, val]
  , []
)
console.log(unique);


// ____________________________________________________________________
// Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих пятизначних чисел.
//
//   ____________________________________________________________________
//
