import { db, ref, set } from "./firebase.js";

const nextBtn = document.getElementById("nextBtn");
const selectedPlayer = document.getElementById("selectedPlayer");

const PLAYERS = 4;

nextBtn.addEventListener("click", async () => {

  const greenPlayer =
    Math.floor(Math.random() * PLAYERS) + 1;

  await set(
    ref(db, "game"),
    {
      greenPlayer
    }
  );

  selectedPlayer.textContent =
    `Player ${greenPlayer} is GREEN`;

});