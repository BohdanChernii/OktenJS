// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
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

//-  Створити функцію конструктор / клас  який описує об'єкт тегу
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
const tegDiv = new Teg('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', 'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.', '', '')
console.log(tegDiv);


//допка на замикання клас дати я не чіпав

const userCard = (key, balance = 100, transactionLimit = 100, historyLogs = []) => {

  return {
    ['balance']: balance,
    ['transactionLimit']: transactionLimit,
    ['historyLogs']: historyLogs,

    putCredits(credits) {
      balance += credits
      historyLogs.push(
        {operationType: 'Received credits', credits: credits, operationTime: new Date})
    },
    takeCred(take) {
      if (balance >= take && transactionLimit >= take) {
        balance -= take
        historyLogs.push(
          {operationType: 'Withdrawal of credits', credits: take, operationTime: new Date})
      } else console.error('not much money')

    },
    setTransactionLimit(limit) {
      transactionLimit = limit
      historyLogs.push(
        {operationType: 'Transaction limit change', credits: limit, operationTime: new Date})
    },
    transferCredits(credits, user) {
      if (((balance - credits) - (credits / 100 / 2)) >= credits && credits <= transactionLimit) {
        balance = (balance - credits) - (credits / 100 / 2)
        user.putCredits(credits)
      } else console.error('not much money for transferCredits')
    },
    getCardOptions() {
      return {key: key, balance, transactionLimit, historyLogs}
    },
  }
}
// let transaction1 = userCard(1)
// transaction1.putCredits(100)
// transaction1.takeCred(100)
// transaction1.takeCred(50)
// transaction1.setTransactionLimit(150)
// transaction1.putCredits(100)
// console.log(transaction1.getCardOptions());
// let transaction2 = userCard(2)
// transaction2.putCredits(100)
// transaction2.takeCred(50)
// transaction1.putCredits(100)
// console.log(transaction2.getCardOptions());
// let transaction3 = userCard(3)
// transaction3.putCredits(100)
// transaction3.takeCred(50)
// transaction3.transferCredits(50, transaction2)
// console.log(transaction3.getCardOptions());
// console.log(transaction2.getCardOptions());


function UseAccount(name) {
  this.name = name
  this.cards = []
  this.addCards = function (key) {
    if (this.cards.length <= 3 && (key >= 1 || key <= 3)) {
      this.cards.push(userCard(key))
    } else console.error('key should be 1-3 and maximum 3 cards')
  }
  this.getCardsByKey = function (key) {
    return this.cards.find(item => item.getCardOptions().key === key)
  }
}

let user1 = new UseAccount('Bohdan')
user1.addCards(1)
user1.addCards(2)
let card1 = user1.getCardsByKey(1)
let card2 = user1.getCardsByKey(2)
card1.putCredits(100)
card2.putCredits(200)
card2.putCredits(200)
card2.putCredits(200)
card2.putCredits(200)
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
card1.transferCredits(50, card2)
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

