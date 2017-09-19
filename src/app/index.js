require ('../sass/main.scss');
require ('./utilities/backgroundAnim.js')

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';

import Home from "./vues/Home.jsx";
import Projects from "./vues/Projects.jsx";

const app = document.getElementById('app');

class Layout extends React.Component{
    render(){
        return(
            <BrowserRouter history={hashHistory}>
                <Route path="/" component={Projects}/>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Layout/>, app);
