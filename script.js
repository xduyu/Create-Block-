const createBlockButton = document.getElementById('create-block');
const blockContainer = document.getElementById('block-container');
const titleInput = document.getElementById('title-input');
const descriptionInput = document.getElementById('description-input');
const imageUrlInput = document.getElementById('image-url-input');

createBlockButton.addEventListener('click', () => {
  const title = titleInput.value;
  const description = descriptionInput.value;
  const imageUrl = imageUrlInput.value;

  const blockHTML = `
    <h2>${title}</h2>
    <img src="${imageUrl}" alt="${title}">
    <p>${description}</p>
  `;

  const blockElement = document.createElement('div');
  blockElement.className = 'block';
  blockElement.innerHTML = blockHTML;

  blockContainer.appendChild(blockElement);

  titleInput.value = '';
  descriptionInput.value = '';
  imageUrlInput.value = '';
});