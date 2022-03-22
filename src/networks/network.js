import axios from "axios";

const api = axios.create({
    baseURL: "https://randomuser.me/api/"
})

export const getRandomUser = async () => {

    const { data } = await axios.get("https://randomuser.me/api/");
    console.log("user in networks",data.results[0] )
    return data.results[0];
    
}