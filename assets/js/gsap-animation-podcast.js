var podcast_1 = document.querySelector(".podcast_1");
var podcast_2 = document.querySelector(".podcast_2");
var podcast_3 = document.querySelector(".podcast_3");

function spotifyOption(op){
    var tl = gsap.timeline();
    tl.set(podcast_1, {duration: 1, display: 'none', opacity: 0})
      .set(podcast_2, {duration: 1, display: 'none', opacity: 0})
      .set(podcast_3, {duration: 1, display: 'none', opacity: 0});
    if(op == 'podcast1'){
        tl.to(podcast_1, {display: 'flex', duration: 1, opacity: 1})
    } else if(op == 'podcast2'){
        tl.to(podcast_2, {display: 'flex', duration: 1, opacity: 1})
    } else if(op == 'podcast3'){
        tl.to(podcast_3, {display: 'flex', duration: 1, opacity: 1})
    }
}
