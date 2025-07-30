import { init_person_mode } from "./personmode";
import { addPopupEvents } from "./popup";

document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded! ")
  init_person_mode();
  addPopupEvents();
});
