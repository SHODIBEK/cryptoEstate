import './vendor';
import './helpers';
import './components/vimeo';
import './components/accardion';
import './components/headerFixed';
import './components/closeCookie';
import './components/sliders';
import modal from './components/modal';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import scrollToAnchor from './modules/scrollToAnchor';
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";
import ru from "@fancyapps/ui/src/Fancybox/l10n/ru";

Fancybox.bind("[data-fancybox]", {
  l10n: ru,
});

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
modal.init();

const calcContainer = () => {
  const container = $('.container');
  let containerLeft = container.offset().left;

  console.log(containerLeft)

  return containerLeft
}

const addBodyVar = () => {
  $('body').css('--container-position', `${calcContainer()}px`)
}

addBodyVar()
$(window).resize(function() {
  addBodyVar();
});