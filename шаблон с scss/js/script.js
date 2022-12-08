console.log("Hello world");
const menuIcon = document.querySelector(".header__menu__icon");
const menu = document.querySelector(".header__menu");
menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");
  menu.classList.toggle("active");
});
//////////////////////////////////////////
//Изменение цветовой ттемы титульника
const borderText = document.querySelector(".main-screen__title");

const colors = [
  "3px #FFC326",
  "3px #BB9A47",
  "3px #9F760B",
  "3px #FFDE87",
  "3px #FFF3D5",
  "3px #DADEFE",
  "3px #97A3FE",
  "3px #5460B6",
  "3px #4157F9",
  "3px #13239C",
];

colors.forEach((color, i) =>
  setInterval(() => {
    borderText.style.WebkitTextStroke = color;
  }, 500 * (i + 1))
);

/////Вращение кругляшка

const object = document.querySelector(".fon-object");
function setData() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = seconds + 2;
  object.style.transform = `rotate(${secondDegrees}deg)`;
}
setInterval(setData, 1000);
///////scrjolll widow

const offerButton = document.querySelector(".offer__button[data-goto]");

offerButton.addEventListener("click", onOfferButtonClick);
function onOfferButtonClick(e) {
  const offerButton = e.target;
  if (
    offerButton.dataset.goto &&
    document.querySelector(offerButton.dataset.goto)
  ) {
    const gotoBlock = document.querySelector(offerButton.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
    // -
    // document.querySelector("header").offsetHeight;
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}
