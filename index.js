const messages = [
  "God is with you every step of the way.",
  "You are not forgotten — God knows your name.",
  "Even when life feels heavy, God carries you.",
  "God's timing is perfect, even when it feels slow.",
  "You are deeply loved more than you know.",
];

const textBox = document.querySelector(".write-ups");
let index = 0;
let bgIndex = 0;

// Function to change text + background
function changeContent() {
  // fade out text
  textBox.style.opacity = 0;

  setTimeout(() => {
    // Change text
    index = (index + 1) % messages.length;
    textBox.textContent = messages[index];

    // Change background

    // fade in
    textBox.style.opacity = 1;
  }, 1500); // matches the fade-out duration
}
setInterval(changeContent, 4000);
const openMenu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".mobile-menu-box");
const notificationBox = document.querySelector(".notification-box");
document.querySelectorAll("ul li").forEach((btn) => {
  btn.addEventListener("click", () => {
    notificationBox.style = "display:flex";
    setTimeout(() => {
      notificationBox.style = "display:none";
    }, 1000);
  });
});
document.querySelector(".close-notification").addEventListener("click", () => {
  notificationBox.style = "display:none";
});

openMenu.addEventListener("click", () => {
  window.alert("button - clicked");
  openMenu.classList.remove("bx-menu");
  menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  openMenu.classList.add("bx-menu");
  menu.classList.remove("active");
});

menu.addEventListener("click", (e) => {
  if (e.target === menu) {
    openMenu.classList.add("bx-menu");
    menu.classList.remove("active");
  }
});
