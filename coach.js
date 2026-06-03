import { db, ref, set } from "./firebase.js";

const PLAYERS = 4;

const nextBtn = document.getElementById("nextBtn");
const autoBtn = document.getElementById("autoBtn");
const stopBtn = document.getElementById("stopBtn");

const greenCount =
  document.getElementById("greenCount");

const durationInput =
  document.getElementById("duration");

const selectedPlayer =
  document.getElementById("selectedPlayer");

let autoInterval = null;

function randomPlayers(count) {

  const players =
    Array.from(
      { length: PLAYERS },
      (_, i) => i + 1
    );

  const selected = [];

  while (selected.length < count) {

    const idx =
      Math.floor(Math.random() * players.length);

    selected.push(players[idx]);

    players.splice(idx, 1);
  }

  return selected;
}

async function nextRound() {

  const count =
    Number(greenCount.value);

  const greens =
    randomPlayers(count);

  await set(
    ref(db, "game"),
    {
      greenPlayers: greens,
      timestamp: Date.now()
    }
  );

  selectedPlayer.textContent =
    `Green: ${greens.join(", ")}`;
}

nextBtn.addEventListener(
  "click",
  nextRound
);

autoBtn.addEventListener(
  "click",
  () => {

    clearInterval(autoInterval);

    const duration =
      Number(durationInput.value);

    nextRound();

    autoInterval =
      setInterval(
        nextRound,
        duration * 1000
      );
  }
);

stopBtn.addEventListener(
  "click",
  () => {

    clearInterval(autoInterval);

  }
);