import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);
  return (
    <div className="App">
      <div className="cryptoHeader"></div>
      {/* Loop/map through each object in listOfCoins, and return Coin props */}
      <div className="cryptoDisplay">
        {listOfCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
              priceChange1h={coin.priceChange1h}
              priceChange1d={coin.priceChange1d}
              priceChange1w={coin.priceChange1w}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
