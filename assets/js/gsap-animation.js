var opition_navbar = gsap.to(".slidebar", {x: 250, duration: .5});
var btn_navbar = gsap.to(".menu-btn", {x: '100%', duration: .6});
const btn_navbar__click = document.querySelector("#menu-btn-id");
let controlMenu_navbar = false;

btn_navbar__click.addEventListener('click', () => {
    if(!controlMenu_navbar){
        opition_navbar.reverse();
        btn_navbar.reverse();
        controlMenu_navbar = true;
    } else {
        opition_navbar.play();
        btn_navbar.play();
        controlMenu_navbar = false;
    }
});



