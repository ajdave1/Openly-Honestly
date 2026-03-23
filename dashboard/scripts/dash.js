import { controllers } from "./functions/action.js";
const { getdevotions } = controllers;

console.log(getdevotions());

const editButtons = document.querySelectorAll("#edit-buttons");
const editContainer = document.querySelector(".pop-up-container");

editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let page = button.dataset.edit;

    let week_topics = document.querySelector(".update-weekly-topics");

    let daily_devotions = document.querySelector(".update-daily-devotions");

    editContainer.style = "display:flex;";

    if (page == "week") {
      daily_devotions.classList.add("hide-item");
      if (week_topics.classList.contains("hide-item")) {
        week_topics.classList.remove("hide-item");
      }
    } else if (page == "devotions") {
      week_topics.classList.add("hide-item");
      if (daily_devotions.classList.contains("hide-item")) {
        daily_devotions.classList.remove("hide-item");
      }
    }
  });
});

document.querySelector(".close-pop-up").addEventListener("click", () => {
  editContainer.style = "display:none";
});

document.getElementById("update-devotion").addEventListener("click", (E) => {
  window.alert("hey");
  const prayer = document.querySelector("#prayer-input");
  const declaration = document.querySelector("#declaration-input");
  const topic = document.querySelector("#devotion-topic-input");
  const challenge = document.querySelector("#prayer-input");
  const reflection = tinymce.get("my-devotion-textarea").getContent();
  const bible_verse = document.querySelector("#devotion-bible-verse-input");

  console.log(prayer, declaration, topic, challenge, bible_verse);
  console.log(`THIS IS TINYMCE`, reflection);
});

const mobileMenu = document.querySelector(".mobile-menu-box");
document.querySelector(".open-side-menu").addEventListener("click", () => {
  mobileMenu.style = "display:flex";
});

document.querySelector(".close-side-menu").addEventListener("click", () => {
  mobileMenu.style = "display:none";
});
