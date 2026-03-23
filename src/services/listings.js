import { api } from "./api";
import { mockListings } from "../utils/mockData";

// Normalize API response data
const normalizeListings = (rawData) => {
  if (!Array.isArray(rawData)) return [];
  
  return rawData.map((item, index) => ({
    id: item.id || `listing-${index}`,
    name: item.name || item.title || "Nice Stay",
    location: item.city || item.location?.city || "Unknown",
    price: item.price?.rate || item.price || 100,
    rating: item.rating || item.reviewsRating || 4.5,
    images: item.images || item.photos || [],
    description: item.description || "",
    amenities: item.amenities || [],
    host: item.host || {}
  }));
};

export const getListings = async (placeId = "ChIJg1l3tY4RLxgR3p0v5zv7X2M", filters = {}) => {
  try {
    const response = await api.getListings(placeId, filters);
    const rawData = response?.data || [];
    return normalizeListings(rawData);
  } catch (error) {
    console.warn("API failed, using mock data:", error.message);
    return mockListings;
  }
};

export const getListingById = async (id) => {
  try {
    const response = await api.getListingDetails(id);
    const rawData = response?.data;
    return normalizeListings([rawData])[0];
  } catch (error) {
    console.warn("API failed, using mock data:", error.message);
    return mockListings.find(item => item.id === parseInt(id)) || mockListings[0];
  }
};