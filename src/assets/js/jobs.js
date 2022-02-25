// DOM ELEMENTS
const cards = document.querySelectorAll('#section__experienciaprofissional-circles .circle');
const btns = document.querySelectorAll('#section__experienciaprofissional-circles .circle button');

// CREATE NEW ELEMENTS
const newDiv = document.createElement('div');
    newDiv.classList.add('newDivJS');

const newTitle = document.createElement('h3');
const newParagraph = document.createElement('p');

// AUXILIARY VARIABLES
let currentCard = "";
let clicked = false;


// CHANGE CSS PARAMETERS
function animateCSS(btn, index, display, rotate, width, radius, justContent, addDiv) {
    btn.style.transform = `rotate(${rotate}deg)`;
    
    currentCard = cards[index];
    currentCard.style.width = `${width}px`;
    currentCard.style.borderRadius = `${radius}px`;
    currentCard.style.justifyContent = justContent;
    

    addDiv == true ? currentCard.appendChild(newDiv) : newDiv.remove();
        

    if(currentCard.hasAttribute('fst')) {
        newTitle.innerHTML = '2018 - 2020';
        newParagraph.innerHTML = 'Controle/elaboração de Dashboards no software EXCEL, relatórios de estatísticas de vendas, faturamento e despesas mensais, gerenciamento no software DataWeb.';
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newParagraph);
    }

    cards.forEach(card => {
        if(card != currentCard) 
            card.style.display = display;
    })
}


// BTNS CLICK EVENT TO EXECUTE FUNCTIONS
btns.forEach((btn, index) => {
    btn.onclick = () => {
        if(!clicked) {
            animateCSS(btn, index, 'none', 180, 600, 6, 'space-evenly', true);
            clicked = true
        } else if (clicked == true) {
            animateCSS(btn, index, 'flex', 360, 100, 100, 'center', false);
            clicked = false
        }
    }
})