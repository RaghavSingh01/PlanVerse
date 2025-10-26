import axios from "axios";

// Travel Advisor API (RapidApi)
export const getPlacesData = async (type, sw, ne) => {
  if (process.env.REACT_APP_ENV !== "development") {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            "x-rapidapi-key": process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          },
        }
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Development environment detected"); // for limiting api requests
  }
};

export const getRecommendationsFromAI = async (prompt) => {
  const url = "https://openrouter.ai/api/v1/chat/completions";
  console.log("Getting ai");
  const headers = {
    "Authorization": `Bearer ${process.env.REACT_APP_GEMINI_API_KEY}`,
    "Content-Type": "application/json"
  };

  const body = JSON.stringify({
    model: "z-ai/glm-4.5-air:free",
    messages: [
      {
        role: "user",
        content: prompt
      }
    ]
  });

  try {

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body
    });
    console.log("GOt ai");

    const data = await response.json();
    const recommendation = data.choices[0].message.content;
    console.log("Movie Recommendations:\n", recommendation);

    return recommendation;
  } catch (error) {
    console.error("Failed to fetch or parse response:", error);
  }
}