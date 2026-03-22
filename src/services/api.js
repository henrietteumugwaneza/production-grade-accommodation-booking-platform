import axios from 'axios';

const getListings = async (placeId) => {
  const options = {
    method: 'GET',
    url: 'https://airbnb19.p.rapidapi.com/api/v2/searchPropertyByPlaceId',
    params: { placeId: placeId },
    headers: {
      'X-RapidAPI-Key': 'YOUR_ACTUAL_API_KEY_HERE', // Check this!
      'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("API ERROR:", error);
  }
};