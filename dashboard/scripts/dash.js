const editButtons = document.querySelectorAll("#edit-buttons");

const editContainer = document.querySelector(".pop-up-container");

editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let page = button.dataset.edit;

    let week_topics = document.querySelector(".weekly-topics");

    let daily_devotions = document.querySelector(".daily-devotions");

    editContainer.style = "display:flex;";

    if (page == "week") {
      daily_devotions.classList.add("hide-item");
    } else if (page == "devotions") {
      week_topics.classList.add("hide-item");
    }
  });
});

document.querySelector(".close-pop-up").addEventListener("click", () => {
  editContainer.style = "display:none";
});
