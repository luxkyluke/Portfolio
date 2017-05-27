require ('../sass/main.scss');

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';

import Home from "./vues/Home.js";

const app = document.getElementById('app');

class Layout extends React.Component{
    render(){
        return(
            <BrowserRouter history={hashHistory}>
                <Route path="/" component={Home}/>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Layout/>, app);
