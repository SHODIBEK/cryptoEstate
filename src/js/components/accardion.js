const ToggleAccardion = (e) => {
  let $this = $(e.currentTarget);

  $this.toggleClass('is-active');
  $this.find('.accardion__body').slideToggle();

  $this.siblings().removeClass('is-active');
  $this.siblings().find('.accardion__body').slideUp();
}

$('.js-toggle').on('click', ToggleAccardion);