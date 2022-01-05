import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//add stats page

const Game = () => {
    window.localStorage.setItem("invItems", "[1, 1, 1]");

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
        let check = window.localStorage.getItem(item);
        if (!check){
            window.localStorage.setItem(item, defaultForItem);
            check = window.localStorage.getItem(item);
        }
        check = JSON.parse(check);
        return check;
    }

    const [invCount, setInvCount] = useState(getItemArr("invCount", "[3,1,3]"));
    const invItems = ["coins","apples","fish_1","fish_2","wood_1","wood_2"];
//ALL ITEMS:
//*coins
//*apples
//*fish_1
//*fish_2
//*fish_3
//*wood_1
//*wood_2

    const changeInvCount = (newArr) => {
        setInvCount(newArr);
        const realNewArr = JSON.stringify(newArr);
        window.localStorage.setItem("invCount", realNewArr);
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
                <h2>{number} {invItems[index]}</h2>
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