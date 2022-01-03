import { map } from 'mathjs';
import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//add stats page

const Game = () => {
    const getItem = (item, defaultForItem, constOrVar) => {
        if (constOrVar === "const") {
            const check = window.localStorage.getItem(item);
        } else if (constOrVar === "var") {
            var check = window.localStorage.getItem(item);
        }
        if (!check) {
            window.localStorage.setItem(item, defaultForItem);
        }    
        return window.localStorage.getItem(item);
    }

    const [invCount, setInvCount] = useState([3,1,3])
    const [invItem, setInvItem] = useState(["swords", "coins", "other inv item"])
//    setInv(JSON.parse(inv))
//    const inv = JSON.stringify(value);
//    save `valueAsString`
//    const parsedValue = JSON.parse(valueAsString);
//    to change back to value  



    
    const increaseInvCount = () => {
        setInvCount([...invCount, invCount.length]);
    }

    const decreaseInvCount = (index) => {
        setInvCount(
            invCount.filter((value, idx) => idx !== index)
        );
    }

    return(
        <div>
            {invCount.map((number, index) => (
                
                <h2>{number} {invItem[index]}</h2>
            ))}
            <h2>{invCount}</h2>
        </div>
    );
}

export default Game;