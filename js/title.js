let title = "";
let titleColor = "";
let titleAlignment = "";
const titleColorList = {
  blue: "#2563eb",
  green: "#16a34a",
  black: "#030712",
};

const titlePreview = document.getElementById("poster-title");
const titleInput = document.getElementById("title-input");
titleInput.addEventListener("keyup", (e) => updateTitle(titleInput.value));

export function init() {
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
}

export function updateTitle(input) {
  title = input;
  titlePreview.innerText = title;
}

export function updateTitleColor(color) {
  titleColor = titleColorList[color.toLowerCase()];
  titlePreview.style.color = titleColor;
}

export function updateTitleAlignment(alignment) {
  titleAlignment = alignment.toLowerCase();
  titlePreview.style.textAlign = titleAlignment;
}

export function getTitle() {
  return title;
}

export function getTitleColor() {
  return titleColor;
}

export function getTitleAlignment() {
  return titleAlignment;
}
