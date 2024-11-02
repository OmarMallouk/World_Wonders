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
  

 