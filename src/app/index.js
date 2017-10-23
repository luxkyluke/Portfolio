require ('../sass/main.scss');
require ('./utilities/backgroundAnim.js')


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, hashHistory} from 'react-router-dom';

import App from "./App.jsx";

const app = document.getElementById('app');

class Layout extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Layout/>, app);
