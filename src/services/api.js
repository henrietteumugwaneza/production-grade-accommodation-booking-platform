import axios from "axios";

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;

export const api = axios.create({
  baseURL: "https://airbnb19.p.rapidapi.com/api/v2",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "airbnb19.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});