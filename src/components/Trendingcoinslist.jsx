import { useState, useEffect } from "react";
import axios from "axios";

function TrendingCoins() {
  const [coinsData, setCoinsData] = useState([]); // No need for type annotation

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const trendingCoins = response.data.coins.slice(0, 3);

        const formattedCoinsData = trendingCoins.map((coin) => ({
          symbol: coin.item.symbol.toUpperCase(),
          name: coin.item.name,
          img: coin.item.large,
          changePercentage: coin.item.data.price_change_percentage_24h.usd.toFixed(2),
        }));

        setCoinsData(formattedCoinsData);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData();
  }, []);

  return (
  
    <div className="md:flex md:flex-col hidden  gap-[20px] w-[379px] h-[124px]">
        {coinsData.map((coin, index) => (
          <Coin
            key={index}
            symbol={coin.symbol}
            name={coin.name}
            img={coin.img}
            changePercentage={coin.changePercentage}
          />
        ))}
      </div>
  
  );
}

function Coin({ symbol, name, img, changePercentage }) {
  const isPositiveChange = parseFloat(changePercentage) >= 0;

  return (
    <div className="flex justify-between py-1 my-2 text-center">
      <div className="flex pt-1">
        <div>
          <img src={img} className="w-6 rounded-full" alt="Coin icon" />
        </div>
        <div className="text-[#0F1629] ml-1 ">
          {name} ({symbol})
        </div>
      </div>
      <div
        className={`flex items-center justify-center rounded-lg p-2 h-8 ml-10 ${
          isPositiveChange ? "bg-green-300/20" : "bg-red-300/20"
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-4 fill-current ${
            isPositiveChange ? "text-green-600" : "text-red-600"
          }`}
          style={{ transform: isPositiveChange ? "" : "rotate(180deg)" }}
        >
          <polygon points="0,100 50,0 100,100" />
        </svg>
        <span
          className={`ml-2 text-sm font-bold ${
            isPositiveChange ? "text-green-600" : "text-red-600"
          }`}
        >
          {changePercentage}%
        </span>
      </div>
    </div>
  );
}

export default TrendingCoins;
