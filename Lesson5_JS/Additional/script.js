// Всі функції повинні бути описані стрілочним типом!!!!
let res
//   - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const max = (first, second, third) => {
  if (first > second && first > third) {
    return 'First'
  } else if (second > first && second > third) {
    return 'Second'
  } else if (third > first && third > second) {
    return 'Third'
  }
  return 'No one'
}
res = max(1, 2, 3)
console.log(res);
console.log('////');
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const min = (first, second, third) => {
  if (first < second && first < third) {
    return 'First'
  } else if (second < first && second < third) {
    return 'Second'
  } else if (third < first && third < second) {
    return 'Third'
  }
  return 'No one'
}
res = min(1, 2, 3)
console.log(res);
console.log('////');
// - створити функцію яка повертає найбільше число з масиву
const getMax = arr => {
  let max = arr[0]
  for (let item of arr) {
    if (arr[item] > max) {
      max = arr[item]
    }
  }
  return max
}
res = getMax([2, 2, 1, 4, 5])
console.log(res);
console.log('////');
// - створити функцію яка повертає найменьше число з масиву

const getMin = arr => {
  let min = arr[0]
  for (let item of arr) {
    if (arr[item] < min) {
      min = arr[item]
    }
  }
  return min
}
res = getMin([2, 2, 1, 4, 5])
console.log(res);
console.log('////');
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const sum = arr => {
  let val = 0
  for (let item of arr) {
    val += item
  }
  return val
}
res = sum([1, 2, 10])
console.log(res);
console.log('////');
// - Дано натуральное число n. Выведите все числа от 1 до n.
const listOfNumbers = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
listOfNumbers(5)
console.log('////');
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const listOfNumbersAB = (a, b) => {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      console.log(i)
    }
  } else {
    for (let i = a; i >= b; i--) {
      console.log(i)
    }
  }
}
res = listOfNumbersAB(30, 20)
console.log(res);
console.log('////');

//-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
const changePlaces = (arr, i) => {
  // let test = [arr[i], arr[i + 1]]
  //   // arr[i] = test[1]
  //   // arr[i + 1] = test[0]
  let temp = arr[i]
  arr[i] = arr[i + 1]
  arr[i + 1] = temp
  return arr
}
res = changePlaces([9, 8, 4, 3, 5, 1, 2], 0)
console.log(res);
console.log('////');

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//   Двожина масиву від 2 до 100
let arr = [1, 1, 0, 0, 4]
const nullToEnd = (arr) => {
  let test = []
  let nulls = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      test.push(arr[i])
    } else if (arr[i] === 0) {
      nulls.push(arr[i])
    }

  }
  return [...test, ...nulls]
}
console.log(nullToEnd(arr));