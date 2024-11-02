document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('card-container');

    const wonderData = JSON.parse(localStorage.getItem('selectedWonder'));

    if (wonderData) {
        const images = wonderData.links?.images || [];


        const cardDetail = document.createElement('div');
        cardDetail.classList.add('cards');
        cardDetail.innerHTML = `
        <img src="${images[0]}" alt="Image of ${wonderData.name}">
      <h2>${wonderData.name}</h2>
      <h3><strong>Location:</strong> ${wonderData.location}</h3>
      <p>${wonderData.summary}</p>
      
    `;
    imageContainer.appendChild(imageDetail);
    container.appendChild(cardDetail);
  } else {
    container.innerHTML = "<p>No wonder data found.</p>";
  }
});