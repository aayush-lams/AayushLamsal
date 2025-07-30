function toggle_popup_render () {
  const popup_hideable = document.getElementsByClassName('popup_hideable');

  Array.from(popup_hideable).forEach(el => {
    el.classList.toggle('popup_render');
  });
};

function setupButtonEvent (buttonName : string, callbackFxn : () => void) {
  const popup_opener = document.getElementsByClassName(buttonName);
  Array.from(popup_opener).forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        callbackFxn();
      });
    };
  });
}

export function addPopupEvents () {
  setupButtonEvent("openPopup", toggle_popup_render);
  setupButtonEvent("cancelButton", toggle_popup_render);
}
