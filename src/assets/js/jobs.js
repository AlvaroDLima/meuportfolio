const cards = document.querySelectorAll('#section__experienciaprofissional-circles .circle')

const btns = document.querySelectorAll('#section__experienciaprofissional-circles .circle button')

let currentCard = ""

const newDiv = document.createElement('div')
const newTitle = document.createElement('h3')
const newParagraph = document.createElement('p')

newDiv.classList.add('newDivJS')



btns.forEach((btn, index) => {
    btn.onclick = () => {
        btn.style.transform = `rotate(180deg)`
        
        currentCard = cards[index]
        currentCard.style.width = `${600}px`
        currentCard.style.borderRadius = `${6}px`
        currentCard.style.justifyContent = 'space-evenly'
        currentCard.appendChild(newDiv)
        

        if(currentCard.hasAttribute('fst')) {
            newTitle.innerHTML = '2018 - 2020'
            newParagraph.innerHTML = 'Controle/elaboração de Dashboards no software EXCEL, relatórios de estatísticas de vendas, faturamento e despesas mensais, gerenciamento no software DataWeb.'
            newDiv.appendChild(newTitle)
            newDiv.appendChild(newParagraph)
        }

        cards.forEach(card => {
            if(card != currentCard) {
                card.style.display = 'none'
            }
        })
    }
})