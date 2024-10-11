import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoCard from "./CryptoCard";

const Dashboard = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
          headers: {
           'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '028e7a89e5mshbcf100af2e0d98cp19438ejsnbb861432b14d',
          },
        });
        console.log(response.data);  // Log the full response
  setCryptos(response.data.data.coins);
} catch (error) {
  console.error("Error fetching data:", error);
}
    };
    fetchCryptos();
  }, []);

  return (
    <div className="dashboard">
      {cryptos.map((crypto) => (
        <CryptoCard
          key={crypto.id}
          name={crypto.name}
          price={crypto.price}
          marketCap={crypto.marketCap}
          iconUrl={crypto.iconUrl}
        />
      ))}
    </div>
  );
};

export default Dashboard;


