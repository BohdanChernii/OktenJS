// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
const toDo = ['eat', 'sleep', 'study', 'pupping', 'go to gym', 'drink coffee', 'visit lection', 'do homework', 'repeat']

for (let i = 0; i <= toDo.length; i++) {
  document.write(`<div>${toDo[i]}</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write('<hr/>')
for (let i = 0; i <= toDo.length; i++) {
  document.write(`<div>${i} ${toDo[i]}</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0
while (i < toDo.length) {
  document.write(`<h1>${toDo[i]}</h1>`)
  i++
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write('<hr/>')
let x = 0
while (x < toDo.length) {
  document.write(`<h1>${x}. ${toDo[x]}</h1>`)
  x++
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<hr/>')
for (let listItem of listOfItems) {
  document.write(`
  <ol>
    <li>
      ${listItem}
    </li>
  </ol>`)
}

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
document.write('<hr/>')
let products = [
  {
    title: 'milk',
    price: 22,
    image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
  },
  {
    title: 'juice',
    price: 27,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
  },
  {
    title: 'tomato',
    price: 47,
    image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
  },
  {
    title: 'tea',
    price: 15,
    image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
  },
];
for (let product of products) {
  document.write(`
   <div class="product-card">
        <h3 class="product-title">Title - ${product.title}. Price - ${product.price}</h3>
        <img src= ${product.image} alt="" class="product-image">
   </div>`)
}

// є масив
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
// за допомоги циклу вивести:
//   - користувачів зі статусом true
document.write('<hr/>')
for (let user of users) {
  if (user.status) {
    document.write(`<div>Name:${user.name} Age:${user.age}</div>`)
  }
}
document.write('<hr/>')
// - користувачів зі статусом false
for (let user of users) {
  if (!user.status) {
    document.write(`<div>Name:${user.name} Age:${user.age}</div>`)
  }
}
// - користувачів які старші за 30 років
document.write('<hr/>')
for (let user of users) {
  if (user.age > 30) {
    document.write(`<div>Name:${user.name} Age:${user.age}</div>`)
  }
}