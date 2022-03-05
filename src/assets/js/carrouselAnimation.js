let allCards = document.querySelector('#section-skills .all-cards');

let btns = document.querySelectorAll('.section-skills-btn')
let aside = document.querySelector('#section-skills aside')
    
let translateValue = 0;

function carrousel(index) {
    if (index == 0 && translateValue <= -130) {
        translateValue += 130
        allCards.style.transform = `translateX(${translateValue}px)`
    } else if (index == 1 && translateValue > -910) {
        translateValue -= 130
        allCards.style.transform = `translateX(${translateValue}px)`
    }
}
    
btns.forEach((elem, index) => {
    
    elem.addEventListener('click', () => {
            carrousel(index)
    })
})