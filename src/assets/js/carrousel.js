let aside = document.querySelector('#section-skills aside')
let allCards = document.querySelector('#section-skills .all-cards')
let cards = document.querySelectorAll('#section-skills .cards')

let array = Array.from(cards)
let newAside = allCards.cloneNode(true)

let translateValue = 500

function carrousel() {
    array.forEach(() => {
        translateValue = translateValue - 0.1
        allCards.style.transform = `translateX(${translateValue}px)`
        newAside.style.transform = `translateX(${translateValue}px)`

        if(translateValue < -47 && translateValue > -50) {
           
            aside.appendChild(newAside)
        }
        
    })
}

setInterval(() => {
    carrousel()
}, 5);