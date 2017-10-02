require ('../sass/main.scss');
require ('./utilities/backgroundAnim.js')


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, hashHistory, Switch, HashRouter } from 'react-router-dom';

import HomePage from "./vues/HomePage.jsx";
import Projects from "./vues/Projects.jsx";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const app = document.getElementById('app');

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/projects' component={Projects}/>
    </Switch>
  </main>
)

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer/>
  </div>
)


class Layout extends React.Component{
    render(){
        return(
            <BrowserRouter history={hashHistory}>
                <App/>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Layout/>, app);
