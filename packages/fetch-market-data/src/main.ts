import express from 'express';
import 'dotenv/config';
import { getMarketData } from '@crypto-dashboard/controller';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await getMarketData();
    console.log('response');
    console.log();
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error: 'Failed to fetch market data',
    });
  }
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
