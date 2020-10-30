'use strict';

// const box = document.querySelector('.box'),
//       btn = document.querySelector('button')
//
// // const width = box.clientWidth
// // const height = box.clientHeight
// // const width = box.offsetWidth
// // const height = box.offsetHeight
// const width = box.scrollWidth
// const height = box.scrollHeight
//
// btn.addEventListener('click', () => {
//     // box.style.height = box.scrollHeight + 'px'
//
//     console.log(box.scrollTop)
// })
//
// console.log(box.getBoundingClientRect().top)
//
// const style = window.getComputedStyle(box) // стили которые уже примененны к элементу на страницы
//
// // scrollTo проскролить на нужное количество px
// console.log(document.documentElement.scrollTop) // узнать сколько пролитал юзер

//
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`)
//     } // создание метода для контекста вызова.
// }
//
// User.prototype.exit = function (name) {
//     console.log(`Пользователь ${this.name} вышел`)
// }
//
// const ivan = new User('Ivan',28)
// const alex = new User('alex',20)
// ivan.hello() // вызов метода в контексте

function Accumulator(startingValue){
    this.value += startingValue;
    this.read = function (){
        this.value = +prompt('Введите число:', '')
        const answer = prompt('Что нужео сделать с числом? (*,+,-,/)', '')
      if (answer === '*'){
          this.value *= +prompt('Введите число:', '')
      }else if (answer === '/'){
          this.value /= +prompt('Введите число:', '')
      }
      else if (answer === '+') {
          this.value += +prompt('Введите число:', '')
      }
      else
          if (answer === '-') {
              this.value -= +prompt('Введите число:', '')
          }
      }
}
let accumulator = new Accumulator(1)
accumulator.read()
alert(accumulator.value);