//Animação navbar
const btn_navbar__click = document.querySelector("#menu-btn-id");
var opition_navbar = gsap.to(".slidebar", {x: 250, duration: .5});
var btn_navbar = gsap.to(".menu-btn", {x: '100%', duration: .6});
let controlMenu_navbar = false;
//Animação de troca de páginas
var container_introducao = document.querySelector("#container-introducao");
var container_pilulas = document.querySelector("#container-pilulas");
var container_atividades = document.querySelector("#container-atividades");
var container_podcast = document.querySelector("#container-podcast");

const btn_home = document.querySelector(".nav_op_home");
const btn_pilulas = document.querySelector(".nav_op_pilulas");
const btn_atividades = document.querySelector(".nav_op_atividades");
const btn_podcast = document.querySelector(".nav_op_podcast");

//                 princ, pilula, ativ, podcast
let controlPage = [false, false, false, true];

//Animação Pílulas
var btn_pil = document.querySelector(".nav_op_pilulas");


//Animação troca de conteiners


btn_home.addEventListener('click', () => {
    console.log('Clicou Home');
    menuBtn.click();

    desapareceContainer();
    container_introducao.style.display = 'flex';
});
btn_pilulas.addEventListener('click', () => {
    console.log('Clicou Pilulas');
    menuBtn.click();

    desapareceContainer();
    container_pilulas.style.display = 'grid';

});
btn_atividades.addEventListener('click', () => {
    console.log('Clicou Atividades');
    menuBtn.click();

    desapareceContainer();
    container_atividades.style.display = 'flex';
});
btn_podcast.addEventListener('click', () => {
    console.log('Clicou Podcast');
    menuBtn.click();

    desapareceContainer();
    container_podcast.style.display = 'grid';
});

function desapareceContainer(){
    // for(var i=0; i<4; i++){
    //     if(controlPage[i] == true){
    //         switch(i){
    //             case 0: //conteiner introdução
    //                 container_introducao.style.display = "none";
    //                 controlPage[i] = false;
    //                 break;
    //             case 1: //conteiner pílulas
    //                 container_pilulas.style.display = "none";
    //                 controlPage[i] = false;
    //                 break;
    //             case 2: //conteiner atividades
    //                 container_atividades.style.display = "none";
    //                 controlPage[i] = false;
    //                 break;
    //             case 3: //conteiner podcast
    //                 container_podcast.style.display = "none";
    //                 controlPage[i] = false;
    //                 break;
    //         }
    //     }
    // }
    container_podcast.style.display = "none";
    container_atividades.style.display = "none";
    container_pilulas.style.display = "none";
    container_introducao.style.display = "none";

}




//Animação navbar
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

//Animação Pílulas


