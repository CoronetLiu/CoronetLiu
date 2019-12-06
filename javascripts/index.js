/*
* Author: CoronetLiu   2018/6/12
*/

$(function() {
  $('#control').on('click', function() {
    var audio = $('#audio')[0];
    if ($(this).attr('data-id') === 'on') {
      $(this).attr('data-id', 'off');
      this.style.backgroundImage = 'url(\'./resource/images/pause.png\')';
      audio.pause();
    } else {
      $(this).attr('data-id', 'on');
      this.style.backgroundImage = 'url(\'./resource/images/play.png\')';
      audio.play();
    }
  });
});//$function
