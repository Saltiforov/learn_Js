"use strict"

const arr = [1,222,131,6,8];
arr.sort(compareNum)
console.log(arr)

function compareNum(a,b){
    return a - b;
} // используеться как callback функция для сортировки массива (числового)



// arr[99] = 0;
// console.log(arr.length)
// console.log(arr)

arr.forEach(function(item,i,arr){
    console.log(`${i}: ${item} внутри массива ${arr}`)
});
Результат
0: 1 внутри массива 1,2,3,6,8
1: 2 внутри массива 1,2,3,6,8
2: 3 внутри массива 1,2,3,6,8
3: 6 внутри массива 1,2,3,6,8
4: 8 внутри массива 1,2,3,6,8


arr.pop(); // удаление послденего элемента массива

arr.push(10);  // добавление последнего элемента

console.log(arr);

for (let i = 0;i < arr.length;i++){
    console.log(arr[i]);
}

for (let value of arr){
    console.log(value)
}

const str = prompt("","");

const products = str.split(", ")
products.sort()
console.log(products.join('; '))



const arr = [1,2,44,123,5,1,123213132,2323,43]

arr.sort(cumpareNum)
function cumpareNum(a,b){
    return a - b;
}
console.log(arr)


const str = prompt('','');
const products = str.split(",")


console.log(products.join('...'))

const arr = [1,2,3,4,6,12]

arr.forEach(function (item,i,arr){
    console.log(`${item} имеет в себе массив ${arr}`)
})