import random from 'random'
import React,{useState} from 'react';
const Stocks = () => {
  const [bal, setBal] = useState(10);
  const [shares, setShares] = useState(0);
  const [price, setprice] = useState(random.int(1,10));
  const [sell_max, setSell_max] = useState(0);

  const price_increase = () => {
    setprice(price+1);
  }

  const price_decrease = () => {
    if (price <= 0) {
      setSell_max(shares);
      return;
    }
    else{
      setprice(price-1);
      setSell_max(shares);
    }
  }

  const price_change_random = () => {
    setprice(random.int(1,10));
    setSell_max(shares);
  }

  const bal_increase = () => {
    setBal(bal+1);
    setSell_max(shares);
    price_change_random();
  }

  const bal_decrease = () => {
    if (bal <= 0) {
      setSell_max(shares);
      return;
    }
    else{
      setBal(bal-1);
      setSell_max(shares);
      price_change_random();
    }
  }
  
  const shares_buy = () => {
    setSell_max(shares);
    if (bal <= 0){
      setSell_max(shares);
      return;
    }
    setBal(bal-price);
    setShares(shares+1);
    price_change_random();
  }

  const shares_sell = () => {
    if (shares <= 0) {
      return;
    }
    else{
      setBal(bal+price)
      setShares(shares-1);
      price_change_random();
    }
  }

  const shares_sell_max = () => {
    setBal(bal+shares*price);
    price_change_random();
    setShares(0);
  }

  const shares_buy_max = () => {
    setBal(bal-price*Math.floor(bal/price));
    setShares(shares + Math.floor(bal/price));
    price_change_random();
  }

  return (
    <div>
      <div className="green">
        <h1 className="underline-wavy">STATS:</h1>
        <h2>Current Stock Price: ${price}</h2>
        <h2>Your Balance: ${bal}</h2>
        <h2>Your Shares: {shares}</h2>
        <hr />
      </div>
      <div>
        <h1 className="red overline-wavy">COMMANDS:</h1>
        <div>
          <button onClick={price_change_random}>Change Price</button>
        </div>
        <div>
          <button onClick={shares_buy}>Buy 1 share</button>
          <button onClick={shares_sell}>Sell 1 share</button>
        </div>
        <div>
          <button onClick={shares_sell_max}>Sell {shares} shares</button>
          <button onClick={shares_buy_max}>Buy {Math.floor(bal/price)} shares</button>
        </div>

      </div>
    </div>
  );
};


export default Stocks;