/**
 * Created by CoronetLiu
 * 2019/12/6
 */

let rd = 0;
setInterval(function() {
  rd > 3 ? (rd = 0) : (rd += 1);
  $('#dqy').css({
    transform: 'rotateX(-35deg) rotateY(' + (rd * 90 - 45) + 'deg) scaleZ(1)',
  });
  for (let i = 0; i < $('.outer').length; i++) {
    if ($('.outer')[i].className.indexOf('active') !== -1) {
      $($('.outer')[i]).removeClass('active');
    } else {
      $($('.outer')[i]).addClass('active');
    }
  }
}, 2000);
