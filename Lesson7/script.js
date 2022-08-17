//try/catch
const catchError = arg => {
  if (arg) {
    return arg;
  }
  throw new Error('arg is undefined')
}

try {
  console.log(catchError());
  ;
} catch (e) {
  console.log(e)
} finally {
  console.log('try/catch construction');
}

//не обовязкові поля
let user = {
  name: 'Bohdan'
}
console.log(user.name);
console.log(user.sername?.hello);

//зручне заповнення об'єкту
let name = 'Roman'

let user2 = {
  name,
  wife: {
    name: 'Anna'
  },
  greeting() {
    return 'HI'
  },

}
console.log(user2);

//деструктуризація
const {name: userName, greeting} = user2
console.log(userName);
console.log(greeting());
const logName = ({name, wife: {name: wifeName}}) => {
  return name.concat(` Wife Name: ${wifeName}`);
}
console.log(logName(user2));

//поверхневе копіювання (shallow copy) може передати методи обєкта
let user3 = {...user2, name: user.name}
console.log(user3);
//
user3 = Object.assign({}, user2)
console.log(user3);

//глибоке копіювання (deep copy) не може передати методи обєкта + якшо це масив обєктів порівняння буде вибивати false
user3 = JSON.parse(JSON.stringify(user2))
console.log(user3 === user2)

//замикання
const closureFunc = (name, age) => {
  const closure = {name, age}
  return {
    getName() {
      return closure.name
    },
    getAge() {
      return closure.age
    },
    setName(name) {
      if (typeof name === 'string') {
        return closure.name = name
      }
    },
    setAge(age) {
      if (age >= 1) {
        return closure.age = age
      }
    }
  }
}
let res = closureFunc('Bohdan', 21)
console.log(res.getAge());
console.log(res.getName());
res.setName('Roman')
console.log(res.getName());
res.setAge(40)
console.log(res.getAge());