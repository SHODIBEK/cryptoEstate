import helpers from "../helpers";

const init = () => {
	helpers.$document
		.on("click", ".js-modal-open", (e) => {
			e.preventDefault();
			e.stopPropagation();

			const id = $(e.currentTarget).attr("href");

			$(id).fadeIn().addClass("is-active");

			helpers.lockScroll(
				true,
				helpers.$header.find(".modal__block"),
				".modal"
			);

		})
		.not(".js-to-anchor");
};

const closeModal = () => {
	$('.modal').fadeOut().removeClass("is-active");
	helpers.lockScroll(false, helpers.$header.find(".modal__block"), ".modal");
};

$(document).on("mouseup", function (e) {
	let targetId = $('.modal__block');
	if (!targetId.is(e.target) && targetId.has(e.target).length === 0) {
		closeModal();
	}
});

$('.js-modal-close').on('click', closeModal)

helpers.$document.on('keydown', function(e) {
	if( e.keyCode == 27 ){
		closeModal();
	}
});

export default {
	init,
	closeModal
};
