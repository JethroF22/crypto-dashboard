import { getMarketData } from '@crypto-dashboard/controller';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import Table from '../table/table';

export function MarketData() {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Price',
        accessor: 'quote.USD.price',
      },
      {
        Header: '1h %',
        accessor: 'quote.USD.percent_change_1h',
      },
      {
        Header: '24h %',
        accessor: 'quote.USD.percent_change_24h',
      },
      {
        Header: '7d %',
        accessor: 'quote.USD.percent_change_7d',
      },
      {
        Header: 'Market Cap',
        accessor: 'quote.USD.market_cap',
      },
      {
        Header: 'Volume(24h)',
        accessor: 'quote.USD.volume_24h',
      },
      {
        Header: 'Circulating Supply',
        accessor: 'circulating_supply',
      },
    ],
    []
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/market-data');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Market Data</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default MarketData;
