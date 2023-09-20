import axios from "axios";

const API_URL =
    "https://emoji-api.com/emojis?access_key=d9e9da780ce9541d42f2411f87670cd3729607a2";

// Function to fetch data from the emoji API
const fetchEmojiData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Assuming the API returns an array of emoji objects
    } catch (error) {
        console.error("Error fetching data from the API:", error);
        return []; // Return an empty array in case of an error
    }
};

export default fetchEmojiData; // Export the fetchEmojiData function
