class User {
  constructor(id, name, username, email, address, phone, website, company) {
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this.address = address
    this.phone = phone
    this.website = website
    this.company = company
  }
}

// const email = {
//   street: 'Kulas Light', suite: 'Apt. 556',
//   city: 'Gwenborough',
//   zipcode: '92998-3874',
//   geo: {
//     lat: '-37.3159',
//     lng: '81.1496'
//   }
// }
const company = {
  name: 'Romaguera-Crona',
  catchPhrase: 'Multi-layered client-server neural-net',
  bs: 'harness real-time e-markets'
}
let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', {
  street: 'Kulas Light',
  suite: 'Apt. 556',
  city: 'Gwenborough',
  zipcode: '92998-3874',
  geo: {lat: '-37.3159', lng: '81.1496'}
}, '1-770-736-8031 x56442', 'hildegard.org', {
  name: 'Romaguera-Crona',
  catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'
})
console.log(user);
user = new User(2, 'Leanne Graham', 'Bret', 'Sincere@april.biz', {
  street: 'Kulas Light',
  suite: 'Apt. 556',
  city: 'Gwenborough',
  zipcode: '92998-3874',
  geo: {lat: '-37.3159', lng: '81.1496'}
}, '1-770-736-8031 x56442', 'hildegard.org', {
  name: 'Romaguera-Crona',
  catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'
})
console.log(user);
user = new User(3, 'Leanne Graham', 'Bret', 'Sincere@april.biz', {
  street: 'Kulas Light',
  suite: 'Apt. 556',
  city: 'Gwenborough',
  zipcode: '92998-3874',
  geo: {lat: '-37.3159', lng: '81.1496'}
}, '1-770-736-8031 x56442', 'hildegard.org', {
  name: 'Romaguera-Crona',
  catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'
})
console.log(user);
user = new User(4, 'Leanne Graham', 'Bret', 'Sincere@april.biz', {
  street: 'Kulas Light',
  suite: 'Apt. 556',
  city: 'Gwenborough',
  zipcode: '92998-3874',
  geo: {lat: '-37.3159', lng: '81.1496'}
}, '1-770-736-8031 x56442', 'hildegard.org', {
  name: 'Romaguera-Crona',
  catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'
})
console.log(user);

function Teg(name, description, atributeOneName, atributeOneDescription, atributeTwoName, atributeTwoDescription, atributeThreeName, atributeThreeDescription) {
  this.name = name
  this.description = description
  this.atributes = [
    {
      atributeOneName,
      atributeOneDescription
    },
    {
      atributeTwoName,
      atributeTwoDescription
    },
    {
      atributeThreeName,
      atributeThreeDescription
    }
  ]
}

const tegA = new Teg('<a>', 'link teg', 'href', 'Задает адрес документа, на который следует перейти.', 'name', 'Устанавливает имя якоря внутри документа.', 'target', 'Имя окна или фрейма, куда браузер будет загружать документ.')
console.log(tegA);
const tegDiv = new Teg('<div>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого','align','Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.','','')
console.log(tegDiv);