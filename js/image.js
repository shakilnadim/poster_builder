const posterImgPreview = document.getElementById("poster-img-preview");
const dropzone = document.getElementById("dropzone");
const imgInput = document.querySelector("input[type=file]");
const imageButton = document.getElementById("image-button");
const imageSections = document.querySelectorAll(".image-divs");
const hideImageButton = document.getElementById("hide-image");
let isImageVisible = false;

export function init() {
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

  imageButton.addEventListener("click", showImageSections);
  hideImageButton.addEventListener("click", hideImageSections);
}

function resetDraggingStyles(element) {
  element.classList.add("border-dashed");
  element.classList.remove("border-blue-400");
}

function addDraggingStyles(element) {
  element.classList.remove("border-dashed");
  element.classList.add("border-blue-400");
}

function previewPosterImage(fileList) {
  if (fileList.length > 1) {
    alert("You can only upload one file");
  }

  const fileReader = new FileReader();

  fileReader.readAsDataURL(fileList[0]);
  fileReader.onload = () => {
    posterImgPreview.src = fileReader.result;
  };
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

export function getImgElem() {
  return isImageVisible ? posterImgPreview : null;
}

export function getIsImageVisible() {
  return isImageVisible;
}
