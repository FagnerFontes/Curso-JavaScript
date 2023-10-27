const teclasNum = [...document.querySelectorAll(".num")]
const teclasop = [...document.querySelectorAll(".op")]
const reclaRes=document.querySelector(".res")
const display=document.querySelector(".display")
const ton=document.getElementById("ton")
const tLimpar=document.getElementById("tlimpar")

teclasNum.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})

teclasop.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})

tLimpar.addEventListener("click", (evt)=>{
    display.innerHTML="0"
})
