const cursor = document.getElementById("customCursor");
// ← → ↑ ↓ ↕❤‡★•—※✽✛
const defaultCursor    = "❍";
const transitionCursor = "※";
const finalCursor      = "✽";

const delay = 50;

function setCursorText (char : string, delay : number) {
  setTimeout(() => cursor.textContent = char, delay);
}

export function customCursor () {
  cursor.textContent = defaultCursor;

  document.addEventListener('mousemove', (event) => {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  })

  document.addEventListener('click', () => {
    cursor.textContent = transitionCursor;

    setCursorText(finalCursor, delay);
    setCursorText(transitionCursor, delay);
    setCursorText(defaultCursor, delay);
  })
  document.addEventListener('mousedown', () => {
    cursor.textContent = transitionCursor;
    setCursorText(finalCursor, delay);
  })

  document.addEventListener('mouseup', () => {
    setCursorText(transitionCursor, delay);
    cursor.textContent = defaultCursor;
  })
}
