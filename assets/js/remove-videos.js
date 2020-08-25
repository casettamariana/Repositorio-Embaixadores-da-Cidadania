$(document).ready(function () {
    $('.your-element').slick({
        infinite: true,
        mobileFirst: true,
        touchMove: true,
        autoplay: true,
    });
});
/*Pausa video do youtube*/
$('.title_indicate').click(function () {
    $('.video_pilula').each(function () {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' +
            '","args":""}', '*');
    })
});
$('.option_videos_outros').click(function () {
    $('.video_videocast').each(function () {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' +
            '","args":""}', '*');
    });
    $('.video_webinar').each(function () {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' +
            '","args":""}', '*');
    });
    $('.video_live').each(function () {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' +
            '","args":""}', '*');
    });
});
$('.ul__navbar').click(function () {
    $('.video_pilula').each(function () {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' +
            '","args":""}', '*');
    });
    $('.video_videocast').each(function () {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' +
            '","args":""}', '*');
    });
    $('.video_webinar').each(function () {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' +
            '","args":""}', '*');
    });
    $('.video_live').each(function () {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' +
            '","args":""}', '*');
    });
    $('.video_jornada').each(function () {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' +
            '","args":""}', '*');
    });
});
/*Recarrega iframe spotify*/
$('.title_indicate').click(function () {
    /* $("#podcast-1").remove(); */
    $('.div_podcast').each(function () {
        $('#podcast-1', window.parent.document).attr('src', $('#podcast-1', window.parent
            .document).attr('src'));
        $('#podcast-2', window.parent.document).attr('src', $('#podcast-2', window.parent
            .document).attr('src'));
        $('#podcast-3', window.parent.document).attr('src', $('#podcast-3', window.parent
            .document).attr('src'));
        $('#podcast-4', window.parent.document).attr('src', $('#podcast-4', window.parent
            .document).attr('src'));
        $('#podcast-5', window.parent.document).attr('src', $('#podcast-5', window.parent
            .document).attr('src'));
    })
});
/*Recarrega iframe LIVE FACEBOOK*/
$('.title_indicate_vid_outros').click(function () {
    /* $("#podcast-1").remove(); */
    /* alert('LIVE FACEBOOK') */
    $('.indicate_text_vid_outros').each(function () {
        $('#live-fb-1', window.parent.document).attr('src', $('#live-fb-1', window.parent.document).attr('src'));
        $('#live-fb-2', window.parent.document).attr('src', $('#live-fb-2', window.parent.document).attr('src'));
        $('#live-fb-3', window.parent.document).attr('src', $('#live-fb-3', window.parent.document).attr('src'));
    })
});
$('.ul__navbar').click(function () {
    /* $("#podcast-1").remove(); */
   /*  alert('LIVE FACEBOOK') */
    $('.indicate_text_vid_outros').each(function () {
        $('#live-fb-1', window.parent.document).attr('src', $('#live-fb-1', window.parent.document).attr('src'));
        $('#live-fb-2', window.parent.document).attr('src', $('#live-fb-2', window.parent.document).attr('src'));
        $('#live-fb-3', window.parent.document).attr('src', $('#live-fb-3', window.parent.document).attr('src'));
    })
});
$('.ul__navbar').click(function () {
    /* $("#podcast-1").remove(); */
    $('.div_podcast').each(function () {
        $('#podcast-1', window.parent.document).attr('src', $('#podcast-1', window.parent
            .document).attr('src'));
        $('#podcast-2', window.parent.document).attr('src', $('#podcast-2', window.parent
            .document).attr('src'));
        $('#podcast-3', window.parent.document).attr('src', $('#podcast-3', window.parent
            .document).attr('src'));
        $('#podcast-4', window.parent.document).attr('src', $('#podcast-4', window.parent
            .document).attr('src'));
        $('#podcast-5', window.parent.document).attr('src', $('#podcast-5', window.parent
            .document).attr('src'));
    })
});

/* $('#myStopClickButton').click(function(){
  $('.video_pilula').each(function(){
    $(this).stopVideo();
  });
}); */