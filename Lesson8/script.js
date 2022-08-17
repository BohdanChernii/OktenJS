// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
  this.id = id
  this.name = name
  this.surname = surname
  this.email = email
  this.phone = phone
}

let arr = []
arr.length = 10
let res = []
for (let item = 0; item < arr.length; item++) {
  arr[item] = (new User(item, 'Bohdan', 'Tcherniy', 'dffdf@wewew', 1212211212))
  res.push(arr[item])
}
console.log(res);
//batter solution
res = arr.reduce((acc, value, index) => {
  acc.push(new User(index, 'Bohdan', 'Tcherniy', 'dffdf@wewew', 1212211212))
  return [...acc]
}, [])
console.log(res);
console.log('////');

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let evenId = res.filter(item => item.id % 2 === 0)
console.log(evenId);
console.log('////');

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(evenId.sort((a, b) => a.id - b.id));
console.log('////');

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order
  }
}

let client = new Client(1, 'vasyl', 'ivanov', 'sdsdsd@eew', 212112212, ['socks', 'jacket', 'trousers'])
console.log(client);
console.log('////');

// створити пустий масив, наповнити його 10 об'єктами Client
res = arr.reduce((acc, val, index) => {
  acc.push(new Client(index, 'vasyl', 'ivanov', 'sdsdsd@eew', 212112212, ['socks', 'jacket', 'trousers']))
  return [...acc]
}, [])
console.log(res);
console.log('////');

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(res.sort((a, b) => a["order"].length - b["order"].length))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, producer, year, maxSpeed, volume) {
  this.model = model
  this.producer = producer
  this.year = year
  this.maxSpeed = maxSpeed
  this.volume = volume
  //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
  this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  }
  // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
  this.info = function () {
    console.log({model, producer, year, maxSpeed, volume})
  }
  // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
  this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = this.maxSpeed + newSpeed;
  }
  //-- changeYear (newValue) - змінює рік випуску на значення newValue
  this.changeYear = function (newYear) {
    this.year = newYear
  }
  // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
  this.addDriver = function (driver) {
    this.driver = driver
  }
}

res = new Car('volkswagen', 'Germany', 2005, 250, 2)
res.maxSpeed = 100
res.info()
res.increaseMaxSpeed(100)
res.addDriver({driverName: "Bohdan", age: 21})
console.log(res)
console.log('////');

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class CarClass {
  constructor(model, producer, year, maxSpeed, volume) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.volume = volume
  }

  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  }

  // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
  info() {
    console.log({
      model: this.model,
      producer: this.producer,
      year: this.year,
      maxSpeed: this.maxSpeed,
      volume: this.volume
    })

  }

  // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
  increaseMaxSpeed(newSpeed) {
    this.maxSpeed = this.maxSpeed + newSpeed;
  }

  //-- changeYear (newValue) - змінює рік випуску на значення newValue
  changeYear(newYear) {
    this.year = newYear
  }

  // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
  addDriver(driver) {
    this.driver = driver
  }
}

res = new CarClass('bmw', 'Germany', 2000, 200, 1.5)
res.maxSpeed = 100
res.drive()
res.info()
res.increaseMaxSpeed(100)
res.addDriver({driverName: "Bohdan", age: 21})
console.log(res)
console.log('////');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, size) {
  this.name = name
  this.age = age
  this.size = size
}

res = arr.reduce((acc, value, index) => {
  acc.push(new Cinderella('Ann', 22, 30 + index))
  return [...acc]
}, [])
console.log(res);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
  constructor(name, age, shoe) {
    this.name = name
    this.age = age
    this.shoe = shoe
  }
}

let prince = new Prince('Bohdan', 21, 32)
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let pare
for (let item of res) {
  if (item.size === prince.shoe) {
    pare = item
  }
}
console.log(pare);

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(res.find(item => item.size === prince.shoe));
console.log('////');

// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
const getClasses = () => {
  let rules = document.querySelectorAll(".rules")
  res = []
  for (let item of rules){
    res.push(item.className)
  }
  console.log(res);
}
console.log(getClasses());

