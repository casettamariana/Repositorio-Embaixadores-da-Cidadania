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

function fechaMenuNav(){
    console.log('Entrou no fechaMenuNav');
    menuBtn.classList.remove('open');
    slidebar.classList.remove('open_sl');
    menuOpen = false;
}

function pdf(ativ){

    if(ativ == 'atividade1'){
        window.open("https://www.estudantesdeatitude.go.gov.br/embaixadores/Atividade-Embaixadora-1.pdf", "", "");
    } else if(ativ == 'atividade2'){
        window.open("https://www.estudantesdeatitude.go.gov.br/embaixadores/Atividade-Embaixadora-2.jpeg", "", "");
    } else if(ativ == 'atividade3'){
        window.open("https://www.estudantesdeatitude.go.gov.br/embaixadores/Atividade-Embaixadora-3.jpeg", "", "");
    } else if(ativ == 'atividade4'){
        window.open("https://www.estudantesdeatitude.go.gov.br/embaixadores/Atividade-Embaixadora-3.jpeg", "", "");
    }
}

