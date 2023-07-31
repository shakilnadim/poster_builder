const posterDescriptionElem = document.getElementById("poster-description");
let posterDescription = "";

export function updatePostDescription(value) {
  posterDescription = value;
  posterDescriptionElem.innerText = posterDescription;
}
