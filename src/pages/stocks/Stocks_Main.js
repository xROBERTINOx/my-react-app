import random from 'random'
import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Stocks = () => {  
    function checkForItem(item, defaultForItem){
      var checked = window.localStorage.getItem(item);
      if (!checked){
        window.localStorage.setItem(item, defaultForItem);
      }
      return window.localStorage.getItem(item) || defaultForItem;
    }

    const [bal, setBal] = useState(parseInt(checkForItem("bal", 10)));
    const [shares, setShares] = useState(parseInt(checkForItem("shares", 0)));
    const [price, setPrice] = useState(parseInt(checkForItem("price", (random.int(1,10)))));
    const [daysLeft, setDaysLeft] = useState(parseInt(checkForItem("daysLeft", 17)));
    const [resetDays, setresetDays] = useState(parseInt());
    const [xp, setXp] = useState(parseInt(checkForItem("xp", 0)));
    const [level, setLevel] = useState(parseInt(checkForItem("level", 1)));
    //const [tier, setTier] = useState(checkForItem("tier", 1));


    const handleSubmit_resetDays = (event) => {
      if (resetDays === 0){
        return;
      } if (isNaN(resetDays)){
        return;
      } else {
        alert(`reseting stats and new number of days is: ${resetDays}`)
        resetAll();
        setDaysLeft(resetDays);
        window.localStorage.setItem("daysLeft", resetDays);
        alert(`days left: ${daysLeft}\nreset days: ${resetDays}`)
        alert("done1");
        alert("done2");
      }
    }


    const checkForLevelUp = (xp) => {
      if (xp >= 1000000){
        changeLevelByOne();
        changeXp(0);
      } 
      return;
    }

    const  changeLevel = (newLevel) => {
      setLevel(newLevel);
      window.localStorage.setItem("level", newLevel);
    }

    const changeLevelByOne = () => {
      changeLevel(level+1);
      window.localStorage.setItem("level", level);
    }

    const resetAll = () => {
      changeBal(10);
      priceChangeRandom();
      changeShares(0);
      if (bal === 10){
        return;
      } else if (bal <= 10){
        return;
      } else if (bal >= 10){
        var changeBy = bal-10
        changeXp(xp+changeBy);
      }
//      changeXp(xp+bal-10);
    }

    const resetAll_17 = () => {
      changeBal(10);
      priceChangeRandom();
      changeShares(0);
      changeDaysLeft(17);
      changeXp(xp+bal-10);      
    }

    const changeDaysLeft = (newDaysLeft) => {
      setDaysLeft(newDaysLeft);
      window.localStorage.setItem("daysLeft", newDaysLeft);
    }

    const changeBal = (newBal) => {
      setBal(newBal);
      window.localStorage.setItem("bal", newBal)
    }

    const changePrice = (newPrice) => {
      setPrice(newPrice);
      window.localStorage.setItem('price', newPrice);
//      changeDaysLeft(daysLeft-1);
    }

    const changeShares = (newShareCount) => {
      setShares(newShareCount);
      window.localStorage.setItem('shares', newShareCount);  
    }

    const priceChangeRandom = () => {
      changePrice(random.int(1,10));
      changeDaysLeft(daysLeft-1);
    }

    const shares_buy = () => {
      if (bal <= 0){
        alert(`You can't afford to buy stocks right now!`)
        return;
      } else if (bal < price) {
        alert(`You can't afford to buy this stock!`)
      } else {
        changeBal(bal-price);
        changeShares(shares+1);
        changeDaysLeft(daysLeft-1);
      }
    }

    const shares_sell = () => {
      if (shares <= 0) {
        alert(`You don't have any shares to sell!`)
        return;
      }
      else{
        changeBal(bal+price)
        changeShares(shares-1);
        changeDaysLeft(daysLeft-1);
      }
    }

    const shares_sell_max = () => {
      changeBal(bal+shares*price);
      changeShares(0);
      changeDaysLeft(daysLeft-1);
    }

    const shares_buy_max = () => {
      if (Math.floor(bal/price) === 0)
        alert("You can't afford to buy stocks");
      else {
        changeBal(bal-price*Math.floor(bal/price));
        changeShares(shares + Math.floor(bal/price));  
        changeDaysLeft(daysLeft-1);
      }
    }

    const changeXp = (newXp) => {
      window.localStorage.setItem("xp", newXp);
      setXp(newXp);
    }

    checkForLevelUp(xp);

    if (window.localStorage.getItem("daysLeft") <= 0){
      return(
        <div>
          <h1>YOU ARE OUT OF DAYS</h1>
          <h2>days left: {daysLeft}</h2>
          <h2>reset days: {resetDays}</h2>
          <form onSubmit={handleSubmit_resetDays}>
            <label>Reset with custom day count:
              <input 
                type="text" 
                value={resetDays}
                onChange={(e) => setresetDays(e.target.value)}
                />
              </label>
            <input type="submit" />
          </form>  

        </div>
      );
    }
    else {
      return (
        <div>
          <div className="green">
            <h1 className="underline-wavy">STATS:</h1>
            <h2>Current Stock Price: ${price}</h2>
            <h2>Your Balance: ${bal}</h2>
            <h2>Your Shares: {shares}</h2>
            <h2>Days Left: {daysLeft}</h2>
            <h2>Level: {level}</h2>
            <h2>XP: {xp}</h2>
            <hr />
          </div>
          <div>
            <h1 className="red overline-wavy">COMMANDS:</h1>
            <div>
              <button onClick={priceChangeRandom}>Change Price</button>
            </div>
            <div>
              <h2 className="red">Buying and selling one</h2>
              <button onClick={shares_buy}>Buy 1 share</button>
              <button onClick={shares_sell}>Sell 1 share</button>
            </div>
            <div>
              <h2 className="red">Buying and selling max</h2>
              <button onClick={shares_sell_max}>Sell {shares} shares</button>
              <button onClick={shares_buy_max}>Buy {Math.floor(bal/price)} shares</button>
            </div>
            <div>
              <button onClick={resetAll_17}>Reset with 17 days</button>
            </div>
            <div>
              <form onSubmit={handleSubmit_resetDays}>
                <label>Reset with custom day count:
                  <input 
                    type="text" 
                    value={resetDays}
                    onChange={(e) => setresetDays(e.target.value)}
                  />
                </label>
                <input type="submit" />
              </form>  
            </div>
          </div>
          <div>
            <Link to="/stocks/Stocks_Stats" className="red">View All Stats</Link>
          </div>
        </div>
      );
    }
};


export default Stocks;