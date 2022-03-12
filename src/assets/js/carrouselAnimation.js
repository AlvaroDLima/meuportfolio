let allCards = document.querySelector('#section-skills .all-cards');

let btns = document.querySelectorAll('.section-skills-btn')
let aside = document.querySelector('#section-skills aside')
    
let translateValue = 0;
let screenResolution = ""
function carrousel(index) {
    screenResolution = window.innerWidth
   
    if (screenResolution >= 1400) {
        
        if (index == 0 && translateValue <= -170) {
            translateValue += 170
            allCards.style.transform = `translateX(${translateValue}px)`
        } else if (index == 1 && translateValue > -910) {
            translateValue -= 170
            allCards.style.transform = `translateX(${translateValue}px)`
        }
    } else if (screenResolution > 900 && screenResolution < 1400) {
        if (index == 0 && translateValue <= -170) {
            translateValue += 170
            allCards.style.transform = `translateX(${translateValue}px)`
        } else if (index == 1 && translateValue > -1080) {
            translateValue -= 170
            allCards.style.transform = `translateX(${translateValue}px)`
        }
    } else if (screenResolution > 750 && screenResolution < 900) {
        if (index == 0 && translateValue <= -170) {
            translateValue += 170
            allCards.style.transform = `translateX(${translateValue}px)`
        } else if (index == 1 && translateValue > -1250) {
            translateValue -= 170
            allCards.style.transform = `translateX(${translateValue}px)`
        }
    } else if (screenResolution < 750) {
        if (index == 0 && translateValue <= -170) {
            translateValue += 170
            allCards.style.transform = `translateX(${translateValue}px)`
        } else if (index == 1 && translateValue > -1980) {
            translateValue -= 170
            allCards.style.transform = `translateX(${translateValue}px)`
        }
    }
}
    
btns.forEach((elem, index) => {
    
    elem.addEventListener('click', () => {
            carrousel(index)
    })
})