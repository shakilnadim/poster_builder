const posterImgPreview = document.getElementById("poster-img-preview");

export function resetDraggingStyles(element) {
  element.classList.add("border-dashed");
  element.classList.remove("border-blue-400");
}

export function addDraggingStyles(element) {
  element.classList.remove("border-dashed");
  element.classList.add("border-blue-400");
}

export function previewPosterImage(fileList) {
  if (fileList.length > 1) {
    alert("You can only upload one file");
  }

  const fileReader = new FileReader();

  fileReader.readAsDataURL(fileList[0]);
  fileReader.onload = () => {
    posterImgPreview.src = fileReader.result;
  };
}

export function getImgElem() {
  return posterImgPreview;
}
