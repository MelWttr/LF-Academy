const ESC_KEYCODE = 27;

var logos = document.querySelectorAll('.logos__item');

var modal = document.querySelector(".modal");
var modalImage = modal.querySelector(".popup__image")
var overlay = modal.querySelector(".overlay");
var closeBtn = modal.querySelector(".popup__button");

logos.forEach(logo => {
  logo.addEventListener('click', () => {
    modalImage.src = logo.children[0].src;
    modalImage.alt = logo.children[0].alt;
    modal.classList.remove("hidden");
    document.addEventListener("keydown", onPopupEscPress)
  });
});

var closePopup = function () {
  modal.classList.add("hidden");
  document.removeEventListener("keydown", onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup)
