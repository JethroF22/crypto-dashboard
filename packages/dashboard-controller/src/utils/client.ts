import axios, { AxiosInstance } from 'axios';
import 'dotenv/config';

export const getClient = (): AxiosInstance => {
  const url = process.env.COINMARKETCAP_API_BASE_URL;
  const apiKey = process.env.COINMARKETCAP_API_KEY;

  return axios.create({
    baseURL: url,
    headers: {
      'X-CMC_PRO_API_KEY': apiKey,
    },
  });
};
