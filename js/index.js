import { init as titleInit } from "./title.js";
import { init as imageInit } from "./image.js";
import { init as descriptionInit } from "./description.js";
import { init as componentVisibilityInit } from "./componentVisibility.js";

componentVisibilityInit();
titleInit();
imageInit();
descriptionInit();

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
