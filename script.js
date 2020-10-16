const parents = document.querySelector('.btn-block'),
      btns = document.querySelectorAll('button')
// console.log('11111')
// let selectedTd;

// parents.onclick = function(event) {
//     let target = event.target; // где был клик?
//     console.dir(target)
//
//     if (target.tagName !== 'BUTTON') return; // не на TD? тогда не интересует
//
//     highlight(target); // подсветить TD
// };
//
// function highlight(td) {
//     if (selectedTd) { // убрать существующую подсветку, если есть
//         selectedTd.classList.remove('red');
//     }
//     selectedTd = td;
//     selectedTd.classList.add('red'); // подсветить новый td
// }
// let backcolorAdedd
// parents.onclick = (event) => {
//     let target = event.target
//     console.dir(target)
//     if (target.tagName !== "BUTTON") return
//     backcolor(target)
// }
//
// function backcolor (target) {
//     if (backcolorAdedd){
//         backcolorAdedd.classList.remove('red')
//     }
//         backcolorAdedd = target
//         backcolorAdedd.classList.add('red')
//
// }

// let bccolor
// parents.onclick = (event) => {
//     let target = event.target
//     console.dir(target)
//     if (target.tagName !== "BUTTON") return
//     background(target)
// }
// const background = (td) => {
//     if (bccolor){
//
//         bccolor.classList.remove('red')
//     }else {
//         bccolor = td
//         bccolor.classList.add('red')
//     }
// }

let checkList
parents.onclick = (event) => {
    let target = event.target
    if (target.tagName !== "BUTTON") return
    chengeColor(target)
}
const chengeColor = (targetItem) => {
    if (checkList){
        checkList.classList.remove('red')
    }
    checkList = targetItem
    checkList.classList.add('red')
}