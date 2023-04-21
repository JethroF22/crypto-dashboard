import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

import { getMarketData } from '@crypto-dashboard/controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await getMarketData();
    res.status(200).json(response.data.data);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch market data' });
  }
}
