import {
  getTitle,
  getTitleAlignment,
  getTitleColor,
  getIsTitleVisible,
} from "./title.js";
import { getImgElem, getIsImageVisible } from "./image.js";
import { getDescription, getIsDescriptionVisible } from "./description.js";

const posterContainer = document.getElementById("poster-container");
let posterImgPreview = getImgElem();
let yPos = 50;
let xPad = 10;

export function init() {
  document.getElementById("download-btn").addEventListener("click", () => {
    posterImgPreview = getImgElem();
    console.log(
      getTitle().trim() == "",
      getDescription().trim() == "",
      posterImgPreview === null || posterImgPreview.src.endsWith("/index.html")
    );
    if (
      getTitle().trim() == "" &&
      getDescription().trim() == "" &&
      (posterImgPreview === null ||
        posterImgPreview.src.endsWith("/index.html"))
    ) {
      alert("Poster is empty");
      return;
    }

    xPad = 10;
    yPos = 50;

    let canvas = drawCanvas();
    downloadImage(canvas);
  });
}

function drawCanvas() {
  const canvas = document.getElementById("my-canvas");
  const width = posterContainer.offsetWidth;
  const height = posterContainer.offsetHeight;

  canvas.width = width + xPad * 2;
  canvas.height = height + 60;
  const context = canvas.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  if (getIsTitleVisible()) {
    drawTitle(context, canvas.width);
  }

  if (getIsImageVisible()) {
    drawImage(context, canvas.width);
  }

  if (getIsDescriptionVisible()) {
    drawDescription(context, canvas.width);
  }

  return canvas;
}

function drawTitle(context, canvasWidth) {
  context.fillStyle = getTitleColor();
  context.font = "36px sans-serif";
  let x = xPad;
  if (getTitleAlignment() == "center") {
    x = canvasWidth / 2;
    context.textAlign = "center";
  } else if (getTitleAlignment() == "right") {
    x = canvasWidth - xPad;
    context.textAlign = "right";
  }
  wrapText(context, getTitle(), x, canvasWidth - 20, 40);

  yPos += getIsImageVisible() ? 24 : 32;
}

function drawImage(context, canvasWidth) {
  context.drawImage(
    posterImgPreview,
    xPad,
    yPos,
    canvasWidth - xPad * 2,
    posterImgPreview.height
  );

  yPos += 32 + posterImgPreview.height;
}

function drawDescription(context, canvasWidth) {
  context.fillStyle = "#030712";
  context.font = "16px sans-serif";
  context.textAlign = "left";
  wrapText(context, getDescription(), xPad, canvasWidth - xPad * 2, 24);
}

function wrapText(context, text, x, maxWidth, lineHeight) {
  let words = text.split(" ");
  let line = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i] == "") {
      continue;
    }

    let testLine = line + words[i] + " ";
    let metrics = context.measureText(testLine);
    let testWidth = metrics.width;

    if (testWidth > maxWidth && i > 0) {
      context.fillText(line, x, yPos);
      line = words[i] + " ";
      yPos += lineHeight;
    } else {
      line = testLine;
    }
  }

  context.fillText(line, x, yPos);
}

function downloadImage(canvas) {
  let canvasUrl = canvas.toDataURL();
  const createEl = document.createElement("a");
  createEl.href = canvasUrl;
  createEl.download = "poster";
  createEl.click();
  createEl.remove();
}
