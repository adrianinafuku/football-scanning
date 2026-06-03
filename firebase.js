import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqHXGs6TmW-Sh1DFkuLC0OORgjeDgOdMU",
  authDomain: "football-scanning.firebaseapp.com",
  databaseURL: "https://football-scanning-default-rtdb.firebaseio.com",
  projectId: "football-scanning",
  storageBucket: "football-scanning.firebasestorage.app",
  messagingSenderId: "573022538944",
  appId: "1:573022538944:web:e9d6d275165353882ff125",
  measurementId: "G-V474TD1LM2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue };