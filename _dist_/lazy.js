
const isIntersecting = (entry) => {
  return entry.isIntersecting //true (dentro de viewport) / false (fuera del viewport)
};

const loadImage = (entry) => {
  const container = entry.target; //container div
  const wrapper = container.firstChild;
  const image = wrapper.firstChild;
  const url = image.dataset.src;
  //cargar imagen
  image.src = url;

  //Eliminar el listener
  observer.unobserve(container);

};

const observer = new IntersectionObserver( (entries) => {
  entries
    .filter(isIntersecting)
    .forEach(loadImage);
});

export const registerImage = (image) => {
  observer.observe(image);
};