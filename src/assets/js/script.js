//MENU HAMBUR & ANIMATE
const btnMobile = document.getElementById('btn-mobile');
const btns = document.querySelectorAll('#header a[href^="#"]');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu')

function toggleMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault()
    }

    nav.classList.toggle('active') 
    menu.classList.toggle('active')
}

btns.forEach(item => {
    item.addEventListener('click', toggleMenu)
})

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// CHANGE HEADER COLOR & ANIMATE
(function () {
    let header = document.getElementById('header');
    let menuBtns = document.getElementById('menu');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 1) {
            header.classList.add('headerColorido')
            menuBtns.classList.add('menuAdaptado')
        } else {
            header.classList.remove('headerColorido')
            menuBtns.classList.remove('menuAdaptado')
        }
    });
})();

// AUTO SELECT BUTTON:RADIOS
let counter = 1;
function startCounter () {
    document.getElementById('radio' + counter).checked = true; // SELECIONA O PRÓXIMO RÁDIO
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}
setInterval(startCounter, 3000);


// CARROUSSEL
const imgs = document.getElementById("linguagens");
const img = document.querySelectorAll("#linguagens .icone_linguagens")
let idx = 0;

function carrossel () {
    idx++;
    if (idx > img.length - 3) {
        idx = -2;
    }
    imgs.style.transform = `translateX(${-idx * 250}px)`
}

setInterval(carrossel, 1800); 

// SMOOTH SCROLL
function scrollToIdOnClick(event) {
    event.preventDefault();
    
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
    window.scroll({ 
        top: (function () {
                if(element.getAttribute('href') !== '#header') {
                    vl = to + 250
                } else {
                    vl = to
                }
                return vl
        })(),
        behavior: "smooth",
    });
}

btns.forEach(link => {
    link.addEventListener('click', scrollToIdOnClick)
})


