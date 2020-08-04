var video_1 = document.querySelector(".pilula-1");
var video_2 = document.querySelector(".pilula-2");
var video_3 = document.querySelector(".pilula-3");

function displayVideo(video){
    var tl = gsap.timeline();
    tl.set(video_1, {display: 'none', opacity: 0})
        .set(video_2, {display: 'none', opacity: 0})
        .set(video_3, {display: 'none', opacity: 0})
        
        if(video == 'op_1'){
            tl.to(video_1, {display: 'block', duration: 0.5, opacity: 1});
        }else if(video == 'op_2'){
            tl.to(video_2, {display: 'block', duration: 0.5, opacity: 1});
        }else if(video == 'op_3'){
            tl.to(video_3, {display: 'block', duration: 0.5, opacity: 1});
        }
}

var img_op_1 = document.getElementById('ball_1');
var img_op_2 = document.getElementById('ball_2');
var img_op_3 = document.getElementById('ball_3');
function btnHover(op){
    if(op == 'op_1'){
        img_op_1.src = "./assets/img/marcador/play-100px.png";
    }else if(op == 'op_2'){
        img_op_2.src = "./assets/img/marcador/play-100px.png";
    }else if(op == 'op_3'){
        img_op_3.src = "./assets/img/marcador/play-100px.png";
    }
}

function btnBack(op){
    if(op == 'op_1'){
        img_op_1.src = "./assets/img/marcador/1-100px.png";
    }else if(op == 'op_2'){
        img_op_2.src = "./assets/img/marcador/2-100px.png";
    }else if(op == 'op_3'){
        img_op_3.src = "./assets/img/marcador/3-100px.png";
    }
}