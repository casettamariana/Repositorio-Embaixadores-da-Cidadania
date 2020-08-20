var podcast_1 = document.querySelector(".podcast_1");
var podcast_2 = document.querySelector(".podcast_2");
var podcast_3 = document.querySelector(".podcast_3");
var podcast_4 = document.querySelector(".podcast_4");
var podcast_5 = document.querySelector(".podcast_5");

var op_pod_1 = document.querySelector(".opition_podcast-1");
var op_pod_2 = document.querySelector(".opition_podcast-2");
var op_pod_3 = document.querySelector(".opition_podcast-3");
var op_pod_4 = document.querySelector(".opition_podcast-4");
var op_pod_5 = document.querySelector(".opition_podcast-5");

function spotifyOption(op) {
    var tl = gsap.timeline();
    tl.set(podcast_1, {display: 'none',opacity: 0})
        .set(podcast_2, {display: 'none',opacity: 0})
        .set(podcast_3, {display: 'none',opacity: 0})
        .set(podcast_4, {display: 'none',opacity: 0})
        .set(podcast_5, {display: 'none',opacity: 0});

        op_pod_1.classList.remove('highlight_op');
        op_pod_2.classList.remove('highlight_op');
        op_pod_3.classList.remove('highlight_op');
        op_pod_4.classList.remove('highlight_op');
        op_pod_5.classList.remove('highlight_op');

    if (op == 'podcast1') {
        tl.to(podcast_1, {display: 'block', duration: 0.5, opacity: 1});
        op_pod_1.classList.add('highlight_op');
    } else if (op == 'podcast2') {
        tl.to(podcast_2, {display: 'block', duration: 0.5, opacity: 1});
        op_pod_2.classList.add('highlight_op');
    } else if (op == 'podcast3') {
        tl.to(podcast_3, {display: 'block', duration: 0.5, opacity: 1});
        op_pod_3.classList.add('highlight_op');
    } else if (op == 'podcast4') {
        tl.to(podcast_4, {display: 'block', duration: 0.5, opacity: 1});
        op_pod_4.classList.add('highlight_op');
    } else if (op == 'podcast5') {
        tl.to(podcast_5, {display: 'block', duration: 0.5,opacity: 1});
        op_pod_5.classList.add('highlight_op');
    }
}

function openPlataf(plataf) {
    if (plataf == 'google-podcasts') {
        window.open("https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yNzRkM2E5Yy9wb2RjYXN0L3Jzcw==");
    } else if (plataf == 'anchor') {
        window.open("https://anchor.fm/cgegoias");
    } else if (plataf == 'breaker') {
        window.open("https://www.breaker.audio/embaixadores-da-cidadania");
    } else if (plataf == 'overcast') {
        window.open("https://overcast.fm/itunes1519518183/embaixadores-da-cidadania");
    } else if (plataf == 'pocketCasts') {
        window.open("https://pca.st/1vbji782");
    } else if (plataf == 'radioPublic') {
        window.open("https://radiopublic.com/embaixadores-da-cidadania-G393AY");
    }
}