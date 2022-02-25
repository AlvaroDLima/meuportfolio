let firstDivCards = document.querySelector('#section-skills .all-cards:nth-of-type(1)');
let secondDivCards = firstDivCards.cloneNode(true);
document.querySelector('#section-skills aside').appendChild(secondDivCards);

let containerSize = firstDivCards.offsetWidth;
let translateValue = 1;

function carrousel() {
        translateValue--;

        if(translateValue > -1538) {
            firstDivCards.style.transform = `translateX(${translateValue}px)`
            secondDivCards.style.transform = `translateX(${translateValue}px)`
        } else if (translateValue <= -1538) {
            firstDivCards.style.transform = `translateX(${(containerSize*2)}px)`
            secondDivCards.style.transform = `translateX(${(containerSize*2)}px)`
            translateValue = 1
        }
}

setInterval(() => {
    carrousel();
}, 7);