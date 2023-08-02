const titleButton = document.getElementById("title-button");
const titleSections = document.querySelectorAll(".title-divs");
const hideHeadingButton = document.getElementById("hide-heading");
let isTitleVisible = false;

const imageButton = document.getElementById("image-button");
const imageSections = document.querySelectorAll(".image-divs");
const hideImageButton = document.getElementById("hide-image");
let isImageVisible = false;

const descriptionButton = document.getElementById("description-button");
const descriptionSections = document.querySelectorAll(".description-divs");
const hideDescriptionButton = document.getElementById("hide-description");
let isDescriptionVisible = false;

export function init() {
  titleButton.addEventListener("click", showTitleSections);
  hideHeadingButton.addEventListener("click", hideTitleSections);

  imageButton.addEventListener("click", showImageSections);
  hideImageButton.addEventListener("click", hideImageSections);

  descriptionButton.addEventListener("click", showDescriptionSections);
  hideDescriptionButton.addEventListener("click", hideDescriptionSections);
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

function showImageSections() {
  imageSections.forEach((section) => {
    section.classList.remove("hidden");
  });

  imageButton.classList.add("hidden");
  isImageVisible = true;
}

function hideImageSections() {
  imageSections.forEach((section) => {
    section.classList.add("hidden");
  });

  imageButton.classList.remove("hidden");
  isImageVisible = false;
}

function showDescriptionSections() {
  descriptionSections.forEach((section) => {
    section.classList.remove("hidden");
  });

  descriptionButton.classList.add("hidden");
  isDescriptionVisible = true;
}

function hideDescriptionSections() {
  descriptionSections.forEach((section) => {
    section.classList.add("hidden");
  });

  descriptionButton.classList.remove("hidden");
  isDescriptionVisible = false;
}

export function getIsTitleVisible() {
  return isTitleVisible;
}

export function getIsImageVisible() {
  return isImageVisible;
}

export function getIsDescriptionVisible() {
  return isDescriptionVisible;
}
