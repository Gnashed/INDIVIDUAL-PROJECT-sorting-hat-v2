export const renderToDom = (divId, contentToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = contentToRender;
};
