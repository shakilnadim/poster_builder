const posterDescriptionElem = document.getElementById("poster-description");
let posterDescription = "";

export function init() {
  document
    .getElementById("description-input")
    .addEventListener("keyup", (e) => updatePostDescription(e.target.value));
}

export function updatePostDescription(value) {
  posterDescription = value;
  posterDescriptionElem.innerText = posterDescription;
}
