let allCards = document.querySelector('#section-skills .all-cards');

let btns = document.querySelectorAll('.section-skills-btn')
let aside = document.querySelector('#section-skills aside')
    
let translateValue = 0;

function carrousel(index) {
    let screenResolution = window.innerWidth;
    
    if (screenResolution => 1900) {
        
        if (index == 0 && translateValue <= -170) {
            translateValue += 170
            allCards.style.transform = `translateX(${translateValue}px)`
        } else if (index == 1 && translateValue > -910) {
            translateValue -= 170
            allCards.style.transform = `translateX(${translateValue}px)`
        }
    } else if (screenResolution < 1900) {
        console.log('oi')
    }
}
    
btns.forEach((elem, index) => {
    
    elem.addEventListener('click', () => {
            carrousel(index)
    })
})