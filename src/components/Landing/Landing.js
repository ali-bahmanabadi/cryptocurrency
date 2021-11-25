import React, { useState, useEffect } from 'react'
import { getCoin } from '../../sevises/api'
import Coin from '../Coin/Coin'
import Loader from '../Loader/Loader'

import style from './Landing.module.css'

const Landing = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin()
      console.log(data)
      setCoins(data)
    }

    fetchAPI()
  }, [])

  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div>
      <input
        className={style.input}
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
      {coins.length ? (
        <div className={style.coinContainer}>
          {searchCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.market_cap_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default Landing
