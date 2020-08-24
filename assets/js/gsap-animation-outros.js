
function displayVideoOutros(video) {
    var video_1 = document.querySelector(".webnar_item1");
    var video_2 = document.querySelector(".videocast__item1");
    var video_3 = document.querySelector(".live__item1");
    
    var div_op_1 = document.querySelector(".op_webnar_outros_1");
    var div_op_2 = document.querySelector(".op_vid_outros_2");
    var div_op_3 = document.querySelector(".op_live_outros_3");

    var titulo = document.querySelector('.title_videos_outros');

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

        div_op_1.classList.remove('highlight_op_outros');
        div_op_2.classList.remove('highlight_op_outros');
        div_op_3.classList.remove('highlight_op_outros');


    if (video == 'op_web_1') {
        tl.to(video_1, {
            display: 'flex',
            duration: 0.5,
            opacity: 1
        });
        div_op_1.classList.add('highlight_op_outros');
        titulo.innerHTML = "WEBNAR";
    } else if (video == 'op_videocast_1') {
        tl.to(video_2, {
            display: 'flex',
            duration: 0.5,
            opacity: 1
        });
        div_op_2.classList.add('highlight_op_outros');
        titulo.innerHTML = "VIDEOCAST";
    } else if (video == 'op_live_1') {
        tl.to(video_3, {
            display: 'flex',
            duration: 0.5,
            opacity: 1
        });
        div_op_3.classList.add('highlight_op_outros');
        titulo.innerHTML = "LIVE FACEBOOK";
    }
}



function btnHoverOutros(op) {
    var img_op_1 = document.getElementById('ball_web_1');
    var img_op_2 = document.getElementById('ball_vid_1');
    var img_op_3 = document.getElementById('ball_live_1');
    if (op == 'op_web_1') {
        img_op_1.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_videocast_1') {
        img_op_2.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_live_1') {
        img_op_3.src = "./assets/img/marcador/play-100px.png";
    }
}

function btnBackOutros(op) {
    var img_op_1 = document.getElementById('ball_web_1');
    var img_op_2 = document.getElementById('ball_vid_1');
    var img_op_3 = document.getElementById('ball_live_1');
    if (op == 'op_web_1') {
        img_op_1.src = "./assets/img/marcador/1-100px.png";
    } else if (op == 'op_videocast_1') {
        img_op_2.src = "./assets/img/marcador/2-100px.png";
    } else if (op == 'op_live_1') {
        img_op_3.src = "./assets/img/marcador/3-100px.png";
    }
}
