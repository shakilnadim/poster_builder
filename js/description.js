const posterDescriptionElem = document.getElementById("poster-description");
let posterDescription = "";
const descriptionButton = document.getElementById("description-button");
const descriptionSections = document.querySelectorAll(".description-divs");
const hideDescriptionButton = document.getElementById("hide-description");
let isDescriptionVisible = false;

export function init() {
  document
    .getElementById("description-input")
    .addEventListener("keyup", (e) => updatePostDescription(e.target.value));

  descriptionButton.addEventListener("click", showDescriptionSections);
  hideDescriptionButton.addEventListener("click", hideDescriptionSections);
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

export function updatePostDescription(value) {
  posterDescription = value;
  posterDescriptionElem.innerText = posterDescription;
}

export function getDescription() {
  return isDescriptionVisible ? posterDescription : "";
}

export function getIsDescriptionVisible() {
  return isDescriptionVisible;
}
