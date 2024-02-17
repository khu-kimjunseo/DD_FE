import { client } from './api';


const getSearchByTitle = async (title) => {
    try {
        const encodedTitle = encodeURIComponent(title);
        const url = `/search/title?title=${encodedTitle}`;

        const response = await client.get(url);

        console.log(response.data); 
        return response.data; 
    } catch (error) {
        console.error('Error during API call:', error);
        throw error; // 오류 처리
    }
};

const getPopular = async () => {
    try{
        const url = `/popular/wallpaper`;

        const response = await client.get(url);

        console.log(response.data);
        return response.data;
    }catch(error){
        console.error('Error during API call:', error);
        throw error;
    }
};

const mainpageServices = {getSearchByTitle, getPopular};

export default mainpageServices;

