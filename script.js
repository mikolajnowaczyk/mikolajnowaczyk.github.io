//Hamburger and menu scrolling
const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementsByClassName("dropdown")[0];

function toggleHamburger() {
  dropdown.classList.toggle("dropdown-active");
}
hamburger.addEventListener("click", toggleHamburger);
//Scrolling
const navs = document.querySelectorAll(".navigation-item");
const sections = document.querySelectorAll("[data-section]");

navs.forEach((element, index) => {
  element.addEventListener("click", () => {
    dropdown.classList.toggle("dropdown-active");
    sections[index].scrollIntoView({
      block: "start",
      behavior: "smooth"
    })
  })
});

//Hero text
const heroNameSpan = document.getElementById("herotext");
const heroDescriptionSpan = document.getElementById("herodescription");
const caretName = document.getElementById("caret1");
const caretDescription = document.getElementById("caret2");
const heroTexts = ["Mikołaj Nowaczyk", "Junior Frontend Developer"];

const caret1TogglingIndex = setInterval(() => {
  caretName.classList.toggle("active");
}, 400);

let caret2TogglingIndex;

let textIndex = 0;
let nameFinished = false;
//Animate name
setTimeout(() => {
  const typingNameInterval = setInterval(() => {
    heroNameSpan.textContent += heroTexts[0][textIndex];
    textIndex++;
    if (textIndex >= heroTexts[0].length) {
      clearInterval(typingNameInterval);
      setTimeout(() => {
        clearInterval(caret1TogglingIndex);
        caretName.classList.remove("active");
        nameFinished = true;
        textIndex = 0;
        caret2TogglingIndex = setInterval(() => {
          caretDescription.classList.toggle("active");
        }, 400);
      }, 1250);
    }
  }, 100);
}, 1500);

//Animate description
const typingDescriptionWaiting = setInterval(() => {
  if (nameFinished) {
    setTimeout(() => {
      const typingDescriptionInterval = setInterval(() => {
        heroDescriptionSpan.textContent += heroTexts[1][textIndex];
        textIndex++;
        if (textIndex >= heroTexts[1].length) {
          clearInterval(typingDescriptionInterval);
          setTimeout(() => {
            clearInterval(caret2TogglingIndex);
            caretDescription.classList.remove("active");
          }, 1300);
        }
      }, 100);
    }, 1500);
    clearInterval(typingDescriptionWaiting);
  }
}, 50);