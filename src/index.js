import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Stocks from "./pages/stocks/Stocks_Main";
import Main from "./pages/stocks/Stocks_Stats";
import Text from "./pages/Text";
import Form from "./pages/Form";
import TextArea from "./pages/TextArea";
import Poker_Main from "./pages/poker/Poker_Main";


export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/text">Text Project</Link>
      </div>
      <div>
        <Link to="/form">Form Project</Link>
      </div>
      <div>
        <Link to="/stocks/Stocks_Main">Stock Project: Game</Link>
      </div>
      <div>
        <Link to="/stocks/Stocks_Stats">Stock Project: Stats</Link>
      </div>
      <div>
        <Link to="/poker/Poker_Main">Poker Project: Game</Link>
      </div>
      <div>
        <Link to="/blogs">Blog Articles</Link>
      </div>
      <div>
        <Link to="/textarea">Text Area</Link>
      </div>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/stocks/Stocks_Main">
          <Stocks />
        </Route>
        <Route path="/stocks/Stocks_Stats">
          <Main />
        </Route>
        <Route path="/text">
          <Text />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/textarea">
          <TextArea />
        </Route>
        <Route path="/poker/Poker_Main">
          <Poker_Main />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));