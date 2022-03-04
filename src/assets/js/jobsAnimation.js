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
function animateCSS(btn, index, display, rotate, addDiv, addClass) {
    btn.style.transform = `rotate(${rotate}deg)`;
    
    currentCard = cards[index];

    if(addDiv) {
        currentCard.appendChild(newDiv)
        currentCard.classList.add('rectangle')
    } else {
        newDiv.remove()
        currentCard.classList.remove('rectangle')
    } 
        

    setTimeout(() => {
        if (currentCard.hasAttribute('fst')) {
            newDiv.appendChild(newTitle);
            newDiv.appendChild(newParagraph);
            newTitle.innerHTML = '2015 - 2016';
            newParagraph.innerHTML = 'Correspondente da IV GERES da Secretaria Estadual de Saúde de Pernambuco, gerenciamento no software E-SUS, desenvolvedor de Dashboards no software EXCEL, consultor nos sites CMCE e APACNET. Gestão de vagas da fila do SUS.';

        } else if (currentCard.hasAttribute('scnd')) {
            newDiv.appendChild(newTitle);
            newDiv.appendChild(newParagraph);
            newTitle.innerHTML = '2015 - 2016';
            newParagraph.innerHTML = 'Desenvolvimento de projetos arquitetônicos no software AutoCAD, supervisão de serviços em campo, criação planilhas e Dashboards software EXCEL.';

        } else if (currentCard.hasAttribute('thrd')) {
            newDiv.appendChild(newTitle);
            newDiv.appendChild(newParagraph);
            newTitle.innerHTML = '2018 - 2020';
            newParagraph.innerHTML = 'Controle/elaboração de Dashboards no software EXCEL, contas a pagar, relatórios de estatísticas de vendas, faturamento e despesas mensais, gerenciamento no software DataWeb.';

        } else {
            newDiv.appendChild(newTitle);
            newDiv.appendChild(newParagraph);
            newTitle.innerHTML = '2020 - 2022';
            newParagraph.innerHTML = 'Responsável pela precificação de produtos das empresas do grupo, desenvolvedor web, marketing digital, elaboração de reuniões mensais, elaboração e levantamento de relatórios de dados estatísticos gerais.';
        }

    }, 600)

    cards.forEach(card => {
        if(card != currentCard) 
            card.style.display = display;
    })
}


// BTNS CLICK EVENT TO EXECUTE FUNCTIONS
btns.forEach((btn, index) => {
    btn.onclick = () => {
        if (!clicked) {
            animateCSS(btn, index, 'none', 180, true);
            clicked = true
        } else if (clicked) {
            animateCSS(btn, index, 'flex', 360, false);
            clicked = false
        }
    }
})