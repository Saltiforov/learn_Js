"use strict"
//callback - функции

function first(lang,callback){
    //do something
    // setTimeout(function (){
    //     console.log(1)
    // },500)
    console.log(`я учу: ${lang}`);
    callback();
}

function second(){
    console.log(2)
}

first('Python', function (){
    console.log('Я сделал callback function')
});
second();


function learnJS(lang,callback){
    console.log(`я учу: ${lang}`);
    callback();
}
function done(){
    console.log('Я прошел данный урок')
}
learnJS('JavaScript',done);