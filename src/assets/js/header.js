const changeHeaderClass = () => {
    let header = document.querySelector('header');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 1) {
            header.classList.add('headerAnimation')
        } else {
            header.classList.remove('headerAnimation')
        }
    });
}; changeHeaderClass()