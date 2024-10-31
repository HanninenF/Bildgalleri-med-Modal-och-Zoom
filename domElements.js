export const slideshowContainer = document.querySelector(".slideshowContainer");
export const slideshowElements = [];
export const microphoneElement =
  slideshowContainer.querySelector(".microphone");
export const sheetMusicElement =
  slideshowContainer.querySelector(".sheet-music");
export const rehearsalRoomElement =
  slideshowContainer.querySelector(".rehearsal-room");
export const drumsElement = slideshowContainer.querySelector(".drums");

// Lägg bara till element som existerar i DOM
[
  microphoneElement,
  sheetMusicElement,
  rehearsalRoomElement,
  drumsElement,
].forEach((el) => {
  if (el) slideshowElements.push(el);
});
