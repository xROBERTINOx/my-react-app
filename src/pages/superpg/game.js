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

    const getItemArr = (item, defaultForItem) => {
        const check = window.localStorage.getItem(item);
        if (!check){
            window.localStorage.setItem(item, defaultForItem);
        }
        return JSON.parse(window.localStorage.getItem(item));  
    }
//    const gotArr = getItemArr("invItem", "['swords', 'coins', 'other inv item']");
//    const [invItem, setInvItem] = useState(getItemArr("invCount", "[3,1,3]"));
    const [invCount, setInvCount] = useState(getItemArr("invCount", "[3,1,3]"));
 //   const testBefore = getItem(getItemArr("test", "[{item:'coins',amount:'3'}{item:'apples',amount:2}]"));
//    const testAfter = JSON.parse(testBefore);
//    const [test, setTest] = useState(getItemArr("test", "[{item:'coins',amount:'3'}{item:'apples',amount:2}]"));
//    setInv(JSON.parse(inv))
//    const inv = JSON.stringify(value);
//    save `valueAsString`
//    const parsedValue = JSON.parse(valueAsString);
//    to change back to value  
    
    const changeInvCount = (newArr) => {
        const realNewArr = JSON.stringify(newArr);
        window.localStorage.setItem("invCount", realNewArr);
        setInvCount(realNewArr);
        return;
    }

    const increaseInvCountByOne = (index) => {
        let newArr = [...invCount]
        newArr[index] = invCount[index] + 1
        changeInvCount(newArr);
    }

    const decreaseInvCountByOne = (index) => {
        let newArr = [...invCount]
        if (newArr[index] <= 0 ) {
            return;
        } else if (newArr[index] >= 1) {
            newArr[index] = invCount[index] - 1
            changeInvCount(newArr);
        }
    }

    return(
        <div>
            {invCount.map((number, index) => (    
                <h2>{number}</h2>
            ))}
            {invCount.map((number, index) => (
                <button onClick={() => increaseInvCountByOne(index)}>Increase by one</button>
            ))}
            <div></div>
            {invCount.map((number, index) => (
                <button onClick={() => decreaseInvCountByOne(index)}>Decrease by one</button>
            ))}            
        </div>
    );
}

export default Game;