let header = document.querySelector('header');
const navMobile = document.createElement('nav')

//ANIMATION
const changeHeaderClass = () => {
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1) {
            header.classList.add('headerAnimation');
            document.querySelector('#nav-mobile').style.marginTop = `${60}px`
        } else {
            header.classList.remove('headerAnimation');
            document.querySelector('#nav-mobile').style.marginTop = `${80}px`
        }
    });
}; 

changeHeaderClass();

