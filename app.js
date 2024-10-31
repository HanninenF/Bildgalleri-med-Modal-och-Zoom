const slideshowContainer = document.querySelector(".slideshowContainer");

const slideshowElements = [];
const microphoneElement = slideshowContainer.querySelector(".microphone");
slideshowElements.push(microphoneElement);

slideshowElements[0].addEventListener("click", (e) => {
  e.preventDefault();
  slideshowElements[0].remove();
});
