import { db, ref, onValue }
from "./firebase.js";

const screen =
  document.getElementById("screen");

const params =
  new URLSearchParams(
    window.location.search
  );

const playerId =
  Number(params.get("id"));

function updateScreen(isGreen) {

  if (isGreen) {

    document.body.className =
      "green";

    screen.innerHTML =
      `
      <div>
        🟢
        <br>
        P${playerId}
      </div>
      `;

  } else {

    document.body.className =
      "red";

    screen.innerHTML =
      `
      <div>
        🔴
        <br>
        P${playerId}
      </div>
      `;

  }
}

onValue(
  ref(db, "game"),
  (snapshot) => {

    const data =
      snapshot.val();

    if (!data) {

      updateScreen(false);

      return;
    }

    const greens =
      data.greenPlayers || [];

    updateScreen(
      greens.includes(playerId)
    );
  }
);