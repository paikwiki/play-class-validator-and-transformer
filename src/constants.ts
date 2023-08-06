const CITY = {
  London: "London",
  NewYork: "New York",
  Paris: "Paris",
  Seoul: "Seoul",
  Tokyo: "Tokyo",
} as const;

export const CITIES = Object.values(CITY);
export type City = (typeof CITY)[keyof typeof CITY];
