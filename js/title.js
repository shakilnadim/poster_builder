const titleColorList = {
  blue: "#2563eb",
  green: "#16a34a",
  black: "#030712",
};
let title = "";
let titleColor = titleColorList.black;
let titleAlignment = "";

const titlePreview = document.getElementById("poster-title");
const titleInput = document.getElementById("title-input");

const titleButton = document.getElementById("title-button");
const titleSections = document.querySelectorAll(".title-divs");
const hideHeadingButton = document.getElementById("hide-heading");
let isTitleVisible = false;

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

  titleButton.addEventListener("click", showTitleSections);
  hideHeadingButton.addEventListener("click", hideTitleSections);

  titleInput.addEventListener("keyup", (e) => updateTitle(titleInput.value));
}

function updateTitle(input) {
  title = input;
  titlePreview.innerText = title;
}

function updateTitleColor(color) {
  titleColor = titleColorList[color.toLowerCase()];
  titlePreview.style.color = titleColor;
}

function updateTitleAlignment(alignment) {
  titleAlignment = alignment.toLowerCase();
  titlePreview.style.textAlign = titleAlignment;
}

function showTitleSections() {
  titleSections.forEach((section) => {
    section.classList.remove("hidden");
  });

  titleButton.classList.add("hidden");
  isTitleVisible = true;
}

function hideTitleSections() {
  titleSections.forEach((section) => {
    section.classList.add("hidden");
  });

  titleButton.classList.remove("hidden");
  isTitleVisible = false;
}

export function getTitle() {
  return isTitleVisible ? title : "";
}

export function getTitleColor() {
  return titleColor;
}

export function getTitleAlignment() {
  return isTitleVisible ? titleAlignment : "";
}

export function getIsTitleVisible() {
  return isTitleVisible;
}
