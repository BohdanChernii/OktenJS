// // - Напишіть код,  котрий :
// // -- отримує текст з параграфа з id "content"
// const content = document.getElementById('content')
// console.log('Task1:', content.textContent);
// console.log('////');
//
// // -- отримує текст з блоку з id "rules"
// const rules = document.getElementById('rules')
// console.log('Task2:', rules.textContent);
// console.log('////');
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
// content.textContent = 'Task3'
// console.log('Task3:', content.textContent);
// console.log('////');
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
// rules.textContent = 'Task4'
// console.log('Task4:', rules.textContent);
// console.log('////');
//
// // -- змініть кожному елементу колір фону на червоний
// for (let item of document.body.children) {
//   item.style.background = 'red'
// }
// // -- змініть кожному елементу колір тексту на синій
// for (let item of document.body.children) {
//   item.style.color = 'blue'
// }
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(rules.classList);
// console.log('////');
//
// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
// const list = document.querySelectorAll('.fc_rules')
//
// // console.log(list.children);
// for (let item of list) {
//   item.style.background = 'green'
// }

//- є масив
let simpsons = [
  {
    name: 'Bart',
    surname: 'Simpson',
    age: 10,
    info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
    photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
  },
  {
    name: 'Homer',
    surname: 'Simpson',
    age: 40,
    info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
    photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
  },
  {
    name: 'Marge',
    surname: 'Simpson',
    age: 38,
    info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
  },
  {
    name: 'Lisa',
    surname: 'Simpson',
    age: 9,
    info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
  },
  {
    name: 'Maggie',
    surname: 'Simpson',
    age: 1,
    info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
  },
];

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let body = document.querySelector('body')
let familyMember
let name
let age
let info
simpsons.map(item => {
  familyMember = document.createElement('div')
  familyMember.className = 'member'
  name = document.createElement('h1')
  age = document.createElement('p')
  info = document.createElement('p')
  age.innerText = item.age
  name.innerText = item.name
  info.innerText = item.info
  body.appendChild(familyMember)
  familyMember.appendChild(name)
  familyMember.appendChild(age)
  familyMember.appendChild(info)
})

// Цикл в циклі
// - Є масив
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
let course = document.createElement('div')
course.className = 'courses'
body.appendChild(course)

let courseModule
let title
let monthDuration
let hourDuration
let modules
let moduleItem
coursesArray.map(item => {
  courseModule = document.createElement('div')

  courseModule.className = 'module'
  title = document.createElement('h1')
  title.innerText = item.title

  monthDuration = document.createElement('p')
  monthDuration.innerText = 'month duration: ' + item.monthDuration
  monthDuration.className = 'course-monthDuration'

  hourDuration = document.createElement('p')
  hourDuration.innerText = 'hour duration: ' + item.hourDuration
  hourDuration.className = 'course-hourDuration'

  courseModule.appendChild(title)
  courseModule.appendChild(monthDuration)
  courseModule.appendChild(hourDuration)
  item.modules.map(mod => {
    modules = document.createElement('ul')
    moduleItem = document.createElement('li')
    moduleItem.innerText = mod
    modules.appendChild(moduleItem)
    courseModule.appendChild(modules)
  })
  courseModule.className = 'course'
  course.appendChild(courseModule)
})

// - створити блок,
let block = document.createElement('div')

//- додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'alpha', 'beta', 'collapse')

//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.background = 'red'
block.style.color = 'blue'
block.style.width = '100px'
block.style.height = '100px'

//- додати цей блок в body.
body.appendChild(block)

// - клонувати його повністю, та додати клон в body.
let block2 = document.createElement('div')
block2.classList.add([...block.classList])
block2.style = block.style.cssText
block2.style.marginTop = '10px'
body.appendChild(block2)

// - Є масив:
let navigationList = ['Main', 'Products', 'About us', 'Contacts']
let navigation = document.querySelector('.menu')
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
for (let item of navigationList) {
  let listItem = document.createElement('li')
  listItem.innerText = item
  navigation.appendChild(listItem)
}

// - Є масив
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration.
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//   Завдання робити через цикли.
for (let course of coursesAndDurationArray) {
  let item = document.createElement('div')
  item.className = 'item'

  let title = document.createElement('h1')
  title.className = 'heading'
  title.innerText = course.title

  let description = document.createElement('p')
  description.className = 'description'
  description.innerText = course.monthDuration

  item.appendChild(title)
  item.appendChild(description)
  body.appendChild(item)
}

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let dynamic = document.createElement('div')
dynamic.innerText = 'HIDE'
body.appendChild(dynamic)
let button = document.createElement('button')
button.innerText = 'CLICK'
body.appendChild(button)

button.addEventListener('click', () => dynamic.style.display = 'none')

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let setAge = document.createElement('input')
let submitAge = document.createElement('button')
submitAge.innerText = 'AGE'
document.write('<br>')
body.appendChild(setAge)
body.appendChild(submitAge)
submitAge.addEventListener('click', () => {
  if (+setAge.value >= 18) {
    console.log('adult');
  } else if (+setAge.value < 18) {
    console.log('child');
  }
  setAge.value = ''
})

// Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
document.write('<hr>')
let form = document.createElement('form')
body.appendChild(form)

let setRows = document.createElement('input')
setRows.placeholder = 'set rows'
form.appendChild(setRows)
let rows = []


let setItem = document.createElement('input')
setItem.placeholder = 'set items'
form.appendChild(setItem)
let items = []


let itemContent = document.createElement('input')
itemContent.placeholder = 'item content'
form.appendChild(itemContent)

let createTable = document.createElement('button')
createTable.innerText = 'createTable'
form.appendChild(createTable)


let table = document.createElement('table')


createTable.addEventListener('click', (e) => {
  e.preventDefault()
  rows.length = +setRows.value
  items.length = +setItem.value

  for (let row of rows) {
    let tr = document.createElement('tr')
    table.appendChild(tr)
    for (let item of items) {
      let td = document.createElement('td')
      td.style.border = '1px red solid'
      table.appendChild(td)
      td.innerText = itemContent.value
    }

  }
})
body.appendChild(table)
