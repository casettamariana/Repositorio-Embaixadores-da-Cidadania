var podcast_1 = document.querySelector(".podcast_1");
var podcast_2 = document.querySelector(".podcast_2");
var podcast_3 = document.querySelector(".podcast_3");
var podcast_4 = document.querySelector(".podcast_4");
var podcast_5 = document.querySelector(".podcast_5");

function spotifyOption(op){
    var tl = gsap.timeline();
    tl.set(podcast_1, {display: 'none', opacity: 0})
      .set(podcast_2, {display: 'none', opacity: 0})
      .set(podcast_3, {display: 'none', opacity: 0})
      .set(podcast_4, {display: 'none', opacity: 0})
      .set(podcast_5, {display: 'none', opacity: 0});
    if(op == 'podcast1'){
        tl.to(podcast_1, {display: 'block', duration: 0.5, opacity: 1});
    } else if(op == 'podcast2'){
        tl.to(podcast_2, {display: 'block', duration: 0.5, opacity: 1});
    } else if(op == 'podcast3'){
        tl.to(podcast_3, {display: 'block', duration: 0.5, opacity: 1});
    } else if(op == 'podcast4'){
        tl.to(podcast_4, {display: 'block', duration: 0.5, opacity: 1});
    } else if(op == 'podcast5'){
        tl.to(podcast_5, {display: 'block', duration: 0.5, opacity: 1});
    }
}

function openPlataf(plataf){
    if(plataf == 'deezer'){
        window.open("https://www.deezer.com/br/");
    } else if(plataf == 'google-podcasts'){
        window.open("https://podcasts.google.com/");
    }
    else if(plataf == 'soundcloud'){
        window.open("https://soundcloud.com/");
    }
}