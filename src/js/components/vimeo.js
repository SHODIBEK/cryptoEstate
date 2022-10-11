import Player from '@vimeo/player';

const iframes = document.querySelectorAll('.js-vimeo');
let playVideo = false;

iframes.forEach((element) => {
  const player = new Player(element, {
    loop: true,
    controls: false,
    title: false
  });

  player.setColor('#9978cf');

  $('.video').on('click', () => {
    if(!playVideo) {
      player.play();
      playVideo = true;
      player.element.parentElement.classList.add('is-active');
    } else {
      player.pause();
      playVideo = false;
    }
  });

  player.on('dblclick', () => {
    let fullscreen = false;
    if (!fullscreen) {
      player.requestFullscreen();
      fullscreen = true;
    } else {
      player.exitFullscreen();
      fullscreen = false;
    }
  });

  player.on('play', function() {
    playVideo = true;
    ToggleActiveVimeo(player);
  });

  player.on('pause', function() {
    playVideo = false;
    ToggleActiveVimeo(player);
  });

  player.on('ended', function() {
    playVideo = false;
    ToggleActiveVimeo(player);
  });
})

const ToggleActiveVimeo = (element) => {
  if(playVideo) {
    element.element.parentElement.classList.add('is-active');
  } else {
    element.element.parentElement.classList.remove('is-active');
  }
} 