require ('../sass/main.scss');
require ('./utilities/backgroundAnim.js')


import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router} from 'react-router-dom';

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
