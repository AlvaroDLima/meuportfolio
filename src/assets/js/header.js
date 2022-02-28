let header = document.querySelector('header');

//ANIMATION
const changeHeaderClass = () => {
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1) {
            header.classList.add('headerAnimation');
        } else {
            header.classList.remove('headerAnimation');
        }
    });
}; changeHeaderClass();





// MENU MOBILE
const menuMobile = () => {
    const displayWidth = document.querySelector('body').clientWidth
    let nav = document.querySelector('header nav')
    let btnHambur = document.createElement('button')
    let ul = document.querySelector('nav ul')

    btnHambur.innerHTML = '='
    
    if(displayWidth <= 1150) {
        nav.insertAdjacentElement('afterbegin', btnHambur)
    } else {
        nav.style.display = 'flex';
        ul.style.display = 'flex'
    }

    let clicked = true
    btnHambur.addEventListener('click', () => {
        if(clicked) {
            header.style.height = `${430}px`;
            nav.style.display = 'flex';
            ul.style.display = 'flex'
            clicked = false
        } else if (!clicked) {
            header.style.height = `${80}px`;
            ul.style.display = 'none'
            clicked = true
        }
    })
}

menuMobile()