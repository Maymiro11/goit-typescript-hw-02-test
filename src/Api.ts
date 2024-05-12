import axios from "axios";

interface Params {
    per_page: number;
    orientation: string;
    page: number;
    query: string;
    order_by: string;
  }

  const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      common: {
        Authorization: 'Client-ID 1oFQYXO4_c0t5VKPs6QnPh6JnLV9CUwbmdii7fvR1zY',
      },
    },
  });

async function fetchImages<T>(page: number, query: string): Promise<T> {
    
    const response: Params =  {
        query: query,
        per_page: 9,
        page,
        order_by: "popular",
        orientation: "landscape",
        };
        const { data } = await axiosInstance.get<T>('/search/photos', {
            params: response,
        });
    return data;
    
    }

export default fetchImages;