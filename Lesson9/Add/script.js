//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let res = []
let arr

const recursive = (element) => {
  arr = res.filter(item => item !== '').reduce((acc, item) => [...acc, ...item], []);
  res.push(element.classList)
  let children = element.children
  if (children.length !== 0) {
    for (let item of children) {
      recursive(item)
    }
  }
}
recursive(document.getElementById('wrap'));
console.log(arr);