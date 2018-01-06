import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router} from 'react-router-dom';

import '../sass/main.scss';
import './utilities/backgroundAnim.js';

import App from "./App.jsx";
import Main from "./components/Main.jsx";

const app = document.getElementById('app');

class Layout extends React.Component{
    render(){
        return(
            <Router>
                <App/>
            </Router>
        );
    }
}

ReactDOM.render(<Layout/>, app);
