"use strict"
//
// let a = 5,
//     b = a;
//
// b = b + 5
//
// console.log(b)
// console.log(a)
//
// const  obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj;
//
// copy.a = 10
// console.log(copy)
// console.log(obj)
//
// function copy(mainObj){ // поверхностное копирование обьекта
//     let objCopy = {};
//
//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj;
//     }
//     return objCopy;
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c:{
//         x: 7,
//         y:4
//     }
// }
//
// const newNumbers = copy(numbers);
//
// newNumbers.a = 10;
// newNumbers.c.x = 10
// console.log(newNumbers)
// console.log(numbers)
//
// const add = {
//     d: 17,
//     e:20
// }
//
// const  clone = Object.assign({},add) // добавления обьекта в обект
// clone.d = 2;
// console.log(add)
// console.log(clone)
//
// // 3 способ создания поверхностной копии объекта
// const oldArray = ['a','b','c'];
// const newArray = oldArray.slice()
// newArray[1] = 'adassdsaasd'
// console.log(newArray)
// console.log(oldArray)
// // 4 способ создания поверхностной копии объекта
//
// const video = ['youtube','vimeo','rutube'],
//     blogs = ['wordpress','livejournal','blogger'],
//     internet = [...video, ...blogs, 'vk','facebook'];
//
// console.log(internet)
//
//
// function log(a,b,c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
//
// const  num =[2,5,7]
//
// log(...num)
//
// // spread
//
// const arr = ['a','b']
//
// const newAarray = [...arr]
//
// const q = {
//     one: 1,
//     two: 2
// }
// const newObject = {...q}

// ПРАКТИКА
// const Obj = {
//     a:12,
//     b:1,
//     c:11111,
//     e: {
//         r:"sdsdasad"
//     }
// };
//
// // const arr = [1,2323,12,21323231]
//
// const newObj = {...Obj,e}
// console.log(newObj)
// // newObj[2] = 1233333333
// // console.log(newObj)
// //
// // const person = {
// //     a:1212,
// //     b:1
// // };
// // // const copy = person;
// // const dass = copy(person);
// // console.log(dass)
//
// const objectPass = {
//     a:1,
//     d:2,
//     c:3
// };
//
//
// const copy = objectPass
//
// // const newObject = copy
// copy.a = 100000
// // console.log(copy)
//
//
//
// const data = [1,2,3,4,5,6,12];
// const data2 = [1,2,23,4,5,6,12,1211212,2112212112];
// const arr = {}
//
// const ret = Object.assign(arr,data2); // первый атрибут куда помещаеться второй из которого берёться
//
// console.log(arr);

const a = 2
const b = a
function dddd() {
    b + 4
}
dddd()
console.log(b)