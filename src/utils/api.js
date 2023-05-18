import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';
const TOKEN = import.meta.env.VITE_APP_YOUTUBE_API_KEY;

console.log(TOKEN);


const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': TOKEN,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options)
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}