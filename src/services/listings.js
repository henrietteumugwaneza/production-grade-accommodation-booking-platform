import { api } from "./api";
import { mockListings } from "../utils/mockData";

export const getListings = async () => {
  try {
    const response = await api.get("/searchPropertyByPlaceId", {
      params: {
        placeId: "ChIJg1l3tY4RLxgR3p0v5zv7X2M",
      },
    });

    return response.data?.data || [];
  } catch (error) {
    console.error("API failed, using mock data", error);

    // ✅ fallback
    return mockListings;
  }
};