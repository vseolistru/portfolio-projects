import React, {useEffect, useState} from 'react';

const PriceChecker = () => {

    const [currentBTCPrice, setBTC] = useState('')
    const [currentETHPrice, setETH] = useState(0)

    useEffect(()=>{
        const fetchBTC = () => {
            fetch('https://api.coincap.io/v2/assets/bitcoin')
                .then(res=>res.json())
                .then(data=>setBTC(data))
        }
        const fetchETH = () => {
            fetch('https://api.coincap.io/v2/assets/ethereum')
                .then(res=>res.json())
                .then(data=>setETH(data))
        }

        fetchBTC()
        fetchETH()
    }, [])

    return (
        <>
            <div className="portfolio__sidebar-item-price-widget">
                <p>BTC - price: {parseInt(currentBTCPrice.data?.priceUsd).toFixed(2)}</p>
            </div>
            <div className="portfolio__sidebar-item-price-widget">
                <p>ETH - price: {parseInt(currentETHPrice.data?.priceUsd).toFixed(2)}</p>
            </div>
        </>
    );
};

export default PriceChecker;