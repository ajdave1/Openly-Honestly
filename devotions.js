const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];

async function getdevotion() {
  let data = await fetch("./devotions.json");

  let devotions = await data.json();
  const devotion = devotions.find((d) => d.date == today);

  return devotion;
}

const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const todaysdate = months[date.getMonth()] + " " + date.getDate();
console.log(date.getMonth());

const renderDevotion = (devotion) => {
  const weekTheme = document.querySelector(".week-theme");
  const challenge = document.querySelector(".challenge");
  const devotionHeader = document.querySelector(".devotion-header");
  const todayDevotion = document.querySelector(".today-devotion");
  const reflection = document.querySelector(".reflection");
  const prayer = document.querySelector(".prayer");
  const declaration = document.querySelector(".declaration");

  devotionHeader.innerHTML = `
 <div class="week-header box">This week-${devotion.week.topic}</div>
        <h1 class="box todays-date">${todaysdate}</h1>
        <div class="box topic">
          <strong> </strong> ${devotion.content.topic}
        </div>


  `;
  weekTheme.innerHTML = `
    <h2>Theme</h2>
          <p>
          ${devotion.week.thought}
            <br />
            <strong class="week-verse">
              "${devotion.week.themeVerse} " <small>- ${devotion.week.verse}</small>
            </strong>
          </p>
  `;
  todayDevotion.innerHTML = `
   <div class="day-verse">
            <h1>Today</h1>
            <h3>${devotion.content.topic}</h3>
            <div>
              <strong>Scripture - </strong>
              <span>
                “${devotion.content.scripture}” -
                <small>${devotion.content.verse}</small></span
              >
            </div>
          </div>`;
  reflection.innerHTML = `
             <h3>REFLECTION</h3>
          <p>
          ${devotion.content.reflection}
          </p>
          
          
          `;
  prayer.innerHTML = `
             <h3>PRAYER</h3>
          <p>
          ${devotion.prayer}
          </p>
            <strong>Amen</strong>
          
          
          `;
  challenge.innerHTML = `
             <h3>CHALLENGE</h3>
          <p>
          ${devotion.challenge}
          </p>
          
          
          
          `;
  if (devotion.declaration) {
    declaration.innerHTML = `
             <h3>Declaration</h3>
          <p>
          ${devotion.declaration}
          </p>`;
  }
};

async function start() {
  const devotion = await getdevotion();
  if (devotion) {
    renderDevotion(devotion);
  } else {
    document.querySelector(".devotion").innerHTML = `
    <div class="notdevotion">
    <h1> Devotion starts Jan 1, 2026 at 00.00 </h1>
    <p>Don't miss a day !😃 </p> <br>
    <p><i>Stay blessed...</i></p>
</div>
    `;
  }
}
start();
const switchMode = document.querySelector(".switch-mode");
switchMode.addEventListener("click", () => {
  console.log("clicked");
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  } else if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  }
});
