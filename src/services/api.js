import axios from 'axios';

// Centralized Axios instance with base configuration
const apiClient = axios.create({
  baseURL: 'https://airbnb19.p.rapidapi.com/api/v2',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'airbnb19.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
});

// Error handler
const handleApiError = (error) => {
  if (error.response?.status === 429) {
    throw new Error('Rate limit exceeded. Please try again later.');
  }
  if (error.response?.status === 401) {
    throw new Error('Invalid API key. Please check your credentials.');
  }
  throw new Error(error.message || 'An error occurred while fetching data.');
};

export const api = {
  getListings: async (placeId, filters = {}) => {
    try {
      const response = await apiClient.get('/searchPropertyByPlaceId', {
        params: { placeId, ...filters }
      });
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },
  
  getListingDetails: async (listingId) => {
    try {
      const response = await apiClient.get('/getPropertyDetails', {
        params: { propertyId: listingId }
      });
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  }
};

export default apiClient;