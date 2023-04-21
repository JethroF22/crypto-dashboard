import { AxiosResponse } from 'axios';
import 'dotenv/config';

import { getClient } from '../utils/client';

export async function getMarketData(
  numResults?: number
): Promise<AxiosResponse> {
  const marketDataUrl = process.env.COINMARKET_CAP_MARKET_DATA_URL;
  const client = getClient();
  return client.get(`${marketDataUrl}&limit=${numResults || 5000}`);
}
