document.addEventListener('DOMContentLoaded', function(){
const accordions = document.querySelectorAll('.faq-box')

accordions.forEach((acco) =>{
    const plus = acco.querySelector('.plus-btn')
    const minus = acco.querySelector('.minus-btn')
    acco.onclick = ()=> {
        acco.classList.toggle('active')
        plus.classList.toggle('deactive-btn')
        minus.classList.toggle('deactive-btn')

    }
})

})
