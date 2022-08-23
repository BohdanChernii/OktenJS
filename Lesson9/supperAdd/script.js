// - Сворити масив не цензцрних слів.
let fuck = ['піздец', 'блять', 'Росія', 'йобана']
//   Сворити інпут текстового типу.
let body = document.querySelector('body')
let input = document.createElement('input')
let submitFuck = document.createElement('button')
body.appendChild(submitFuck)
submitFuck.innerText = 'CLICK'
body.appendChild(input)
//   Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//   Перевірку робити при натисканні на кнопку
submitFuck.addEventListener("click", () => {
  if (fuck.includes(input.value)) {
    alert('МАТ')
  }
})
document.write('<hr>')

// - Сворити масив не цензцрних слів.
//   Сворити інпут текстового типу.
//   Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//   Перевірку робити при натисканні на кнопку
submitFuck.addEventListener("click", () => {
  for (let item of input.value.split(' ')) {
    if (fuck.includes(item)) {
      //   Кинути алерт з попередженням у випадку якщо містить.
      alert('МАТ')
    }
  }
})

// - Создайте меню, которое раскрывается/сворачивается при клике
let showHide = document.createElement('button')
showHide.innerText = 'SHOW/HIDE'

let navigationList = {nav: ['Home', 'About', 'Contacts'], status: true}
let navigation = document.createElement('ul')
for (let item of navigationList.nav) {
  let navigationItem = document.createElement('li')
  navigationItem.innerText = item
  navigation.appendChild(navigationItem)
}

showHide.addEventListener('click', () => {
  if (navigationList.status) {
    navigationList.status = !navigationList.status
    navigation.style.display = 'block'
  } else if (!navigationList.status) {
    navigationList.status = !navigationList.status
    navigation.style.display = 'none'
  }
})
body.appendChild(showHide)
body.appendChild(navigation)

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вывести список комментариев в документ, каждый в своем блоке.
//   Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = document.createElement('div')
let commentsList = [
  {title: 'lorem', body: 'lorem ipsum dolo sit ameti', status: true},
  {title: 'lorem', body: 'lorem ipsum dolo sit ameti', status: true},
  {title: 'lorem', body: 'lorem ipsum dolo sit ameti', status: true},
  {title: 'lorem', body: 'lorem ipsum dolo sit ameti', status: true},
  {title: 'lorem', body: 'lorem ipsum dolo sit ameti', status: true}
]
for (let item of commentsList) {
  let comment = document.createElement('div')
  let hideComment = document.createElement('button')
  hideComment.innerText = 'Close'
  comment.innerText = item.body
  comment.appendChild(hideComment)
  console.log(item.status);
  hideComment.addEventListener("click", () => {
    if (item.status) {
      item.status = false
      comment.style.display = 'none'
    }
    console.log(item.status);
  })

  if (item.status === true) {
    comments.appendChild(comment)
  }
}
body.appendChild(comments)
document.write('<hr>')

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let hide = document.createElement('button')
hide.innerText = 'HIDE'
hide.addEventListener('click', () => hide.style.display = 'none')
body.appendChild(hide)
document.write('<hr>')

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//   При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//   Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.addEventListener("click", (e)=>{
//   console.log(e.target,e.target.classList,e.target.id,e.target.style.width*e.target.style.height);
// })
// document.write('<hr>')

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//   При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//   Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// document.addEventListener("click", (e)=>{
//   let block = document.createElement('div')
//   block.innerText = `${e.target.tagName},${e.target.classList},${e.target.id},${e.target.style.width*e.target.style.height}`
//   body.appendChild(block)
// })
document.write('<hr>')

// -- взять массив пользователей
let usersWithAddress = [
  {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
  {id: 2, name: 'petya', age: 28, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
  {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
  {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
  {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
  {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
  {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
  {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
  {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
  {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
  {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для выше указаного массива. Фильтры могут работать как вместе так и по отдельности.

let res = []
let filterUsers = document.createElement('div')

let checkBox1 = document.createElement('input')
checkBox1.type = 'checkbox'
filterUsers.appendChild(checkBox1)

let checkBox2 = document.createElement('input')
checkBox2.type = 'checkbox'
filterUsers.appendChild(checkBox2)

let checkBox3 = document.createElement('input')
checkBox3.type = 'checkbox'
filterUsers.appendChild(checkBox3)

let buttonFilter = document.createElement('button')
buttonFilter.innerText = 'Filter'
filterUsers.appendChild(buttonFilter)
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
buttonFilter.addEventListener("click", () => {
  res = usersWithAddress.filter(item => (checkBox1.checked ? item.status === false : true) && (checkBox2.checked ? item.age > 29 : true) && (checkBox3.checked ? item.address.city === 'Kyiv' : true))
  for (let item of res) {
    let user = document.createElement('div')
    user.innerText = `${item.name} ${item.age} ${item.status} address: ${item.address.city},${item.address.street}, ${item.address.number}`
    filterUsers.appendChild(user)
  }
  res = []
})


// Данные выводить в документ

document.body.appendChild(filterUsers)

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//   Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let images = ['https://klike.net/uploads/posts/2019-05/1556708032_1.jpg', 'https://st4.depositphotos.com/1229718/24720/i/600/depositphotos_247203214-stock-photo-business-time-plan-concept-planning.jpg', 'https://st3.depositphotos.com/1658575/18194/i/600/depositphotos_181944202-stock-photo-hourglass-sunrise-outside.jpg', 'https://st3.depositphotos.com/13184338/18386/i/600/depositphotos_183864806-stock-photo-close-view-businessman-showing-money.jpg', 'https://st.depositphotos.com/1031174/1320/i/600/depositphotos_13200066-stock-photo-time-management.jpg']
let slider = document.createElement('div')
slider.className = 'slider'
let sliderContent = document.createElement('div')
sliderContent.className = 'slider__content'
let prevBtn = document.createElement('button')
prevBtn.innerText = '<'
prevBtn.className = 'prev'
slider.appendChild(prevBtn)
images.map(item => {
  let image = document.createElement('img')
  image.src = item
  sliderContent.appendChild(image)
})
slider.appendChild(sliderContent)
let nextBtn = document.createElement('button')
nextBtn.innerText = '>'
nextBtn.className = 'next'
slider.appendChild(nextBtn)
body.appendChild(slider)
let next = 0
let prev = 0
nextBtn.addEventListener("click", (e) => {

  if (next === images.length - 1) {
    next = -1
    sliderContent.style.marginLeft = '0px'
  }
  prevBtn.disabled = false
  next += 1
  sliderContent.style.marginLeft = next * (-200) + 'px'
})


prevBtn.addEventListener("click", (e) => {
  prev += 1
  sliderContent.style.marginLeft = ((images.length - prev) * (-200)) + 'px'
  if (prev === images.length) {
    prev = 0
  }
  if (next >= 0) {
    next -= 1
  }
  if (next < 0) {
    next += 1
  }
})

// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let focusBlock = document.createElement('p')
focusBlock.innerText = 'Focus Block'
body.appendChild(focusBlock)
function getText() {
  let selection
  if (document.getSelection) {
    selection = document.getSelection().toString();
    focusBlock.innerText = selection
    focusBlock.style.fontWeight = 'bold'
    console.log(selection);
  }
}

focusBlock.addEventListener('mouseup', getText)

