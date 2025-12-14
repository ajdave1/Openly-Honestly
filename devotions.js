// import devotions from "./devotions.json";
// console.log(devotions);
const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];

async function getdevotion() {
  let data = await fetch("./devotions.json");

  let devotions = await data.json();
  const devotion = devotions.find((d) => d.date == today);

  return devotion;
}

const renderDevotion = (devotion) => {
  const weekTheme = document.querySelector(".week-theme");
  const weekVerse = document.querySelector(".week-verse");
  const devotionHeader = document.querySelector(".devotion-header");
  const todayDevotion = document.querySelector(".today-devotion");
  const reflection = document.querySelector(".reflection");
  const prayer = document.querySelector(".prayer");

  devotionHeader.innerHTML = `
 <div class="week-header box">This week-${devotion.week.topic}</div>
        <h1 class="box todays-date">${Date.now().toLocaleString()}</h1>
        <div class="box topic">
          <strong> Today - </strong> ${devotion.content.topic}
        </div>


  `;
  weekTheme.innerHTML = `
    <h2>Week: Theme</h2>
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
          ${devotion.content.prayer}
          </p>
            <strong>Amen</strong>
          
          
          `;
};

async function start() {
  const devotion = await getdevotion();
  if (devotion) {
    renderDevotion(devotion);
  } else {
    document.querySelector(".devotion").innerHTML = `
    <div class="notdevotion">
    <h1> Devotion starts Jan 1, 2026 at 0.00 </h1>
    <p>Don't miss a day !😃 </p> <br>
    <p><i>Stay blessed...</i></p>
</div>
    `;
  }
}
start();
// (async () => {

// })();
// let devotions = [
//   {
//     date: "12-12-20",
//     week: {
//       Topic: "Relationship and Friendship (JANUARY 1 – JANUARY 7)",
//       ThemeVerse:
//         " By this everyone will know that you are my disciples, if you love one another.",
//       verse: "John 13:35",
//       thought:
//         "Relationships are not optional in the Kingdom of God, they are essential. From the beginning, God designed humanity to thrive in connection. Whether in Eden’s garden or the upper room of Pentecost, divine purpose has always been revealed in community. This week, we journey into the heart of godly relationships, how they reflect Christ, bring healing, and shape our destiny.",
//     },
//     content: {
//       Topic: " FRIENDSHIP WITH PURPOSE.",
//       scripture: "It is not good for the man to be alone.",
//       verse: " Genesis 2:18",
//       reflection: `Before sin ever fractured the world, before shame ever entered the human heart, God
//  made a profound declaration: “It is not good for man to be alone.This wasn’t a romantic suggestion, it was a divine blueprint. You were not created for isolation. You were fashioned for fellowship.
// God Himself exists in eternal relationship, Father, Son, and Holy Spirit. And in His image, He made us to mirror that divine communion. Independence may be celebrated in culture, but in the Kingdom, interdependence is

// sacred. Isolation is not strength, it’s a vulnerability. The enemy prowls in the shadows of loneliness, but God heals in the light of connection.
// It is very important to know that loneliness is more than a feeling, it’s a spiritual cry for restoration. It signals a gap in the divine design. Whether through friendship, mentorship, family, or fellowship, relationships are the sacred soil where love blossoms, faith matures, and destiny unfolds.

// Even Jesus, the Son of God, chose twelve companions. He laughed with them, wept with them, and walked with them. He didn’t just preach community, He lived it. If the Savior of the world leaned into relationship, how much more should we?
// Today, let this truth settle deep in your spirit: You were never meant to walk alone. God has placed people around you not by accident, but by assignment. Some are there to sharpen you,

// others to comfort you, and some to challenge you into growth. Embrace them. Honor them. And be one who reflects the love of Christ in every connection.
// `,
//       prayer: `Heavenly Father,
// Thank You for designing me in Your image, an image of perfect relationship. I repent for the times I’ve withdrawn, built walls, or allowed wounds to

// isolate me. Heal my heart from past relational pain. Teach me to love with Your grace, to forgive with Your mercy, and to build with Your wisdom. Help me see the divine purpose in every person You’ve placed in my life. Let my relationships reflect Your glory and draw others to Your heart. In Jesus’ name, Amen.
// CHALLENGE:
// Today, be intentional. Reach out to someone you’ve lost touch with. Could be a old

// friend, a mentor, a family member. Rebuild the bridge. Reignite the connection. Let God use your obedience to restore what was broken. You may be the answer to someone’s prayer for belonging.`,
//     },
//   },
// ];

// JSON.stringify(devotions);
// console.log(devotions);
