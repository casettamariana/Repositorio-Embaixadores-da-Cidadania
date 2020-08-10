//Animação navbar
const btn_navbar__click = document.querySelector("#menu-btn-id");

var opition_navbar = gsap.to(".slidebar", {x: '100%', duration: .5});
var btn_navbar = gsap.to(".menu-btn", {x: '100%', duration: .6});
let controlMenu_navbar = false;

//Animação de troca de páginas
var container_introducao = document.querySelector("#container-introducao");
var container_pilulas = document.querySelector("#container-pilulas");
var container_atividades = document.querySelector("#container-atividades");
var container_podcast = document.querySelector("#container-podcast");
var container_videocast = document.querySelector("#container-videocast");
var container_webnar = document.querySelector("#container-webnar");
var op_outros = document.querySelector(".ul__outros");

const btn_home = document.querySelector(".item1");
const btn_pilulas = document.querySelector(".item2");
const btn_atividades = document.querySelector(".item3");
const btn_podcast = document.querySelector(".item4");
const btn_outros = document.querySelector(".item5");
const btn_outros__item1 = document.querySelector(".item1a");
const btn_outros__item2 = document.querySelector(".item2a");

//                 princ, pilula, ativ, podcast
let controlPage = [false, false, false, true];
var controlBtn_outros = false;


//Animação troca de conteiners


btn_pilulas.addEventListener('click', () => {
    console.log('Clicou Pilulas');
    desapareceContainer();
    if(controlBtn_outros){
        btn_outros.click();
    }
    container_pilulas.style.display = 'grid';

});
btn_atividades.addEventListener('click', () => {
    console.log('Clicou Atividades');
    desapareceContainer();
    if(controlBtn_outros){
        btn_outros.click();
    }
    container_atividades.style.display = 'flex';
});
btn_podcast.addEventListener('click', () => {
    desapareceContainer();
    if(controlBtn_outros){
        btn_outros.click();
    }
    container_podcast.style.display = 'grid';
});
btn_outros__item1.addEventListener('click', () => {
    desapareceContainer();
    if(controlBtn_outros){
        btn_outros.click();
    }
    container_videocast.style.display = 'grid';
});
btn_outros__item2.addEventListener('click', () => {
    desapareceContainer();
    if(controlBtn_outros){
        container_webnar.click();
    }
    container_webnar.style.display = 'grid';
});
btn_outros.addEventListener('click', () => {
    if(!controlBtn_outros){
        op_outros.style.display = 'flex';
        controlBtn_outros = true;
    } else {
        op_outros.style.display = 'none';
        controlBtn_outros = false;
    }
    
});

function desapareceContainer(){
    container_podcast.style.display = "none";
    container_atividades.style.display = "none";
    container_pilulas.style.display = "none";
    container_introducao.style.display = "none";
    container_videocast.style.display = "none";
    container_webnar.style.display = "none";
}

