import React from 'react'

import style from './Coin.module.css'

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <div className={style.container}>
      <img src={image} alt="" className={style.image} />
      <span className={style.name}>{name}</span>
      <span className={style.symbol}>{symbol.toUpperCase()}</span>
      <span className={style.currentPrice}>$ {price.toLocaleString()}</span>
      <span className={priceChange > 0 ?  style.greenPriceChange : style.redPriceChange}>{priceChange.toFixed(2)}</span>
      <span className={style.marketCap}>$ {marketCap.toLocaleString()}</span>
    </div>
  )
}

export default Coin
