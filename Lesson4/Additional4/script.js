// 1. Створити пустий масив та :
//   a. заповнити його 50 парними числами за допомоги циклу.
const arr1 = []
arr1.length = 50
let resa = []
for (let item of arr1) {
  item = (Math.floor(Math.random() * (1 + 10)) + 1)
  if (item % 2 !== 1) {
    resa.push(item)
  }
}
console.log(resa)

//   b. заповнити його 50 непарними числами за допомоги циклу.
let resb = []
for (let item of arr1) {
  item = (Math.floor(Math.random() * (1 + 10)) + 1)
  if (item % 2 === 1) {
    resb.push(item)
  }
}
console.log(resb)
//   c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
arr1.length = 20
let resc = []
for (let item of arr1) {
  item = Math.floor(Math.random() * (20 - 1 + 1)) + 1
  resc.push(item)
}
console.log(resc)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let resd = []
for (let item of arr1) {
  item = Math.floor(Math.random() * (732 - 8 + 8)) + 8
  resd.push(item)
}
console.log(resd)

// 2. Вивести за допомогою console.log кожен третій елемен
console.log('//////2')
let item2 = 0
while (item2 >= 0 && item2 < resd.length) {
  if ((item2+1) % 3 === 0) {
    console.log(resd[item2])
  }
  item2++
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log('//////3')
let item3 = 0
while (item3 >= 0 && item3 < resd.length) {
  if ((item3+1) % 3 === 0 && resd[item3] % 2 !== 1) {
    console.log(resd[item3])
  }
  item3++
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log('//////4')
let res4 = []
let item4 = 0
while (item4 >= 0 && item4 < resd.length) {
  if ((item4+1) % 3 === 0 && resd[item4] % 2 !== 1) {
      res4.push(resd[item4])
  }
  item4++
}
console.log(res4)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log('//////5')
let res5 = [ 1, 2, 3, 4, 7, 9, 56, 8, 67 ]
for(let i = 0; i<res5.length; i++){
  if((res5[i])%2 !== 1){
    let val = i-1
    for(let j = 0; j<res5.length; j++){
      if(j===val){
        console.log(res5[j])
      }
    }
  }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
console.log('//////6')
const test6 = [100,250,50,168,120,345,188]
let res6 = 0
for(let i = 0; i<test6.length; i++){
 res6+=test6[i]
}
console.log(res6/test6.length)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log('//////7')
const res7 = []
const test7 = []
test7.length = 10
for(let item of test7){
  item =Math.floor(Math.random()*(10-1+1)) + 1
  res7.push(item*5)
}
console.log(res7)
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let test8 = [false,21, 'hello']
let res8 =[]
for(let item of test8){
  if(typeof item === 'number'){
    res8.push(item)
  }
}
console.log(res8)

