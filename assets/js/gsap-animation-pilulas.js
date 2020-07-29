var video_1 = document.querySelector("#pilula-1-id");
var video_2 = document.querySelector("#pilula-2-id");
var video_3 = document.querySelector("#pilula-3-id");

function displayVideo(video){
    var tl = gsap.timeline();
    tl.set(video_1, {duration: 1, display: 'none', opacity: 0})
        .set(video_2, {duration: 1, display: 'none', opacity: 0})
        .set(video_3, {duration: 1, display: 'none', opacity: 0})
        
        if(video == 'op_1'){
            tl.to(video_1, {display: 'block', duration: 1, opacity: 1})
        }else if(video == 'op_2'){
            tl.to(video_2, {display: 'block', duration: 1, opacity: 1})
        }else if(video == 'op_3'){
            tl.to(video_3, {display: 'block', duration: 1, opacity: 1})
        }
}