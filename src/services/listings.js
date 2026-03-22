import { api } from "./api";
import { mockListings } from "../utils/mockData";

export const getListings = async () => {
  try {
    const response = await api.get("/searchPropertyByPlaceId", {
      params: {
        placeId: "ChIJg1l3tY4RLxgR3p0v5zv7X2M",
      },
    });

    const rawData = response.data?.data || [];

    // ✅ Normalize (clean structure)
    const listings = rawData.map((item, index) => ({
      id: item.id || index,
      name: item.name || "Nice Stay",
      location: item?.location?.city || "Unknown",
      price: item?.price?.rate || 100,
      rating: item?.rating || 4.5,
      images: item?.images || [],
    }));

    return listings;

  } catch (error) {
    console.log("Using mock data");
    return mockListings;
  }
};