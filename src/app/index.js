require ('../sass/main.scss');
require ('./utilities/backgroundAnim.js')


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, hashHistory} from 'react-router-dom';

import App from "./App.jsx";

const app = document.getElementById('app');

/*const Main = () => (
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
)*/


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
