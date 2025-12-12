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
const notificationBox = document.querySelector(".notification-box");
document.querySelectorAll("ul li").forEach((btn) => {
  btn.addEventListener("click", () => {
    notificationBox.style = "display:flex";
    // notificationBox.classList.remove("hide-item");
    // notificationBox(".notification-box").classList.add("view-item-flex");
  });
});
document.querySelector(".close-notification").addEventListener("click", () => {
  notificationBox.style = "display:none";
  // notificationBox.classList.add("hide-item");
  // notificationBox(".notification-box").classList.remove("view-item-flex");
});
