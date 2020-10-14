// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// tuchcancel

window.addEventListener('DOMContentLoaded', ()=>{
    const box = document.querySelector('.box')

    box.addEventListener('touchstart', (e) => {
        e.preventDefault()
        console.log('start')
        console.log(e.touches)
    })
    box.addEventListener('touchmove', (e) => {
        e.preventDefault()
        console.log(e.targetTouches[0].pageX)
    })
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault()
    //     console.log('start')
    // })

})

// touches
// targetTouches
// changedTouches



