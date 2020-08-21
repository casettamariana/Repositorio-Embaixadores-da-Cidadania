
function displayVideoJorn(video) {
    var video_1 = document.querySelector(".video_jornada_1");
    var video_2 = document.querySelector(".video_jornada_2");
    var video_3 = document.querySelector(".video_jornada_3");
    
    var div_op_1 = document.querySelector(".option_jornada-1");
    var div_op_2 = document.querySelector(".option_jornada-2");
    var div_op_3 = document.querySelector(".option_jornada-3");
    var tl = gsap.timeline();
    tl.set(video_1, {
            display: 'none',
            opacity: 0
        })
        .set(video_2, {
            display: 'none',
            opacity: 0
        })
        .set(video_3, {
            display: 'none',
            opacity: 0
        });

        div_op_1.classList.remove('highlight_op');
        div_op_2.classList.remove('highlight_op');
        div_op_3.classList.remove('highlight_op');


    if (video == 'op_1') {
        tl.to(video_1, {
            display: 'flex',
            duration: 0.5,
            opacity: 1
        });
        div_op_1.classList.add('highlight_op');
    } else if (video == 'op_2') {
        tl.to(video_2, {
            display: 'flex',
            duration: 0.5,
            opacity: 1
        });
        div_op_2.classList.add('highlight_op');
    } else if (video == 'op_3') {
        tl.to(video_3, {
            display: 'flex',
            duration: 0.5,
            opacity: 1
        });
        div_op_3.classList.add('highlight_op');
    }
}



function btnHoverJorn(op) {
    var img_op_1 = document.getElementById('ball_j_1');
    var img_op_2 = document.getElementById('ball_j_2');
    var img_op_3 = document.getElementById('ball_j_3');
    if (op == 'op_1') {
        img_op_1.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_2') {
        img_op_2.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_3') {
        img_op_3.src = "./assets/img/marcador/play-100px.png";
    }
}

function btnBackJorn(op) {
    var img_op_1 = document.getElementById('ball_j_1');
    var img_op_2 = document.getElementById('ball_j_2');
    var img_op_3 = document.getElementById('ball_j_3');
    if (op == 'op_1') {
        img_op_1.src = "./assets/img/marcador/1-100px.png";
    } else if (op == 'op_2') {
        img_op_2.src = "./assets/img/marcador/2-100px.png";
    } else if (op == 'op_3') {
        img_op_3.src = "./assets/img/marcador/3-100px.png";
    }
}
