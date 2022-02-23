let firstDivCards = document.querySelector('#section-skills .all-cards:nth-of-type(1)')
let secondDivCards = firstDivCards.cloneNode(true)
document.querySelector('#section-skills aside').appendChild(secondDivCards)

let firstDivCardsSize = firstDivCards.offsetWidth
let translateValue = 1
console.log(firstDivCardsSize)
function carrousel() {
        translateValue--
        if(translateValue > -1538) {
            firstDivCards.style.transform = `translateX(${translateValue}px)`
            secondDivCards.style.transform = `translateX(${translateValue}px)`
        } else if (translateValue <= -1538) {
            firstDivCards.style.transform = `translateX(${(firstDivCardsSize*2)}px)`
            secondDivCards.style.transform = `translateX(${(firstDivCardsSize*2)}px)`
            translateValue = 1
        }
}

setInterval(() => {
    carrousel()
}, 7);