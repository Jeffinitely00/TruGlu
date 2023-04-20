import React from 'react'

function Coin({name, icon, price, symbol, priceChange1h, priceChange1d, priceChange1w}) {
  return (
    <div className="coin">
        <h1> {name} </h1>
        <img src={icon} />
        <h3> Price: {price} </h3>
        <h3> Symbol: {symbol} </h3>
        {/* <div>
            <h5>1h Change: {priceChange1h}</h5>
            <h5>24h Change: {priceChange1d}</h5>
            <h5>7d Change: {priceChange1w}</h5>
        </div> */}
    </div>
  )
}

export default Coin