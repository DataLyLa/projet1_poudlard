//Menu Hamburger
const btnNavHamb = document.querySelector('#nav-bar-hamburger')

// Menu nav telephone
const navPhone = document.querySelector('.nav-bar-phone')
const body = document.querySelector('body')
btnNavHamb.addEventListener('click', () => {
    btnNavHamb.classList.toggle('active')
    navPhone.classList.toggle('phoneVisible')
    body.classList.toggle('phoneScrollStop')
})