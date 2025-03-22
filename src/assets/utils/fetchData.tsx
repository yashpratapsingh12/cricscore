export const CricketData: RequestInit = {
  method: "GET",

  headers: {
    "X-Rapidapi-Key": import.meta.env.VITE_CRICKET_API,
    "X-Rapidapi-Host": "cricbuzz-cricket.p.rapidapi.com",
  } as Record<string, string>,
};

export const fetchCricketData = async (url: string) => {
  try {
    const response = await fetch(url, CricketData);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cricket data:", error);
  }
};
