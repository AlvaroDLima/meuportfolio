let header = document.querySelector('header');
const navMobile = document.createElement('nav')



//ANIMATION
const changeHeaderClass = () => {
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1) {
            header.classList.add('headerAnimation');
            navMobile.style.marginTop = `${60}px`
        } else {
            header.classList.remove('headerAnimation');
            navMobile.style.marginTop = `${80}px`
        }
    });
}; changeHeaderClass();





// MENU MOBILE
const menuMobile = () => {
    const  ul = document.querySelector('#nav-widescreen ul')
    const btnMobile = document.querySelector('#btn-mobile')
    const copyMenu = ul.cloneNode(true);

    copyMenu.classList.add('ul-mobile')
    navMobile.appendChild(copyMenu)
    navMobile.setAttribute('id', 'nav-mobile')

    header.insertAdjacentElement('afterend', navMobile)

    let clicked = false

    btnMobile.addEventListener('click', () => {
        let ulMobile = document.querySelector('#nav-mobile ul')
        if (!clicked) {
            ulMobile.style.display = 'flex'
            navMobile.style.height = `${400}px`
            clicked = true
        } else {
            ulMobile.style.display = 'none'
            navMobile.style.height = 0
            clicked = false
        }
       
        
    })
}

menuMobile()