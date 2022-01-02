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

    const [inv, setInv] = useState({})
//    setInv(JSON.parse(inv))
//    const inv = JSON.stringify(value);
//    save `valueAsString`
//    const parsedValue = JSON.parse(valueAsString);
//    to change back to value  



    
    const increaseInv = () => {
        setInv([...inv, inv.length]);
    }

    const decreaseInv = (index) => {
        setInv(
            inv.filter((value, idx) => idx !== index)
        );
    }

    return(
        <div>
            {inv.map((number, index) => (
                <h2>item {number}</h2>
            ))}
            <h2>{inv}</h2>
        </div>
    );
}

export default Game;