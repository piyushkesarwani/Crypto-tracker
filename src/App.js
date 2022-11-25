import { useState, useEffect } from "react";
import "./App.css";
import Coin from "./Coin";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
      <div className="mainContainer">
        <h1 className="title">Crypto Tracker</h1>
        <div className="coinSearch">
          <form className="cryptoForm">
            <input
              placeholder="Search any coin"
              className="inputCoin"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn">Search</button>
          </form>
        </div>
        {/* {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              high_24={coin.high_24h}
              low_24={coin.low_24h}
              market_cap={coin.market_cap}
              total_volume={coin.total_volume}
              price_change_24={coin.price_change_24h}
            />
          );
        })} */}
        {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  high_24={coin.high_24h}
                  low_24={coin.low_24h}
                  market_cap={coin.market_cap}
                  total_volume={coin.total_volume}
                  price_change_24={coin.price_change_24h}
                />
              );
            })}
      </div>
    </>
  );
}

export default App;
