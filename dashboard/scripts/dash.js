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
