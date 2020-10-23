'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button')

// const width = box.clientWidth
// const height = box.clientHeight
// const width = box.offsetWidth
// const height = box.offsetHeight
const width = box.scrollWidth
const height = box.scrollHeight

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'

    console.log(box.scrollTop)
})

console.log(box.getBoundingClientRect().top)

const style = window.getComputedStyle(box) // стили которые уже примененны к элементу на страницы

// scrollTo проскролить на нужное количество px
console.log(document.documentElement.scrollTop) // узнать сколько пролитал юзер