import React from "react";

const Coin = ({
  name,
  image,
  symbol,
  price,
  high_24,
  low_24,
  market_cap,
  total_volume,
  price_change_24,
}) => {
  return (
    <section>
      <div className="coinContainer">
        <div className="coinRow">
          <img src={image} alt={name} />

          <p className="name">{name}</p>

          <p className="symbol">{symbol.toUpperCase()}</p>

          <p className="price">{price.toLocaleString()}</p>

          <p className="high_24">{high_24}</p>

          <p className="low_24">{low_24}</p>

          <p className="marketCap">{market_cap}</p>

          <p className="volume">{total_volume}</p>

          {price_change_24 < 0 ? (
            <p className="price_change_24 red">{price_change_24.toFixed(2)}%</p>
          ) : (
            <p className="price_change_24 green">
              {price_change_24.toFixed(2)}%
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Coin;
