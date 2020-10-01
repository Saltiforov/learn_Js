/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelectorAll('.promo__interactive-item');

adv.forEach(item =>{
    item.remove()
})
genre.textContent = "драма"
poster.style.backgroundImage = "url('img/bg.jpg')";
movieList.forEach(item => {
    item.remove()
})
movieDB.movies.sort()
movieDB.movies.forEach(function (item,i){
    const itemAdd = document.createElement('li')
    itemAdd.classList.add('promo__interactive-item')
    itemAdd.innerHTML = `
    ${i+1}
    ${item}
    <div class="delete"></div>
    `
    document.querySelector('button').append(itemAdd)
})

// const adverEvent = document.querySelector('#advertising')
//
// adverEvent.addEventListener("click",() => {
//     const imgForm = document.createElement("img")
//     imgForm.style.backgroundImage = "url(content_1.jpg)"
//     imgForm.style.height = '100px'
//     document.querySelector('.promo__adv-title').append(imgForm)
// })
// // function movieContent(){
// //
// // }
// <button>Реклама от спонсоров</button>
// console.log(adverEvent)




// КОД ПЕТРЕЧЕНКА
// const adv = document.querySelectorAll('.promo__adv img'),
//     poster = document.querySelector('.promo__bg'),
//     genre = poster.querySelector('.promo__genre'),
//     movieList = document.querySelector('.promo__interactive-list');
//
// adv.forEach(item => {
//     item.remove();
// });
//
// genre.textContent = 'драма';
//
// poster.style.backgroundImage = 'url("img/bg.jpg")';
//
// movieList.innerHTML = "";
//
// movieDB.movies.sort();
//
// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });