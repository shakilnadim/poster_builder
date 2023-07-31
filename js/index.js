import {
  updateTitle,
  updateTitleColor,
  updateTitleAlignment,
} from "./title.js";

import {
  resetDraggingStyles,
  addDraggingStyles,
  previewPosterImage,
} from "./image.js";

import { updatePostDescription } from "./description.js";

const titleInput = document.getElementById("title-input");
titleInput.addEventListener("keyup", (e) => updateTitle(titleInput.value));

document
  .querySelectorAll(".title-color")
  .forEach((elem) =>
    elem.addEventListener("click", () => updateTitleColor(elem.innerText))
  );

document
  .querySelectorAll(".title-alignment")
  .forEach((elem) =>
    elem.addEventListener("click", () => updateTitleAlignment(elem.innerText))
  );

const dropzone = document.getElementById("dropzone");
const imgInput = document.querySelector("input[type=file]");

imgInput.addEventListener("change", (e) => {
  previewPosterImage(e.target.files);
});

["dragover", "dragend"].forEach((type) => {
  dropzone.addEventListener(type, (e) => {
    e.preventDefault();
    addDraggingStyles(dropzone);
  });
});

dropzone.addEventListener("dragleave", () => resetDraggingStyles(dropzone));

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  resetDraggingStyles(dropzone);

  previewPosterImage(e.dataTransfer.files);
});

document
  .getElementById("description-input")
  .addEventListener("keyup", (e) => updatePostDescription(e.target.value));

// drawCanvas();
function drawCanvas() {
  const canvas = document.getElementById("my-canvas");

  posterImgPreview.onload = () => {
    const posterContainer = document.getElementById("poster-container");
    const title = document.getElementById("poster-title");
    const description = document.getElementById("poster-description");

    const width = posterContainer.offsetWidth;
    const height = posterContainer.offsetHeight;
    console.log(width, height);
    canvas.width = width + 10;
    canvas.height = height;

    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "black";
    context.font = "36px Arial";
    context.fillText(title.innerText, 10, 50);

    context.drawImage(
      posterImgPreview,
      10,
      60,
      posterImgPreview.width,
      posterImgPreview.height
    );

    context.font = "16px Arial";
    context.fillText(
      description.innerHTML,
      10,
      50 + 36 + posterImgPreview.height
    );

    downloadImage(canvas);
  };
}

function downloadImage(canvas) {
  let canvasUrl = canvas.toDataURL();
  const createEl = document.createElement("a");
  createEl.href = canvasUrl;
  createEl.download = "poster";
  createEl.click();
  createEl.remove();
}
