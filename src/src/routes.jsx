import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import DecToBin from "./Components/DecToBinary_srcFiles/DecToBin";
import StopWatch from "./Components/stopwatch_srcFiles/Stopwatch";
import BorderRadius from "./Components/borderRadius_srcFiles/borderRadius";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/BorderRadius">
                    <BorderRadius />
                </Route>
                <Route exact path="/DecToBin">
                    <DecToBin />
                </Route>
                <Route exact path="/StopWatch">
                    <StopWatch />
                </Route>
                <Route path="/">
                    <Redirect push to="/BorderRadius" />
                </Route>
            </Switch>
        </Router>
    );
}
