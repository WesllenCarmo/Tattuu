let button = document.getElementById("mainButton");
let arrowIcon = document.querySelector("i");
button.addEventListener("mouseover", function () {
  arrowIcon.style.color = "var(--textDarkColor)";
});
button.addEventListener("mouseleave", function () {
  arrowIcon.style.color = "var(--textColor)";
});

function reg() {
  window.captureEvents(Event.SUBMIT);
  window.onsubmit = hit;
}
function hit() {
  let notification = document.getElementById("notificationSection");
  notification.style.display = "flex";
  setTimeout(() => {
    notification.style.display = "none";
  }, 5000);
}
const barMenu = document.querySelector(".barMenu");
const menu = document.querySelector(".menu")
barMenu.addEventListener("click", (e) => {
    if (menu.style.display == "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
})
window.onresize = function () {
  menu.style.display = "flex";
};
