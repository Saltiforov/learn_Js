
const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overley')
console.log(btns)
// btn.onclick = function (){
//     alert('Click')
// }
// btn.onclick = function (){
//     alert('Second Click')
// }
// let i = 0
const deleteElement = (e) => {
    console.log(e.currentTarget)
    console.log(e.type)
    // i++
    // if(i === 1){
    //     btn.removeEventListener('click', deleteElement)
    // }
}
const link = document.querySelector('a')
link.addEventListener('click', (event) =>{
    event.preventDefault()
    console.log(event.target)
})
// btn.addEventListener('click', deleteElement)
// overlay.addEventListener('click', deleteElement)

btns.forEach(btn =>{
    btn.addEventListener('click', deleteElement, {once:true})
})

