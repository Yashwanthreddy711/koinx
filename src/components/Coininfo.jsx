import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

import {
  Chart as CharJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

CharJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const Coininfo = () => {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const [flag, setFlag] = useState(false);

  const fetchHistoricData = async () => {
    try {
      const { data } = await axios.get(
        // 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10'
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'
      );
      setFlag(true);
      setHistoricData(data.prices);
    } catch (error) {
      console.error('Error fetching historic data:', error);
    }
  };

  useEffect(() => {
    fetchHistoricData();
  }, []);

  return (
    <div>
      {flag ? (
        <Line
          data={{
            labels: historicData.map((coin) => {
              const date = new Date(coin[0]);
              const time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                data: historicData.map((coin) => coin[1]),
                label: `Price (Past ${days} Days) in INR`,
                borderColor: '#0E86D4',
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};



export default Coininfo;
