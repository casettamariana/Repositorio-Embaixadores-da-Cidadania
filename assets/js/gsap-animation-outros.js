
function displayVideoOutros(video) {

    const video = {
        {
            nameClassVideo: "webnar_item1",
            idVideo: document.querySelector(".webnar_item1"),
            opVideo: document.querySelector(".op_webnar_outros_1"),
            ballVideo: document.getElementById('ball_web_1')
        },
        {
            nameClassVideo: "videocast__item1",
            idVideo: document.querySelector(".videocast__item1"),
            opVideo: document.querySelector(".op_vid_outros_1"),
            ballVideo: document.getElementById('ball_vid_1')
        },
        {
            nameClassVideo: "live__item1",
            idVideo: document.querySelector(".live__item1"),
            opVideo: document.querySelector(".op_live_outros_1"),
            ballVideo: document.getElementById('ball_live_1')
        },
        {
            nameClassVideo: "live__item2",
            idVideo: document.querySelector(".live__item2"),
            opVideo: document.querySelector(".op_live_outros_2"),
            ballVideo: document.getElementById('ball_live_2')
        },
        {
            nameClassVideo: "live__item3",
            idVideo: document.querySelector(".live__item3"),
            opVideo: document.querySelector(".op_live_outros_3"),
            ballVideo: document.getElementById('ball_live_3')
        },
        {
            nameClassVideo: "live__item4",
            idVideo: document.querySelector(".live__item4"),
            opVideo: document.querySelector(".op_live_outros_4"),
            ballVideo: document.getElementById('ball_live_4')
        },
        {
            nameClassVideo: "entrevista__item1",
            idVideo: document.querySelector(".entrevista__item1"),
            opVideo: document.querySelector(".op_entrevista_outros_1"),
            ballVideo: document.getElementById('ball_entrevista_1')
        },
        {
            nameClassVideo: "oficina__item2",
            idVideo: document.querySelector(".oficina__item2"),
            opVideo: document.querySelector(".op_oficina_outros_2"),
            ballVideo: document.getElementById('ball_oficina_2')
        },
        {
            nameClassVideo: "tiraDuvida__item1",
            idVideo: document.querySelector(".tiraDuvida__item1"),
            opVideo: document.querySelector(".op_tiraDuvida_outros_1"),
            ballVideo: document.getElementById('ball_tiraDuvida_1')
        },
        {
            nameClassVideo: "tiraDuvida__item2",
            idVideo: document.querySelector(".tiraDuvida__item2"),
            opVideo: document.querySelector(".op_tiraDuvida_outros_2"),
            ballVideo: document.getElementById('ball_tiraDuvida_2')
        },
        {
            nameClassVideo: "outros__item1",
            idVideo: document.querySelector(".outros__item1"),
            opVideo: document.querySelector(".op_outros_outros_1"),
            ballVideo: document.getElementById('ball_outros_1')
        }
        };
    
    

    var titulo = document.querySelector('.title_videos_outros');

    var tl = gsap.timeline();

    var myMap = new Map();

    myMap.set(video, {function() {
        tl.set(video.idVideo, {
            display: 'none',
            opacity: 0
        });
        video.idVideo.classList.remove('highlight_op_outros')
    }});

    // tl.set(video_1, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     .set(video_2, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     .set(video_3, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     .set(video_4, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     .set(video_5, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     .set(video_6, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     .set(video_7, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     .set(video_8, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     .set(video_9, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     .set(video_10, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     .set(video_11, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     .set(video_12, {
    //         display: 'none',
    //         opacity: 0
    //     })
    //     ;

        // div_op_1.classList.remove('highlight_op_outros');
        // div_op_2.classList.remove('highlight_op_outros');
        // div_op_3.classList.remove('highlight_op_outros');
        // div_op_4.classList.remove('highlight_op_outros');
        // div_op_5.classList.remove('highlight_op_outros');
        // div_op_6.classList.remove('highlight_op_outros');
        // div_op_7.classList.remove('highlight_op_outros');
        // div_op_8.classList.remove('highlight_op_outros');
        // div_op_9.classList.remove('highlight_op_outros');
        // div_op_10.classList.remove('highlight_op_outros');
        // div_op_11.classList.remove('highlight_op_outros');
        // div_op_12.classList.remove('highlight_op_outros');
        

        
        // if (video == 'op_web_1') {
        //     tl.to(video_1, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_1.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "WEBINAR";
        // } else if (video == 'op_videocast_1') {
        //     tl.to(video_2, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_2.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "VIDEOCAST";
        // } else if (video == 'op_live_1') {
        //     tl.to(video_3, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_3.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "LIVE FACEBOOK";
        // }
        // else if (video == 'op_live_2') {
        //     tl.to(video_4, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_4.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "LIVE FACEBOOK";
        // }
        // else if (video == 'op_live_3') {
        //     tl.to(video_5, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_5.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "LIVE FACEBOOK";
        // }
        // else if (video == 'op_live_4') {
        //     tl.to(video_6, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_6.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "LIVE YOUTUBE";
        // }
        // else if (video == 'op_entrevista_1') {
        //     tl.to(video_7, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_7.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "ENTREVISTAS";
        // }
        // else if (video == 'op_oficina_1') {
        //     tl.to(video_8, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_8.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "OFICINAS";
        // }
        // else if (video == 'op_oficina_2') {
        //     tl.to(video_9, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_9.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "OFICINAS";
        // }
        // else if (video == 'op_tiraDuvida_1') {
        //     tl.to(video_10, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_10.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "Evento Tira Duvidas";
        // }
        // else if (video == 'op_tiraDuvida_2') {
        //     tl.to(video_11, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_11.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "Evento Tira Duvidas";
        // }
        // else if (video == 'op_outros_1') {
        //     tl.to(video_12, {
        //         display: 'flex',
        //         duration: 0.5,
        //         opacity: 1
        //     });
        //     div_op_12.classList.add('highlight_op_outros');
        //     titulo.innerHTML = "Outros";
        // }
    }



function btnHoverOutros(op) {
    var img_op_1 = document.getElementById('ball_web_1');
    var img_op_2 = document.getElementById('ball_vid_1');
    var img_op_3 = document.getElementById('ball_live_1');
    var img_op_4 = document.getElementById('ball_live_2');
    var img_op_5 = document.getElementById('ball_live_3');
    var img_op_6 = document.getElementById('ball_live_4');
    var img_op_7 = document.getElementById('ball_entrevista_1');
    var img_op_8 = document.getElementById('ball_oficina_1');
    var img_op_9 = document.getElementById('ball_oficina_2');
    var img_op_10 = document.getElementById('ball_tiraDuvida_1');
    var img_op_11 = document.getElementById('ball_tiraDuvida_2');
    var img_op_12 = document.getElementById('ball_outros_1');

    if (op == 'op_web_1') {
        img_op_1.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_videocast_1') {
        img_op_2.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_live_1') {
        img_op_3.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_live_2') {
        img_op_4.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_live_3') {
        img_op_5.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_live_4') {
        img_op_6.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_entrevista_1') {
        img_op_7.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_oficina_1') {
        img_op_8.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_oficina_2') {
        img_op_9.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_tiraDuvida_1') {
        img_op_10.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_tiraDuvida_2') {
        img_op_11.src = "./assets/img/marcador/play-100px.png";
    } else if (op == 'op_outros_1') {
        img_op_12.src = "./assets/img/marcador/play-100px.png";
    }
}

function btnBackOutros(op) {
    var img_op_1 = document.getElementById('ball_web_1');
    var img_op_2 = document.getElementById('ball_vid_1');
    var img_op_3 = document.getElementById('ball_live_1');
    var img_op_4 = document.getElementById('ball_live_2');
    var img_op_5 = document.getElementById('ball_live_3');
    var img_op_6 = document.getElementById('ball_live_4');
    var img_op_7 = document.getElementById('ball_entrevista_1');
    var img_op_8 = document.getElementById('ball_oficina_1');
    var img_op_9 = document.getElementById('ball_oficina_2');
    var img_op_10 = document.getElementById('ball_tiraDuvida_1');
    var img_op_11 = document.getElementById('ball_tiraDuvida_2');
    var img_op_12 = document.getElementById('ball_outros_1');


    if (op == 'op_web_1') {
        img_op_1.src = "./assets/img/marcador/1-100px.png";
    } else if (op == 'op_videocast_1') {
        img_op_2.src = "./assets/img/marcador/1-100px.png";
    } else if (op == 'op_live_1') {
        img_op_3.src = "./assets/img/marcador/1-100px.png";
    } else if (op == 'op_live_2') {
        img_op_4.src = "./assets/img/marcador/2-100px.png";
    } else if (op == 'op_live_3') {
        img_op_5.src = "./assets/img/marcador/3-100px.png";
    } else if (op == 'op_live_4') {
        img_op_6.src = "./assets/img/marcador/4-100px.png";
    } else if (op == 'op_entrevista_1') {
        img_op_7.src = "./assets/img/marcador/1-100px.png";
    } else if (op == 'op_oficina_1') {
        img_op_8.src = "./assets/img/marcador/1-100px.png";
    } else if (op == 'op_oficina_2') {
        img_op_9.src = "./assets/img/marcador/2-100px.png";
    } else if (op == 'op_tiraDuvida_1') {
        img_op_10.src = "./assets/img/marcador/1-100px.png";
    } else if (op == 'op_tiraDuvida_2') {
        img_op_11.src = "./assets/img/marcador/2-100px.png";
    } else if (op == 'op_outros_1') {
        img_op_12.src = "./assets/img/marcador/1-100px.png";
    }
}
