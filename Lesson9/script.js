// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
const content = document.getElementById('content')
console.log('Task1:', content.textContent);
console.log('////');

// -- отримує текст з блоку з id "rules"
const rules = document.getElementById('rules')
console.log('Task2:', rules.textContent);
console.log('////');

// -- замініть текст параграфа з id 'content' на будь-який інший
content.textContent = 'Task3'
console.log('Task3:', content.textContent);
console.log('////');

// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.textContent = 'Task4'
console.log('Task4:', rules.textContent);
console.log('////');

// -- змініть кожному елементу колір фону на червоний
for (let item of document.body.children) {
  item.style.background = 'red'
}
// -- змініть кожному елементу колір тексту на синій
for (let item of document.body.children) {
  item.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.classList);
console.log('////');

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const list = document.querySelectorAll('.fc_rules')

// console.log(list.children);
for (let item of list) {
  item.style.background = 'green'
}
