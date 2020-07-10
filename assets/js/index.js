const menuBtn = document.querySelector('.menu-btn');
const slidebar = document.querySelector('.slidebar');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        slidebar.classList.add('open_sl');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        slidebar.classList.remove('open_sl');
        menuOpen = false;
    }
});