import { db, ref, onValue } from "./firebase.js";

const screen = document.getElementById("screen");

const params = new URLSearchParams(window.location.search);

const playerId = Number(
  params.get("id")
);

function updateScreen(isGreen) {

  if (isGreen) {
    document.body.className = "green";
    screen.textContent = "🟢";
  } else {
    document.body.className = "red";
    screen.textContent = "🔴";
  }

}

onValue(
  ref(db, "game"),
  (snapshot) => {

    const data = snapshot.val();

    if (!data) {
      updateScreen(false);
      return;
    }

    updateScreen(
      data.greenPlayer === playerId
    );

  }
);