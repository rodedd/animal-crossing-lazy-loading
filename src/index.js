import { registerImage } from "./lazy";
import { createImageNodes, createLoadingBox } from "./utils";

const addImage = () => {
  const loadingBox = createLoadingBox();
  mountNode.append(loadingBox);
  const newImage = createImageNodes();
  loadingBox.remove();
  mountNode.append(newImage);
  registerImage(newImage);
};

const cleanImages = () => {
  mountNode.innerHTML = "";
};

const mountNode = document.querySelector('#images');

const addButton = document.querySelector('#btnAdd');
addButton.addEventListener('click', addImage);

const deleteButton = document.querySelector('#btnClean');
deleteButton.addEventListener('click', cleanImages);

