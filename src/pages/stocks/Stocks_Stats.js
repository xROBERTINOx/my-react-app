import React from 'react';
import { Link } from "react-router-dom";


const Main = () => {
    const bal = window.localStorage.getItem("bal");
    const shares = window.localStorage.getItem("shares");
    const price = window.localStorage.getItem("price");
    const daysLeft = window.localStorage.getItem("daysLeft");
    const xp = window.localStorage.getItem("xp");
    const level = window.localStorage.getItem("level");
    if (!bal){
        return(
            <div>
                <h1>You need to start playing</h1>
                <Link to="/stocks/Stocks_Main">Start Playing</Link>
            </div>
        );
    }
    return (
        <div>
            <div>
                <Link to="/stocks/Stocks_Main" className="red">Play Game</Link>
            </div>
            <div>            
                <h1>bal: {bal}</h1>
                <h1>shares: {shares}</h1>
                <h1>stock price: {price}</h1>
                <h1>days left: {daysLeft}</h1>
                <h1>level: {level}</h1>
                <h1>xp: {xp}</h1>
            </div>
        </div>
    );
}
export default Main;
