const instance = axios.create({
    baseURL: "https://www.world-wonders-api.org/v0/wonders"
  });
  
  const fetchWonders = async () => {
    try {
      const response = await instance.get('/');
      const wonders = response.data;
      console.log(wonders);
      displayWonders(wonders);
    } catch (error) {
      console.error("Error fetching wonders data:", error);
    }
  };


  const displayWonders = (wonders) => {
    const container = document.getElementById('card-container');
    container.innerHTML = ''; // Clear the container if needed

    wonders.forEach(wonder => {
    const arrlinks = wonder.links?.length || "N/A";
    const britannica = wonder.links?.britannica || "N/A";
    const images = wonder.links?.images || [];
    const card = document.createElement('div');
    card.classList.add('card');

      const firstImage = images.length > 0 ? 
      `<img src="${images[0]}" alt="Image of ${wonder.name}">`:
      '<p>No images available.</p>';

      card.innerHTML = `
       <p><strong></strong></p>
      ${firstImage}
        <h3>${wonder.name}</h3>
        <p><strong>Location:</strong> ${wonder.location}</p>

        <button>Wonder Details</button>
      
  
      
      `;

      container.appendChild(card);
    });
  };

  fetchWonders();
  

 