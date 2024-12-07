const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const changeBy = document.querySelector('.changeBy')
const resetBtn = document.querySelector('.reset-Btn')

minusBtn.addEventListener('click', ()=>{
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
   count.innerText = countValue - changeByValue;  
})
plusBtn.addEventListener('click', ()=>{
    const changeByValue = parseInt(changeBy.value)   
    const countValue = parseInt(count.innerText)
   count.innerText = countValue + changeByValue;  
})
resetBtn.addEventListener('click', ()=>{
   count.innerText = 0;  
})

