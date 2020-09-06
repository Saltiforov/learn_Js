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

//
// console.log(numberOfFilms)

// const answer = prompt('Один из последних просмотренных фильмов?', '')
// const answerMark = prompt('На сколько оцените его?', '')
// const answer2 = prompt('Один из последних просмотренных фильмов?', '')
// const answerMark2 = prompt('На сколько оцените его?', '')
// // const movies = {
// //     log:answer,
// //     mark:answerMark
// // }
// personalMovieDB.movies[answer] = answerMark
// personalMovieDB.movies[answer2] = answerMark2
// console.log(personalMovieDB)
//

// if (4 === 9){
//     console.log("Ok!")
// }else {
//     console.log('ou man')
// }
// let num = 50;
//
// (num === 50) ? console.log("ok!"):console.log("error!") //
// let num = 50;
// switch (num) {
//     case 49:
//         console.log('error')
//         break
//     case 100:
//         console.log('error')
//         break
//     case 50:
//         console.log('good')
//         break
//     default:
//         console.log('не в этот раз')
//         break
// }

//Циклы

// let num = 50
//
// while(num <= 55){
//     console.log(num)
//     num++
// }

// do{
//     console.log(num)
//     num++
// }
// while (num < 55)

// for (let i = 1;i < 8;i++){
//    if(i === 6){
//        // break
//        continue
//    }
// }





//ПРАКТИКА ЧАСТЬ 2 (СДЕЛАЛ 2 ЗАДАЧИ ИЗ 3.Самую сложную не осолил( )
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
// const personalMovieDB = {
//     count:numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false
// }
// for (let i = 0;i < 2;i++){
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = +prompt('На сколько оцените его?', '');
//     while (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done')
//     }
//
//
//
//     // if(a != null && b != null && a != '' && b != '' && a.length < 50){
//     //         personalMovieDB.movies[a] = b;
//     // console.log('done')
//     // }else{
//     //     console.log('error')
//     //     i--
//     // }
// }
// // if(personalMovieDB.count < 10){
// //     alert("Просмотрино довольно мало фильмов.")
// // }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
// //     alert("Вы классический зритель")
// // }else if (personalMovieDB.count >= 30){
// //     alert("Вы киноман")
// // }else {
// //     alert("Произошла ошибка")
// // }
// console.log(personalMovieDB)




// ФУНКЦИИ
// let  num = 20;
//
// function  showFirstMassage(text){
//     console.log(text)
//     let num = 10;
//     console.log(num)
// }
// showFirstMassage('hello world')
// console.log(num)
//
// // function calc(a,b){
// //     return a+b;
// // }
// // console.log(calc(2,3))
//
// function ret(){
//     let  num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum)
//
// const logger = function (){
//   console.log('hello')
// };
// logger();
//
// const calc = (a,b) => {
//     console.log("1")
//     return a + b
// };


// СВОЙТСВА
//
// const str = 'test'
// const  arr = [1,2,3]
//
// console.log(str[2]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
//
//
// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit")) // поиск подтсроки (поиск нужных символов)
// const logg = "hello world";
//
// console.log(logg.slice(6)); // отбор по символав принмает первый элемент
//
// console.log(logg.substring(6,11));
//
// console.log(logg.substr(6,5));
//
// const num = 12.2;
// console.log(Math.round(num))
//
// const test = '12.2px';
// console.log(parseInt(test))
// console.log(parseFloat(test))



// ПРАКТИКА 3 (СДЕЛАНО 0 ИЗ 2 ЗАДАНИЙ ОЧЭН СЛОЖНА(   )

let numberOfFilms
function  start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
}
// start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}
function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB)
    }
}
showMyDB();

function writeYourGenres(){
    for (let i = 1;i <= 3;i++){

        const genre = [prompt(`Ваш любимый жанр под номером ${i}`, '')]
        personalMovieDB.genres[i-1] = genre;
    }
}
writeYourGenres();
console.log(personalMovieDB); 



function  rememberMyFilms(){
    for (let i = 0;i < 2;i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '');

        if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done')
        }else{
            console.log('error')
            i--
        }
    }
}
// rememberMyFilms();
function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert("Просмотрино довольно мало фильмов.")
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("Вы классический зритель")
    }else if (personalMovieDB.count >= 30){
        alert("Вы киноман")
    }else {
        alert("Произошла ошибка")
    }
}
// detectPersonalLevel();

