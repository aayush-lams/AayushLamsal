import { customCursor }     from "@components/cursor/cursor";
import { init_person_mode } from "@components/personMode/personmode";
// import { addPopupEvents }   from "@components/popups/popup";

document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded! ")
  customCursor();
  init_person_mode();
  // addPopupEvents();
});
