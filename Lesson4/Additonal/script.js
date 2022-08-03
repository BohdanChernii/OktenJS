// --створити масив з:
//   - з 5 числових значень
let numbers = [1, 2, 3, 4, 5]
// - з 5 стрічкових значень
let strings = ['1', '2', '3', '4', '5']
// - з 5 значень стрічкового, числового та булевого типу
let arr = [true, 2, '3', false, 5]
// - та вивести його в консоль
console.log(numbers, strings, arr)
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
console.log('////////////')
let empty = []
empty[0] = 'hello'
empty[1] = 'world'
console.log(empty)

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let test = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// 1. перебрати його циклом while
console.log('////////////1')
let item = 0
while (item >= 0 && item < test.length) {
  console.log(test[item])
  item++
}
//   2. перебрати його циклом for
console.log('////////////2')
for (item of test) {
  console.log(item)
}
//   3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('////////////3')
let odd = 0
while (odd >= 0 && odd < test.length) {
  if (odd % 2 === 1) {
    console.log(test[odd])
  }
  odd++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('////////////4')
for (let i = 0; i < test.length; i++) {
  if (i % 2 === 1) {
    console.log(test[i])
  }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('////////////5')
let even = 0
while (even >= 0 && even < test.length) {
  if (test[even] % 2 !== 1) {
    console.log(test[even])
  }
  even++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('////////////6')
for (let i = 0; i < test.length; i++) {
  if (test[i] % 2 !== 1) {
    console.log(test[i])
  }
}
// 7. замінити кожне число кратне 3 на слово "okten"
let copy = [...test]
console.log('////////////7')
for (let i = 0; i < copy.length; i++) {
  if (test[i] % 3 === 0) {
    copy[i] = 'okten'
  }
}
console.log(copy)
// 8. вивести масив в зворотньому порядку.
console.log('////////////8')
let res = []
for (let i = test.length; i >= 0; i--) {
  if (test[i]) {
    res.push(test[i])
  }
}
console.log(res)
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
console.log('////////////9.1')
let item1 = test.length
while (item1 >= 0) {
  if (test[item1]) {
    console.log(test[item1])
  }
  item1--
}
console.log('////////////9.2')

for (item = test.length; item >= 0; item--) {
  if (test[item]) {
    console.log(test[item])
  }
}
console.log('////////////9.3')
odd = test.length
while (odd >= 0) {
  if (odd % 2 === 1) {
    console.log(test[odd])
  }
  odd--
}

console.log('////////////9.4')
for (let i = test.length; i >= 0; i--) {
  if (i % 2 === 1) {
    console.log(test[i])
  }
}

console.log('////////////9.5')
even = test.length
while (even >= 0) {
  if (test[even] % 2 !== 1 && test[even]) {
    console.log(test[even])
  }
  even--
}

console.log('////////////9.6')
for (let i = test.length; i >= 0; i--) {
  if (test[i] % 2 !== 1 && test[i]) {
    console.log(test[i])
  }
}

console.log('////////////9.7')
for (let i = copy.length; i >= 0; i--) {
  if (copy[i]) {
    console.log(copy[i])
  }
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log('////////////10')
const test10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let item10 of test10) {
  console.log(item10)
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log('////////////11')
const test11 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
for (let item11 of test11) {
  console.log(item11)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log('////////////12')
for (let item11 of test11) {
  console.log(item11)
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log('////////////13')
const test13 = ['1', false, '3', true, '5', false, '7', '8', true, '10']
for (let item13 of test13) {
  if (typeof item13 === 'boolean') {
    console.log(item13)
  }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log('////////////14')
const test14 = ['1s', false, 3, true, '5s', false, '7s', '8s', true, 10]
for (let item14 of test14) {
  if (typeof item14 === 'number') {
    console.log(item14)
  }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log('////////////15')
for (let item15 of test14) {
  if (typeof item15 === 'string') {
    console.log(item15)
  }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log('////////////16')
const test16 = []
test16[0] = 'str'
test16[1] = 3
test16[2] = false
test16[3] = 'str'
test16[4] = 3
test16[5] = '4'
test16[6] = false
test16[7] = 4
test16[8] = 'str'
test16[9] = true
for (let item = 0; item < test16.length;item++) {
  console.log(test16[item])
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('////////////17')
for (let item = 0; item < test16.length;item++) {
  document.write(`Крок:${item + 1} `)
  console.log('Крок- ' + (+item + 1))
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('////////////18')
const parent = ['Bohdan','Vasyl', 'Anna', 'Andriy','Mykola','Yuriy','Matthew','Roman','Peter','Sergiy']

for(let par = 0; par < parent.length; par++){
  for(let child = 0; child < parent.length; child++){
    document.write(`<br/>${par+1}.${child+1} ${parent[par]}`)
    console.log(par,child)
  }
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log('////////////19')
for(let par = 0; par < parent.length; par+=2){
  for(let child = 0; child < parent.length; child+=2){
    document.write(`<br/>${par+1}.${child+1} ${parent[par]}`)
    console.log(par,child)
  }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log('////////////20')
for(let par = 0; par < parent.length; par++){
  for(let child = 0; child < parent.length; child++){
    let parEl = par+1;
    let childEl = child+1;
    if( parEl  % 2 !== 1 && childEl % 2 !== 1){
      document.write(`<br/>${par+1}.${child+1} ${parent[par]}`)
      console.log(par,child)
    }

  }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log('////////////21')
for(let par = 0; par < parent.length; par++){
  for(let child = 0; child < parent.length; child++){
    if(par % 2 === 1 && child % 2 === 1){
      document.write(`<br/>${par}.${child} ${parent[par]}`)
      console.log(par,child)
    }
  }
}