// console.log(document.body)

// console.log(document.documentElement)

// console.log(document.body.childNodes)

// console.log(document.body.firstChild)
//
// console.log(document.body.lastChild)

console.log(document.querySelector('#current').parentNode.parentNode) // получение родителя

// console.log(document.querySelector('[data-current = "3"]').nextSibling)//получение следующего элемента после указателя в скобках
// console.log(document.querySelector('[data-current = "3"]').previousSibling)
console.log(document.querySelector('[data-current = "3"]').nextElementSibling)

for (let node of document.body.childNodes){
    if (node.nodeName === '#text'){
        continue;
    }
    console.log(node)     // перебор всех элеменнтов ноды на страницы с выборкой именно текстовых значений (элементы)
}