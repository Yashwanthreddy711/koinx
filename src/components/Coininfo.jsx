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
import Bitcon from '../assets/icons/Bitcon';

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
  const [cryptoData, setCryptoData] = useState(0);
 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
        );
        setCryptoData(response.data.bitcoin);
      } catch (error) {}
    };

    fetchData();
    setDays(1);

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);
  const fetchHistoricData = async () => {
    try {
      const { data } = await axios.get(
        // 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10'
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10'
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
    <div className=' w-full h-[420px]  md:h-[711px] bg-white p-6  rounded-[8px] '>

<div className="flex items-center w-full">
        <div>
           <Bitcon/>
        </div>
        <div className="text-2xl font-semibold text-[#0B1426] pl-2">
          Bitcoin
        </div>
        <div className="text-sm text-[#5D667B] pl-2">BTC</div>
        <div className="bg-[#808A9D] px-3 py-2 text-white rounded-lg ml-7">
          Rank #1
        </div>
      </div>
      <div className="flex mt-8">
        <div>
          <div className="text-3xl font-semibold text-[#0B1426]">
            {(cryptoData && `$${cryptoData.usd}`) || `$66759`}
          </div>
          <div className="text-lg font-medium text-[#0B1426]">
            {(cryptoData && `₹ ${cryptoData.inr}`) || `₹ 5535287`}
          </div>
        </div>
        <div
          className={`flex items-center justify-center rounded-lg p-2 h-10 ml-10 ${
            cryptoData && cryptoData.inr_24h_change < 0
              ? "bg-red-300/20"
              : "bg-green-300/20"
          }`}
        >
          <svg
            viewBox="0 0 100 100"
            className={`w-[10px] fill-current ${
              cryptoData && cryptoData.inr_24h_change < 0
                ? "text-red-600 rotate-180"
                : "text-green-600"
            }`}
          >
            <polygon points="0,100 50,0 100,100" />
          </svg>
          <span
            className={`ml-2 text-sm font-bold ${
              cryptoData && cryptoData.inr_24h_change < 0
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {(cryptoData &&
              `${Math.abs(cryptoData.inr_24h_change).toFixed(2)}%`) ||
              `2.18%`}
          </span>
        </div>

        <div className="text-sm text-[#768396] ml-2 mt-2">(24H)</div>
      </div>
      <hr className="my-4" />
      <div className="justify-between mb-4 lg:flex">
        <div className="ls:text-lg text-sm font-semibold text-[#0B1426]">
          Bitcoin Price Chart (USD)
        </div>
        <div className="flex lg:space-x-5 space-x-3 mr-4 text-sm text-[#5D667B] font-medium text-center items-center">
          <div>1H</div>
          <div className="text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1">24H</div>
          <div >
            7D
          </div>
          <div>1M</div>
          <div>3M</div>
          <div>6M</div>
          <div>1Y</div>
          <div>All</div>
        </div>
      </div>

      <div className='h-[400px] w-full'>
      {flag ? (
        <Line
          data={{
            labels: historicData.map((coin) => {
              const date = new Date(coin[0]);
              const time = date.getHours()
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
    </div>
  );
};



export default Coininfo;
