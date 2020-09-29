"use strict"

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');


box.style.backgroundColor = 'blue';
box.style.width = '500px';


//
// // box.style.cssText = `background-color: blue; width:${}px`
box.style.cssText = `background-color: blue; width:500px`;
//
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red'

// // for (let i = 0; i < hearts.length; i++){
// //     hearts[i].style.backgroundColor = 'blue'
// // }
//
hearts.forEach(item => {
    item.style.backgroundColor = 'blue'
})
//
const div = document.createElement('div')
//
// // const text = document.createTextNode('Тут был я')
//
div.classList.add('black')
//
// // wrapper.append(div); // добавление элемента в конец

wrapper.appendChild(div);

// wrapper.prepend(div) // добавление элемента в начало

// wrapper.insertBefore(div, hearts[0]) // не актуальное добавление элементов

// hearts[0].before(div) // добавление элементов как в css
// hearts[0].after(div)

// circles[0].remove() // удаление элемента

// wrapper.removeChild(hearts[1]) // неактуально удаление элемента

// hearts[0].replaceWith(circles[0]) // замена объекта первым указываеться то что будем менять
// wrapper.replaceChild(circles[0] , hearts[0]) // тоже то сверху (неактуал)

div.innerHTML = '<h1>Hello world!</h1>'

// div.textContent = "Hello" // для записи ответа пользывателя лучше использывать это

div.insertAdjacentHTML("afterend",'<h2>Hello</h2>');
