const cards = document.querySelectorAll('#section-skills .cards')
const aside = document.querySelectorAll('#setion-skills aside')
let count = 500
let array = Array.from(cards)

function carrousel() {
    array.forEach(card => {
        count = count - 0.1
        card.style.transform = `translateX(${count}px)`

            if(count < -330) {
                aside.insertAdjacentHTML('beforeend', array[0])
            }
    })
}


setInterval(() => {
    carrousel()
}, 5);        



