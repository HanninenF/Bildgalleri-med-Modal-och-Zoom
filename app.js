import { slideshowElements } from "./domElements.js";

slideshowElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
