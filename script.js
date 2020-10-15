"use strict"

const p = document.querySelectorAll('p')
console.log(p)

// defer сохраняет порядок загрузки джс файла, в хтмл



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // добавление постепенности загрузки
    document.body.append(script);
}
loadScript("js/test.js")
loadScript("js/some.js")