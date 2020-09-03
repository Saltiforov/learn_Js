"use strict"
//
// let number = 5
// const leftBorderWidth = 1
//
// number = 10
// console.log(number) // 10
//
// const  obj ={ // свойства объекста
//     name:"Jonn",
//     age:25,
//     isMarried:false
// }

// const  result = confirm("Ti tut?")

// // const answer = prompt("Вам есть 18?", "18")
// const  answer = []
// answer[0] = prompt('Как ваше имя? ', '');
// answer[0] = prompt('Как ваше фамилия? ', ''); // функция запроса ввода данных по типу alert
//
// document.write(answer);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
console.log(numberOfFilms)
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}
const answer = prompt('Один из последних просмотренных фильмов?', '')
const answerMark = prompt('На сколько оцените его?', '')
const answer2 = prompt('Один из последних просмотренных фильмов?', '')
const answerMark2 = prompt('На сколько оцените его?', '')
// const movies = {
//     log:answer,
//     mark:answerMark
// }
personalMovieDB.movies[answer] = answerMark
personalMovieDB.movies[answer2] = answerMark2
console.log(personalMovieDB)

