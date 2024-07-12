// api.js
const API_URL = "https://swapi.dev/api/";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
