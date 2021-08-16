const max = 391;
const min = 1;
const random = () => Math.floor(Math.random() * (max - min)) + min;

const urlBase = 'https://acnhapi.com/v1/images/villagers/';

export const createImageNodes = () => {
  const container = document.createElement('div');
  container.className = 'p-4 container';

  const wrapper = document.createElement('div');
  wrapper.className = 'mx-auto rounded bg-gray-300 loading';

  const imagen = document.createElement('img');
  imagen.className = "mx-auto rounded-md";
  imagen.width = '320';
  imagen.dataset.src = `${urlBase}${random()}`;

  container.appendChild(wrapper);
  wrapper.append(imagen);

  return container;
};

export const createLoadingBox = () => {
  const loadingBox = document.createElement('div');
  loadingBox.id = 'loading';
  loadingBox.className = 'mx-auto rounded bg-gray-300 loading';
  loadingBox.innerHTML = '';

  return loadingBox;
};